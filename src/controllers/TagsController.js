const knex = require("../database/knex");
const connectionString = require("../database/postgresql/connect_database");

class TagsController {
 async index(request, response) {
    const {user_id} = request.params;

    const tags = await connectionString.query("SELECT * FROM tags WHERE user_id = $1", [user_id]);

    return response.json(tags.rows)
 }
}

module.exports = TagsController