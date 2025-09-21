import PostModel from "./PostModel.js";
import { PostError } from "./lib.js";

class PostService {
  async create(post) {
    const postData = await PostModel.create(post);
    return postData;
  }

  async getAll() {
    const postData = await PostModel.find();
    return postData;
  }

  async getOne(id) {
    if (!id) {
      throw new PostError({ message: "ID is required", statusCode: 404 });
    }
    const postData = await PostModel.findById(id);
    if (postData === null) {
      throw new PostError({
        message: "Not Found with this ID",
        statusCode: 404,
      });
    }

    return postData;
  }

  async update(id, post) {
    if (!id) {
      throw new PostError({ message: "ID is required", statusCode: 404 });
    }
    const postData = await PostModel.findByIdAndUpdate(id, post, {
      new: true,
      runValidators: true,
    });
    if (postData === null) {
      throw new PostError({
        message: "Post not found",
        statusCode: 404,
      });
    }

    return postData;
  }

  async delete(id) {
    if (!id) {
      throw new PostError({ message: "ID is required", statusCode: 404 });
    }
    const postData = await PostModel.findByIdAndDelete(id);
    if (postData === null) {
      throw new PostError({
        message: "Post not found",
        statusCode: 404,
      });
    }
    return postData;
  }
}

export default new PostService();
