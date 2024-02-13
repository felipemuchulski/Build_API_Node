const Client = require('pg').Client
const client = new Client({
    user: "postgres",
    password: "91584072",
    host: "localhost",
    port: 5432,
    database: "Node_API"
});


async function pgConnection(){
   await client.connect();
}



module.exports = pgConnection;