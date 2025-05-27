const ContactForm = require("../models/ContactForm");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

// Create a new contact form submission
const createContactForm = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    throw new CustomError.BadRequestError("Please provide all required fields");
  }

  const contactForm = await ContactForm.create({
    name,
    email,
    phone,
    subject,
    message
  });

  res.status(StatusCodes.CREATED).json({ contactForm });
};

// Get all contact form submissions
const getAllContactForms = async (req, res) => {
  const contactForms = await ContactForm.find({}).sort("-createdAt");
  res.status(StatusCodes.OK).json(contactForms);
};

// Delete a contact form submission
const deleteContactForm = async (req, res) => {
  const { id: contactFormId } = req.query;

  if (!contactFormId) {
    throw new CustomError.BadRequestError("Please provide contact form ID");
  }

  const contactForm = await ContactForm.findOne({ _id: contactFormId });

  if (!contactForm) {
    throw new CustomError.NotFoundError(`No contact form with id ${contactFormId}`);
  }

  await contactForm.deleteOne();
  res.status(StatusCodes.OK).json({ msg: "Success! Contact form removed." });
};

module.exports = {
  createContactForm,
  getAllContactForms,
  deleteContactForm,
}; 