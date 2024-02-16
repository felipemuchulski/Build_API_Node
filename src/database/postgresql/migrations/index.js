const createUsers = require("../migrations/createUsers")
const pgConnection = require('../index')

 const connect = pgConnection();

async function migrationsRun() {
    const schemas = [
        createUsers
    ].join('');

    try {
        const db = await connect;
        await db.query(schemas);
        console.log('Migrations executadas com sucesso.');
    } catch (error) {
        console.log('Já existe essa tabela');
    }
}

module.exports = migrationsRun;
  
