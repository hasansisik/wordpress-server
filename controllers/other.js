const Other = require("../models/Other");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

// Get other
const getOther = async (req, res) => {
  let other = await Other.findOne({});
  
  // If no other exists, create a default one
  if (!other) {
    other = await Other.create({});
  }
  
  res.status(StatusCodes.OK).json({ other });
};

// Update other
const updateOther = async (req, res) => {
  const { 
    activeOther,
    blog1,
    blog2,
    blog3,
    blog5,
    contact1
  } = req.body;
  
  // Get the current other or create one if it doesn't exist
  let other = await Other.findOne({});
  if (!other) {
    other = await Other.create({});
  }
  
  // Update fields that were provided
  if (activeOther !== undefined) other.activeOther = activeOther;
  
  // Update blog1 properties if they exist
  if (blog1) {
    if (blog1.badge !== undefined) other.blog1.badge = blog1.badge;
    if (blog1.title !== undefined) other.blog1.title = blog1.title;
    if (blog1.subtitle !== undefined) other.blog1.subtitle = blog1.subtitle;
    if (blog1.seeAllLink !== undefined) other.blog1.seeAllLink = blog1.seeAllLink;
  }
  
  // Update blog2 properties if they exist
  if (blog2) {
    if (blog2.badge !== undefined) other.blog2.badge = blog2.badge;
    if (blog2.title !== undefined) other.blog2.title = blog2.title;
    if (blog2.subtitle !== undefined) other.blog2.subtitle = blog2.subtitle;
    if (blog2.seeAllLink !== undefined) other.blog2.seeAllLink = blog2.seeAllLink;
    if (blog2.bgLine !== undefined) other.blog2.bgLine = blog2.bgLine;
  }
  
  // Update blog3 properties if they exist
  if (blog3) {
    if (blog3.title !== undefined) other.blog3.title = blog3.title;
    if (blog3.bgLine !== undefined) other.blog3.bgLine = blog3.bgLine;
  }
  
  // Update blog5 properties if they exist
  if (blog5) {
    if (blog5.title !== undefined) other.blog5.title = blog5.title;
    if (blog5.subtitle !== undefined) other.blog5.subtitle = blog5.subtitle;
  }
  
  // Update contact1 properties if they exist
  if (contact1) {
    if (contact1.badge !== undefined) other.contact1.badge = contact1.badge;
    if (contact1.title !== undefined) other.contact1.title = contact1.title;
    if (contact1.description !== undefined) other.contact1.description = contact1.description;
    if (contact1.formTitle !== undefined) other.contact1.formTitle = contact1.formTitle;
    if (contact1.chatTitle !== undefined) other.contact1.chatTitle = contact1.chatTitle;
    if (contact1.chatDescription !== undefined) other.contact1.chatDescription = contact1.chatDescription;
    if (contact1.whatsappLink !== undefined) other.contact1.whatsappLink = contact1.whatsappLink;
    if (contact1.viberLink !== undefined) other.contact1.viberLink = contact1.viberLink;
    if (contact1.messengerLink !== undefined) other.contact1.messengerLink = contact1.messengerLink;
    if (contact1.emailTitle !== undefined) other.contact1.emailTitle = contact1.emailTitle;
    if (contact1.emailDescription !== undefined) other.contact1.emailDescription = contact1.emailDescription;
    if (contact1.supportEmail !== undefined) other.contact1.supportEmail = contact1.supportEmail;
    if (contact1.salesEmail !== undefined) other.contact1.salesEmail = contact1.salesEmail;
    if (contact1.inquiryTitle !== undefined) other.contact1.inquiryTitle = contact1.inquiryTitle;
    if (contact1.inquiryDescription !== undefined) other.contact1.inquiryDescription = contact1.inquiryDescription;
    if (contact1.phoneNumber !== undefined) other.contact1.phoneNumber = contact1.phoneNumber;
    if (contact1.services !== undefined) other.contact1.services = contact1.services;
  }
  
  await other.save();
  
  res.status(StatusCodes.OK).json({ other });
};

module.exports = {
  getOther,
  updateOther,
}; 