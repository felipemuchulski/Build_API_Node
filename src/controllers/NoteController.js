const knex = require("../database/knex");
const { link } = require("../routes");
const connectionString = require("../database/postgresql/connect_database");
const AppError = require("../utils/AppError");

class NotesController {
  async create(request, response) {
    const { title, description, tags, links } = request.body;
    const { user_id } = request.params;

    const [{ note_id }] = await knex("notes")
      .insert({
        title,
        description,
        user_id,
      })
      .returning("note_id");

    console.log("oi", note_id);
    const linksInsert = links.map((link) => {
      return {
        note_id,
        url: link,
      };
    });

    await knex("links").insert(linksInsert);

    const tagsInsert = tags.map((name_tag) => {
      return {
        note_id,
        name_tag,
        user_id,
      };
    });

    await knex("tags").insert(tagsInsert);

    response.json();
  }

  async show(request, response) {
    const { note_id } = request.params;

    try {
      const showNote = await connectionString.query(
        "SELECT * FROM notes WHERE note_id = $1 LIMIT 1",
        [note_id]
      );
      const showTags = await connectionString.query(
        "SELECT * FROM tags WHERE note_id = $1 ORDER BY name_tag ASC",
        [note_id]
      );
      const showLinks = await connectionString.query(
        "SELECT * FROM links WHERE note_id = $1 ORDER BY created_at ASC",
        [note_id]
      );

      if (
        showNote.rows.length > 0 &&
        showTags.rows.length > 0 &&
        showLinks.rows.length > 0
      ) {
        const note = showNote.rows[0];
        const tags = showTags.rows[0];
        const links = showLinks.rows[0];
        return response.json({
          ...note,
          tags,
          links,
        });
      } else {
        console.log(note_id);
        return response.status(404).json({ AppError: `nota nao encontrada` });
      }
    } catch (error) {
      console.error("Erro ao buscar a nota:", error);
      return response.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async delete(request, response) {
    const { note_id } = request.params;

    try {
      const deleteNote = await connectionString.query(
        "DELETE FROM notes WHERE note_id = $1",
        [note_id]
      );

      if (deleteNote.rows.length) {
        response.json("Linha deletada");
      }
    } catch (error) {
      response.status(500).json("Falha ao excluir");
    }
  }

  async index(request, response) {
    const { title, user_id, tags } = request.query;

    let user_Notes;
    try {
      if (tags) {
        const filteredTags = tags.split(",").map(tag => tag.trim());
       

        user_Notes = await connectionString.query(
          "SELECT notes.note_id, notes.title, notes.user_id FROM tags INNER JOIN notes ON tags.note_id = notes.note_id WHERE notes.user_id = $1 AND notes.title LIKE $2 AND tags.name_tag = ANY($3)",
          [user_id, `%${title}%`, filteredTags ]
        );
      
      } else {
        user_Notes = await connectionString.query(
          "SELECT * FROM notes WHERE user_id = $1 AND title LIKE $2 ORDER BY title ASC",
          [user_id, `%${title}%`]
        );

        if (user_Notes.rows.length > 0) {
          return response.json(user_Notes.rows);
        }

        return response.json(user_Notes);
      }

      const userTags = await connectionString.query("SELECT * FROM tags WHERE user_id = $1", [user_id]);
      const notesWithTags = user_Notes.rows.map(note => {
        const noteTags = userTags.rows.filter(tag => tag.note_id === note.note_id);

        return {
          ...note,
          tags: noteTags
        }
      })

      return response.json(notesWithTags);

    } catch (error) {
      
      response.status(500).json("Sem registro");
    }
  }
}

module.exports = NotesController;
