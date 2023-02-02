const AbstractManager = require("./AbstractManager");

class ProfessorManager extends AbstractManager {
  constructor() {
    super({ table: "professor" });
  }

  find(id) {
    return this.connection.query(
      `select id, firstname, lastname, email, city from  ${this.table} where id = ?`,
      [id]
    );
  }

  findByEmailWithPassword(email) {
    return this.connection.query(
      `select * from  ${this.table} where email = ?`,
      [email]
    );
  }

  findAll() {
    return this.connection.query(
      `select id, firstname, lastname, email from  ${this.table}`
    );
  }

  insert(professor) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, password, email, avatar) values (?, ?, ?, ?, ?)`,
      [
        professor.firstname,
        professor.lastname,
        professor.hashedPassword,
        professor.email,
        professor.avatar,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, city = ?, language = ?, hashedPassword = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.city,
        user.hashedPassword,
        user.id,
      ]
    );
  }
}

module.exports = ProfessorManager;
