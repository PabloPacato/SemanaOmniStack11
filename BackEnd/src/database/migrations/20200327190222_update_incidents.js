
exports.up = function(knex) {
    return knex.schema.alterTable('incidents', function (table){
        table.string('category_id');

        table.foreign('category_id').references('id').inTable('category');
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropForeign('category_id')
    .dropColumn('category_id');
};
