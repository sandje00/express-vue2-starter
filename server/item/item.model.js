'use strict';

const { Model } = require('Sequelize');

class Item extends Model {
  static fields({ INTEGER, STRING, DATE }) {
    return {
      id: {
        type: INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      itemName: {
        type: STRING,
        allowNull: false
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

  static options() {
    return {
      tableName: 'items',
      underscored: true,
      paranoid: true,
      timestamps: true
    };
  }

  static associate({ User, Item: Items }) {
    this.belongsTo(User, { foreignKey: { name: 'userId', field: 'user_id' } });
    this.hasMany(Items, { foreignKey: { name: 'itemId', field: 'item_id' } });
  }
}

module.exports = Item;
