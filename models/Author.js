const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    avatar: { type: String, default: "/assets/imgs/blog-4/avatar.png" },
    bio: { type: String, default: "" },
    companyId: {
      type: String,
      required: true,
      default: "default"
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

// Ensure unique author names per company
AuthorSchema.index({ name: 1, companyId: 1 }, { unique: true });

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author; 