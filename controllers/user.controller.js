import { dbPool } from "../db.js";

class UserController {
  async createUser(req, res) {
    const { name, surname } = req.body;
    const user = await dbPool.query(
      "INSERT INTO person(name, surname) values ($1, $2) RETURNING *",
      [name, surname],
    );
    res.json(user.rows[0]);
  }
  async getUsers(req, res) {
    const users = await dbPool.query("SELECT * FROM person");
    res.json(users.rows);
  }
  async getOneUser(req, res) {
    const { id } = req.params;
    if (!id) return res.status(404).send("Not Found");
    const user = await dbPool.query("SELECT * FROM person WHERE id = $1", [id]);
    res.json(user.rows[0]);
  }
  async updateUser(req, res) {
    const { name, surname, id } = req.body;
    const user = await dbPool.query(
      "UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *",
      [name, surname, id],
    );
    res.json(user.rows[0]);
  }
  async deleteUser(req, res) {
    const { id } = req.params;
    if (!id) return res.status(404).send("Not Found");
    const user = await dbPool.query("DELETE FROM person WHERE id = $1", [id]);
    res.json(user.rows[0]);
  }
}

export default new UserController();
