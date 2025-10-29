import mongoose from "mongoose";

const ListSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

const ListModel = mongoose.model("List", ListSchema);

class ListService {
  constructor() {}
  async getList() {
    const data = await ListModel.find();
    return data;
  }
  async addItem(item) {
    const data = await ListModel.create(item);
    return data;
  }
}

module.exports = new ListService();
