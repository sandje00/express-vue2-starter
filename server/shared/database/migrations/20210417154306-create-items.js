'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('items', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    itemName: {
      type: Sequelize.STRING,
      field: 'item_name',
      allowNull: false
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
      field: 'user_id'
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'updated_at'
    },
    deletedAt: {
      type: Sequelize.DATE,
      field: 'deleted_at'
    }
  }),

  down: async queryInterface => queryInterface.dropTable('items')
};
