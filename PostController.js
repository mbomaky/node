import PostModel from "./PostModel.js";

class PostController {
  async create(req, res) {
    try {
      const { author, title, text, image } = req.body;
      const post = await PostModel.create({ author, title, text, image });
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const post = await PostModel.find();
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(404).json({ message: "This ID is wrong" });
      }

      const post = await PostModel.findById(id);

      if (post === null) {
        return res.status(404).json({ message: "Not Found with this ID" });
      }

      res.json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { author, title, text, image } = req.body;
      const post = await PostModel.create({ author, title, text, image });
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { author, title, text, image } = req.body;
      const post = await PostModel.create({ author, title, text, image });
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new PostController();
