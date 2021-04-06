'use strict';

const {
  DATABASE_ADAPTER,
  DATABASE_HOST,
  DATABASE_URI,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_NAME
} = process.env;

module.exports = {
  ...readConfig(),
  migrationStorageTableName: 'sequelize_meta'
};

function readConfig() {
  if (DATABASE_URI) return { url: DATABASE_URI };
  if (!DATABASE_NAME && !DATABASE_URI) {
    throw new Error('Missing database connection params in the config');
  }

  return {
    database: DATABASE_NAME,
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    dialect: DATABASE_ADAPTER || 'postgres'
  };
}
