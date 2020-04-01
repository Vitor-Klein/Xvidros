exports.up = function(knex) {
  return knex.schema.createTable('products', function (table) {
    table.increments()

    table.string('title').notNullable()
    table.string('description').notNullable()
    table.decimal('value').notNullable()

    table.string('loja_id').notNullable()

    table.foreign('loja_id').references('id').inTable('lojas')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('products')
};
