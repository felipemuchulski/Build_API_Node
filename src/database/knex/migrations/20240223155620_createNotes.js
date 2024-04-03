const knex = require("knex");
const { table } = require("..");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable("notes", (table) => {
    table.increments("note_id");
    table.text("title");
    table.text("description");

    table.integer("user_id").references("id_users").inTable("users");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("update_at").defaultTo(knex.fn.now());
    

});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("notes");
