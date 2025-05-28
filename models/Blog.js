const mongoose = require("mongoose");

const BlogAuthorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  avatar: { type: String, default: "/assets/imgs/blog-4/avatar-1.png" },
  date: { type: String }
});

const BlogContentSchema = new mongoose.Schema({
  intro: { type: String, required: true },
  readTime: { type: String },
  author: { type: BlogAuthorSchema },
  mainImage: { type: String },
  fullContent: { type: String, required: true }
});

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    category: [{ type: String, required: true }],
    author: { type: String, required: true },
    date: { type: String },
    content: { type: BlogContentSchema, required: true },
    link: { type: String },
    premium: { type: Boolean, default: false },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true
    },
    companyId: {
      type: String,
      required: true,
      default: "default"
    }
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog; 