const mongoose = require("mongoose");

const ServiceContentSchema = new mongoose.Schema({
  intro: { type: String },
  readTime: { type: String },
  author: {
    name: { type: String },
    avatar: { type: String },
    date: { type: String }
  },
  mainImage: { type: String },
  fullContent: { type: String }
});

const ServiceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    categories: [{ type: String, required: true }],
    company: { type: String, required: true },
    subtitle: { type: String },
    fullDescription: { type: String },
    tag: { type: String },
    content: { type: ServiceContentSchema, required: true },
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

// Service Category Schema for managing categories
const CategorySchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    companyId: {
      type: String,
      required: true,
      default: "default"
    }
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", ServiceSchema);
const Category = mongoose.model("Category", CategorySchema);

module.exports = { Service, Category }; 