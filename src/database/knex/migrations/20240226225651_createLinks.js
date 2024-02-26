const knex = require("knex");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable("links", (table) => {
    table.increments("id_link");
    table.text("name_link").notNullable();
    
    table.integer("id_notes").references("notes_id").inTable("notes").onDelete("CASCADE");
    table.timestamp("created_at").defaultTo(knex.fn.now());


    

});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("links");
