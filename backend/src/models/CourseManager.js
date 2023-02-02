const AbstractManager = require("./AbstractManager");

class CourseManager extends AbstractManager {
  constructor() {
    super({ table: "course" });
  }

  find(id) {
    return this.connection.query(
      `select ${this.table}.id, name, language, description, professor_id, p.firstname, p.lastname from  ${this.table} 
      JOIN professor as p ON ${this.table}.professor_id = p.id
       where ${this.table}.id = ?`,
      [id]
    );
  }

  findAll() {
    return this.connection.query(
      `select ${this.table}.id, name, language, description, professor_id, p.firstname, p.lastname from  ${this.table}
      LEFT JOIN professor as p ON ${this.table}.professor_id = p.id ORDER BY ${this.table}.id DESC
      `
    );
  }

  insert(course) {
    return this.connection.query(
      `insert into ${this.table} (name, language, description, professor_id) values (?, ?, ?, ?)`,
      [course.name, course.language, course.description, course.professor_id]
    );
  }

  update(course) {
    return this.connection.query(
      `update ${this.table} set name = ?, language = ?, description = ? where id = ?`,
      [course.name, course.language, course.description, course.id]
    );
  }

  delete(id) {
    return this.connection.query(
      `delete from ${this.table} where ${this.table}.id = ?`,
      [id]
    );
  }
}

module.exports = CourseManager;
