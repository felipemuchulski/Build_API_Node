const Client = require('pg').Client
const client = new Client({
    user: "postgres",
    password: "91584072",
    host: "localhost",
    port: 5432,
    database: "Node_API"
});


async function pgConnection() {
    try {
        await client.connect();
        console.log('Conexão com o PostgreSQL estabelecida com sucesso!');
        return client;
    } catch (error) {
        console.error('Erro ao conectar com o PostgreSQL:', error);
        throw error;
    }
}



module.exports = pgConnection;