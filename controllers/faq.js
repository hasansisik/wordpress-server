const Faq = require("../models/Faq");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

// Get FAQ
const getFaq = async (req, res) => {
  let faq = await Faq.findOne({});
  
  // If no FAQ exists, create a default one
  if (!faq) {
    faq = await Faq.create({});
  }
  
  res.status(StatusCodes.OK).json({ faq });
};

// Update FAQ
const updateFaq = async (req, res) => {
  const { 
    activeFaq,
    faqs2,
    faqs3
  } = req.body;
  
  // Get the current FAQ or create one if it doesn't exist
  let faq = await Faq.findOne({});
  if (!faq) {
    faq = await Faq.create({});
  }
  
  // Update fields that were provided
  if (activeFaq !== undefined) faq.activeFaq = activeFaq;
  
  if (faqs2) {
    // Update faqs2 properties if they exist
    if (faqs2.heading) {
      if (faqs2.heading.tag !== undefined) faq.faqs2.heading.tag = faqs2.heading.tag;
      if (faqs2.heading.title !== undefined) faq.faqs2.heading.title = faqs2.heading.title;
      if (faqs2.heading.description !== undefined) faq.faqs2.heading.description = faqs2.heading.description;
    }
    
    if (faqs2.tagImage !== undefined) faq.faqs2.tagImage = faqs2.tagImage;
    
    // If questions array is provided, replace it entirely
    if (faqs2.questions !== undefined) faq.faqs2.questions = faqs2.questions;
  }
  
  if (faqs3) {
    // Update faqs3 properties if they exist
    if (faqs3.heading) {
      if (faqs3.heading.tag !== undefined) faq.faqs3.heading.tag = faqs3.heading.tag;
      if (faqs3.heading.title !== undefined) faq.faqs3.heading.title = faqs3.heading.title;
      if (faqs3.heading.description !== undefined) faq.faqs3.heading.description = faqs3.heading.description;
    }
    
    if (faqs3.buttons) {
      if (faqs3.buttons.primary) {
        if (faqs3.buttons.primary.text !== undefined) faq.faqs3.buttons.primary.text = faqs3.buttons.primary.text;
        if (faqs3.buttons.primary.link !== undefined) faq.faqs3.buttons.primary.link = faqs3.buttons.primary.link;
      }
      
      if (faqs3.buttons.secondary) {
        if (faqs3.buttons.secondary.text !== undefined) faq.faqs3.buttons.secondary.text = faqs3.buttons.secondary.text;
        if (faqs3.buttons.secondary.link !== undefined) faq.faqs3.buttons.secondary.link = faqs3.buttons.secondary.link;
      }
    }
    
    if (faqs3.images) {
      if (faqs3.images.image1 !== undefined) faq.faqs3.images.image1 = faqs3.images.image1;
      if (faqs3.images.image2 !== undefined) faq.faqs3.images.image2 = faqs3.images.image2;
    }
    
    if (faqs3.tagImage !== undefined) faq.faqs3.tagImage = faqs3.tagImage;
    
    // If questions array is provided, replace it entirely
    if (faqs3.questions !== undefined) faq.faqs3.questions = faqs3.questions;
  }
  
  await faq.save();
  
  res.status(StatusCodes.OK).json({ faq });
};

module.exports = {
  getFaq,
  updateFaq,
}; 