const knex = require("knex");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable("tags", (table) => {
    table.increments("id_tags");
    table.text("name_tag").notNullable();
    
    table.integer("id_notes").references("notes_id").inTable("notes");
    table.integer("user_id").references("id_users").inTable("users");


    

});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("tags");
