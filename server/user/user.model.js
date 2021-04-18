'use strict';

const Audience = require('../shared/auth/audience');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { logger } = require('../shared/logger');
const { Model } = require('sequelize');
const pick = require('lodash/pick');
const { auth: { saltRounds, secret } } = require('../config');
const { sendVerificationEmail } = require('../shared/mail');

class User extends Model {
  static fields({ INTEGER, STRING, ENUM, BOOLEAN, DATE }) {
    return {
      id: {
        type: INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      username: {
        type: STRING,
        allowNull: false,
        validate: { len: [2, 50] },
        unique: { msg: 'Try again with different username.' }
      },
      email: {
        type: STRING,
        set(email) {
          this.setDataValue('email', email.toLowerCase());
        },
        allowNull: false,
        validate: { isEmail: true },
        unique: { msg: 'Try again with different email.' }
      },
      password: {
        type: STRING,
        allowNull: false
      },
      role: {
        type: ENUM,
        values: ['USER', 'ADMIN'],
        defaultValue: 'USER'
      },
      active: {
        type: BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        type: DATE
      },
      updatedAt: {
        type: DATE
      },
      deletedAt: {
        type: DATE
      }
    };
  }

  static hooks() {
    return {
      beforeCreate(user) {
        return user._hashPassword;
      }
    };
  }

  static options() {
    return {
      tableName: 'users',
      underscored: true,
      paranoid: true,
      timestamps: true
    };
  }

  static associate({ Item, Comment }) {
    this.hasMany(Item, { foreignKey: { name: 'userId', field: 'user_id' } });
    this.hasMany(Comment, { foreignKey: { name: 'userId', field: 'user_id' } });
    this.belongsToMany(Item, { through: 'UserItems' });
  }

  async _hashPassword() {
    if (!this.password) return Promise.resolve(false);
    return bcrypt.genSalt(saltRounds)
      .then(salt => bcrypt.hash(this.password, salt))
      .then(pw => { this.password = pw; });
  }

  createToken(options = {}) {
    const payload = pick(this, ['id', 'email', 'role']);
    return jwt.sign(payload, secret, options);
  }

  verifyEmail() {
    const token = this.createToken({
      audience: Audience.Scope.Setup,
      expiresIn: '5 days'
    });

    return sendVerificationEmail(token, this.email)
      .catch(err => {
        logger.error('An error has occured sending verification email:', err.message);
      });
  }
}

module.exports = User;
