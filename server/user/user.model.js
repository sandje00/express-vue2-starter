'use strict';

const { Model } = require('sequelize');

class User extends Model {
  static fields({ STRING, TEXT, DATE, ENUM }) {
    return {
      username: {
        type: STRING,
        validate: { len: [2, 50] }
      },
      email: {
        type: STRING,
        set(email) {
          this.setDataValue('email', email.toLowerCase());
        },
        validate: { isEmail: true },
        unique: { msg: 'The specified email address is already in use.' }
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

  static associate(/* models */) {
  }
}

module.exports = User;
