const ListService = require("./ListService");

class ListController {
  async getList(req, res) {
    try {
      const list = await ListService.getList();
      res.json(list);
    } catch (error) {
      res.status(500).json({ error: error, message: error.message });
    }
  }

  async createItem(req, res) {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json("title is required");
    }
    const list = await ListService.addItem({ title });
    res.json(list);
  }
}

module.exports = new ListController();
