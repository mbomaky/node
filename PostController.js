import PostService from "./PostService.js";

class PostController {
  async create(req, res) {
    try {
      const { author, title, text, image } = req.body;
      const post = await PostService.create({ author, title, text, image });
      res.json(post);
    } catch (error) {
      return res
        .status(error.statusCode || 500)
        .json({ message: error.message, name: error.name });
    }
  }

  async getAll(req, res) {
    try {
      const post = await PostService.getAll();
      res.json(post);
    } catch (error) {
      return res
        .status(error.statusCode || 500)
        .json({ message: error.message, name: error.name });
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const post = await PostService.getOne(id);
      if (post === null) {
        return res.status(404).json({ message: "Not Found with this ID" });
      }
      res.json(post);
    } catch (error) {
      if (error.name === "CastError") {
        return res.status(400).json({ message: "Invalid post ID" });
      }
      return res
        .status(error.statusCode || 500)
        .json({ message: error.message, name: error.name });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { author, title, text, image } = req.body;
      const post = await PostService.update(id, {
        author,
        title,
        text,
        image,
      });
      res.json(post);
    } catch (error) {
      if (error.name === "CastError") {
        return res.status(400).json({ message: "Invalid post ID" });
      }
      return res
        .status(error.statusCode || 500)
        .json({ message: error.message, name: error.name });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const post = await PostService.delete(id);
      res.json(post);
    } catch (error) {
      if (error.name === "CastError") {
        return res.status(400).json({ message: "Invalid post ID" });
      }
      res.status(500).json({ error: error.message });
      return res
        .status(error.statusCode || 500)
        .json({ message: error.message, name: error.name });
    }
  }
}

export default new PostController();
