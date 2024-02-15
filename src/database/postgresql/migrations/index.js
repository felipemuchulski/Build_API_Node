const createUsers = require("../migrations/createUsers")
const pgConnection = require('../index')

async function migrationsRun() {
    const schemas = [
        createUsers
    ].join('');

    try {
        const db = await pgConnection();
        await db.query(schemas);
        console.log('Migrations executadas com sucesso.');
    } catch (error) {
        console.error(error);
    }
}

module.exports = migrationsRun;
  
