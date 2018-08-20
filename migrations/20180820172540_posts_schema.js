function up(knex) {
  return knex.schema.createTable("posts", table => {
    table.increments();
    table.string("author");
    table.text("content");
    table.string("title");
  });
}

function down(knex) {
  return knex.schema.dropTable("posts");
}

module.exports = { up, down };
