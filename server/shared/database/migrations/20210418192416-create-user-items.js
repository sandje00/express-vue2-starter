'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('UserItems', {
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
      field: 'user_id'
    },
    postId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'items',
        key: 'id'
      },
      field: 'item_id'
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
  },
  {
    uniqueKeys: {
      user_items_unique: {
        fields: ['user_id', 'item_id']
      }
    }
  }),

  down: async queryInterface => queryInterface.dropTable('UserItems')
};
