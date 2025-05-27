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
    services2,
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
  
  // Update services2 properties if they exist
  if (services2) {
    // Update heading
    if (services2.heading) {
      if (services2.heading.tag !== undefined) other.services2.heading.tag = services2.heading.tag;
      if (services2.heading.title !== undefined) other.services2.heading.title = services2.heading.title;
    }
    
    // Update tag image
    if (services2.tagImage !== undefined) other.services2.tagImage = services2.tagImage;
    
    // Update services array
    if (services2.services !== undefined) other.services2.services = services2.services;
    
    // Update background image
    if (services2.backgroundImage !== undefined) other.services2.backgroundImage = services2.backgroundImage;
    
    // Update buttons
    if (services2.buttons) {
      if (services2.buttons.primary) {
        if (services2.buttons.primary.text !== undefined) other.services2.buttons.primary.text = services2.buttons.primary.text;
        if (services2.buttons.primary.link !== undefined) other.services2.buttons.primary.link = services2.buttons.primary.link;
        if (services2.buttons.primary.btnClass !== undefined) other.services2.buttons.primary.btnClass = services2.buttons.primary.btnClass;
        if (services2.buttons.primary.iconClass !== undefined) other.services2.buttons.primary.iconClass = services2.buttons.primary.iconClass;
      }
      
      if (services2.buttons.secondary) {
        if (services2.buttons.secondary.text !== undefined) other.services2.buttons.secondary.text = services2.buttons.secondary.text;
        if (services2.buttons.secondary.link !== undefined) other.services2.buttons.secondary.link = services2.buttons.secondary.link;
        if (services2.buttons.secondary.btnClass !== undefined) other.services2.buttons.secondary.btnClass = services2.buttons.secondary.btnClass;
        if (services2.buttons.secondary.iconClass !== undefined) other.services2.buttons.secondary.iconClass = services2.buttons.secondary.iconClass;
      }
    }
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