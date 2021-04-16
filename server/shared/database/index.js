'use strict';

const { db: config } = require('../../config');
const invoke = require('lodash/invoke');
const { logger } = require('../logger');
const path = require('path');
const pick = require('lodash/pick');
const { Sequelize } = require('sequelize');
const Umzug = require('umzug');

/* eslint-disable require-sort/require-sort */
const User = require('../../user/user.model');
const Item = require('../../item/item.model');
const Comment = require('../../comment/comment.model');
/* eslint-enable */

const sequelize = new Sequelize(config.url, config);
const isProduction = process.env.NODE_ENV === 'production';

function initialize() {
  const umzug = new Umzug({
    storage: 'sequelize',
    storageOptions: {
      sequelize,
      tableName: config.migrationStorageTableName
    },
    migrations: {
      path: path.join(__dirname, './migrations'),
      params: [
        sequelize.getQueryInterface(), sequelize.Sequelize
      ]
    }
  });

  return sequelize
    .authenticate()
    .then(() => logger.info(getConfig(sequelize), 'Connected to database'))
    .then(() => !isProduction && umzug.up())
    .then(() => umzug.executed())
    .then(migrations => {
      const files = migrations.map(it => it.file);
      if (!files.length) return;
      logger.info({ migrations: files }, 'Executed migrations:\n', files.join('\n'));
    });
}

const models = {
  User: defineModel(User),
  Item: defineModel(Item),
  Comment: defineModel(Comment)
};

function defineModel(Model, connection = sequelize) {
  const { DataTypes } = connection.Sequelize;
  const fields = invoke(Model, 'fields', DataTypes, connection) || {};
  const hooks = invoke(Model, 'hooks', DataTypes, connection) || {};
  const options = invoke(Model, 'options') || {};
  Object.assign(options, { sequelize: connection, hooks });
  return Model.init(fields, options);
}

Object.values(models).forEach(model => {
  invoke(model, 'associate', models);
  invoke(model, 'scopes', models);
});

const db = {
  Sequelize,
  sequelize,
  initialize,
  ...models
};

sequelize.model = name => sequelize.models[name] || db[name];

module.exports = db;

function getConfig(sequelize) {
  // NOTE: List public fields: https://git.io/fxVG2
  return pick(sequelize.config, [
    'database', 'username', 'host', 'port', 'protocol',
    'pool',
    'native',
    'ssl',
    'replication',
    'dialectModulePath',
    'keepDefaultTimezone',
    'dialectOptions'
  ]);
}
