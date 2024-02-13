const Client = require('pg').Client
const client = new Client({
    user: "postgres",
    password: "91584072",
    host: "localhost",
    port: 5432,
    database: "Node_API"
});
const path = require("path")


async function pgConnection(){
    const database = await client.connect({
        filename: path.resolve(__dirname, "..", "database.db"),

    })
    return database
}


// async function sqliteConnection(){
//     const database = await sqlite.open({
//         filename: path.resolve(__dirname, "..", "database.db"),
//         driver: sqlite3.Database
//     })

//     return database;
// }

module.exports = pgConnection;