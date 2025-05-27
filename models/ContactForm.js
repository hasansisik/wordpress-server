const mongoose = require("mongoose");

const ContactFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
    },
    phone: {
      type: String,
      maxlength: 20,
    },
    subject: {
      type: String,
      required: [true, "Please provide subject"],
      maxlength: 200,
    },
    message: {
      type: String,
      required: [true, "Please provide message"],
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("ContactForm", ContactFormSchema); 