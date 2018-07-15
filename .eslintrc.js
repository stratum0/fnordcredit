module.exports = {
  extends: ['joblift/2space', 'joblift/flowtype'],
  env: {
    node: true,
    jest: true,
  },
  globals: {
    knex: false,
    bookshelf: false,
    koa: false,
    broadcast: false,
  },
};
