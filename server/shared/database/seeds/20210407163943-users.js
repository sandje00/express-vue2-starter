'use strict';

const bcrypt = require('bcrypt');
const { auth: { saltRounds } } = require('../../../config');

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('users', [{
      username: 'JohnDoe',
      email: 'johndoe@example.org',
      password: bcrypt.hashSync('mypass', saltRounds),
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
