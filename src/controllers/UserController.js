const { hash } = require("bcryptjs")
const AppError = require("../utils/AppError");
const connectionString = require('../database/postgresql/connect_database');

class UserController {
  async create(request, response) {
    const { name, email, password } = request.body;

    try {
      // Verifica se o email já está cadastrado
      const checkUserExists = await connectionString.query("SELECT * FROM users WHERE email = $1", [email]);

      if (checkUserExists.rows.length > 0) {
        throw new AppError('E-mail já cadastrado', 400);
      }

      const hashedPassWord =  await hash(password, 8)

      // Se o email não existe, adiciona o novo usuário
      await connectionString.query("INSERT INTO users (name_user, password_user, email) VALUES ($1, $2, $3)", [name, hashedPassWord, email]);

      response.status(201).json('Usuário cadastrado com sucesso');
    } catch (error) {
      console.error(error);
      response.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  async update(request, response) {
    const {name, email} = request.body;
    const { id } = request.params;


    try{
    const user = await connectionString.query("SELECT * FROM users WHERE id_users = $1", [id]);

    if(user.rows.length === 0){
      throw new AppError("Usuario nao encontrado")
    }

    const userWithUpdatedEmail = await connectionString.query("SELECT * FROM users WHERE email = $1", [email]);

    if(userWithUpdatedEmail.rows.length > 0 && userWithUpdatedEmail.rows[0].id_users !== user.rows[0].id_users){
      throw new AppError('Este e-mail ja esta em uso')
    }

    user.name = name;
    user.email = email;

    await connectionString.query(`
    UPDATE users SET
    name_user = $1,
    email = $2,
    update_at = $3
    WHERE id_users = $4`,
    [user.rows[0].name_user, user.rows[0].email, new Date(), id])

    return response.status(200).json('alterado');
  } catch (error) {
    console.error(error);
    response.status(error.statusCode || 500).json({ error: error.message });
  }
  }
}

module.exports = UserController;
