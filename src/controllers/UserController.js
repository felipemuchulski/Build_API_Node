const AppError = require("../utils/AppError");
const connectionString = require('../database/postgresql/connect_database');

class UserController {
  async create(request, response) {
    const { name, email, password } = request.body;

    try {
      const checkUserExists = await connectionString.query("SELECT * FROM users WHERE email = $1", [email]);

      if (checkUserExists.length > 0) {
        throw new AppError('E-mail já cadastrado', 400);
      }

      // Lógica para criar o usuário no banco de dados

      response.status(201).json('to aqui');
    } catch (error) {
      console.error(error);
      response.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}

module.exports = UserController;

