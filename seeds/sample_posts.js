async function seed(knex) {
  // Deletes ALL existing entries
  await knex("posts").del();
  // Inserts seed entries
  return knex("posts").insert([
    {
      title: "Seed Post 1",
      author: "Seed Author",
      content: "Seed Post 1 Content"
    },
    {
      title: "Seed Post 2",
      author: "Seed Author",
      content: "Seed Post 2 Content"
    },
    {
      title: "Seed Post 3",
      author: "Seed Author",
      content: "Seed Post 3 Content"
    },
    {
      title: "Seed Post 4",
      author: "Seed Author",
      content: "Seed Post 4 Content"
    }
  ]);
}

module.exports = { seed };
