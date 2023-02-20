const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  upvotes: { type: Number, required: true },
  status: { type: String, required: true },
  description: { type: String, required: true },
  comments: { type: Array, required: true },
  username: { type: String, required: true },
});

module.exports = mongoose.model("feedback", feedbackSchema);
