const mongoose = require("mongoose");

// Home Page Schema
const HomePageSchema = new mongoose.Schema(
  {
    sections: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);

// Privacy Page Schema
const PrivacyPageSchema = new mongoose.Schema(
  {
    hero: {
      title: {
        type: String,
        default: "Privacy Policy"
      },
      description: {
        type: String,
        default: ""
      }
    },
    content: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

// Terms Page Schema
const TermsPageSchema = new mongoose.Schema(
  {
    hero: {
      title: {
        type: String,
        default: "Terms and Conditions"
      },
      description: {
        type: String,
        default: ""
      }
    },
    content: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

const HomePage = mongoose.model("HomePage", HomePageSchema);
const PrivacyPage = mongoose.model("PrivacyPage", PrivacyPageSchema);
const TermsPage = mongoose.model("TermsPage", TermsPageSchema);

module.exports = {
  HomePage,
  PrivacyPage,
  TermsPage
}; 