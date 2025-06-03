const mongoose = require("mongoose");

const BeforeAfterItemSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  beforeImage: { type: String, required: true },
  afterImage: { type: String, required: true },
  order: { type: Number, default: 0 }
});

const LeftRightItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String, required: true },
  isRightAligned: { type: Boolean, default: false },
  order: { type: Number, default: 0 }
});

const GalleryImageSchema = new mongoose.Schema({
  title: { type: String },
  image: { type: String, required: true },
  order: { type: Number, default: 0 }
});

const HizmetContentSchema = new mongoose.Schema({
  intro: { type: String },
  readTime: { type: String },
  author: {
    name: { type: String },
    avatar: { type: String },
    date: { type: String }
  },
  mainImage: { type: String },
  fullContent: { type: String },
  bannerSectionTitle: { type: String },
  bannerSectionDescription: { type: String },
  bannerSectionImage: { type: String },
  beforeAfterSectionTitle: { type: String, default: "Before-After: Transformation" },
  beforeAfterSectionDescription: { type: String },
  beforeAfterItems: [BeforeAfterItemSchema],
  leftRightSectionTitle: { type: String, default: "Features" },
  leftRightItems: [LeftRightItemSchema],
  gallerySectionTitle: { type: String, default: "Our Team" },
  gallerySectionDescription: { type: String },
  galleryImages: [GalleryImageSchema]
});

const HizmetSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    categories: [{ type: String, required: true }],
    company: { type: String, required: true },
    subtitle: { type: String },
    fullDescription: { type: String },
    tag: { type: String },
    content: { type: HizmetContentSchema, required: true },
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

// Hizmet Category Schema for managing categories (reusing the same structure as Service)
const HizmetCategorySchema = new mongoose.Schema(
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

const Hizmet = mongoose.model("Hizmet", HizmetSchema);
const HizmetCategory = mongoose.model("HizmetCategory", HizmetCategorySchema);

module.exports = { Hizmet, HizmetCategory }; 