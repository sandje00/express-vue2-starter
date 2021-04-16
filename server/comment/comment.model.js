'use strict';

const { Model } = require('sequelize');

class Comment extends Model {
  static fields({ INTEGER, TEXT, DATE }) {
    return {
      id: {
        type: INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      text: {
        type: TEXT,
        allowNull: false
      },
      createdAt: {
        type: DATE,
        allowNull: false
      },
      updatedAt: {
        type: DATE
      },
      deletedAt: {
        type: DATE
      }
    };
  }

  static options() {
    return {
      tableName: 'comments',
      underscored: true,
      paranoid: true,
      timestamps: true
    };
  }
}

module.exports = Comment;
