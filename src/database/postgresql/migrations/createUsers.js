const createUsers = `
CREATE TABLE users(
	id_users SERIAL PRIMARY KEY,
	name_user VARCHAR(266),
	password_user VARCHAR(266),
	email VARCHAR(266),
	avatar VARCHAR(266),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;

module.exports = createUsers;