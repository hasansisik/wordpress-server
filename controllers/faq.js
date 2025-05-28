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
    faqs1,
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
  
  // Handle Faqs1 updates
  if (faqs1) {
    // Update heading properties
    if (faqs1.heading) {
      if (faqs1.heading.title !== undefined) faq.faqs1.heading.title = faqs1.heading.title;
      if (faqs1.heading.description !== undefined) faq.faqs1.heading.description = faqs1.heading.description;
      if (faqs1.heading.titleColor !== undefined) faq.faqs1.heading.titleColor = faqs1.heading.titleColor;
      if (faqs1.heading.descriptionColor !== undefined) faq.faqs1.heading.descriptionColor = faqs1.heading.descriptionColor;
    }
    
    // Update other properties
    if (faqs1.mainImage !== undefined) faq.faqs1.mainImage = faqs1.mainImage;
    if (faqs1.backgroundImage !== undefined) faq.faqs1.backgroundImage = faqs1.backgroundImage;
    if (faqs1.numberColor !== undefined) faq.faqs1.numberColor = faqs1.numberColor;
    if (faqs1.numberBgColor !== undefined) faq.faqs1.numberBgColor = faqs1.numberBgColor;
    
    // If support items array is provided, replace it entirely
    if (faqs1.supportItems !== undefined) faq.faqs1.supportItems = faqs1.supportItems;
    
    // If questions array is provided, replace it entirely
    if (faqs1.questions !== undefined) faq.faqs1.questions = faqs1.questions;
  }
  
  // Handle Faqs2 updates
  if (faqs2) {
    // Update heading properties
    if (faqs2.heading) {
      if (faqs2.heading.tag !== undefined) faq.faqs2.heading.tag = faqs2.heading.tag;
      if (faqs2.heading.title !== undefined) faq.faqs2.heading.title = faqs2.heading.title;
      if (faqs2.heading.description !== undefined) faq.faqs2.heading.description = faqs2.heading.description;
      if (faqs2.heading.titleColor !== undefined) faq.faqs2.heading.titleColor = faqs2.heading.titleColor;
      if (faqs2.heading.descriptionColor !== undefined) faq.faqs2.heading.descriptionColor = faqs2.heading.descriptionColor;
    }
    
    // Update tag properties
    if (faqs2.tagVisible !== undefined) faq.faqs2.tagVisible = faqs2.tagVisible;
    if (faqs2.tagBackgroundColor !== undefined) faq.faqs2.tagBackgroundColor = faqs2.tagBackgroundColor;
    if (faqs2.tagTextColor !== undefined) faq.faqs2.tagTextColor = faqs2.tagTextColor;
    if (faqs2.tagImage !== undefined) faq.faqs2.tagImage = faqs2.tagImage;
    
    // If questions array is provided, replace it entirely
    if (faqs2.questions !== undefined) faq.faqs2.questions = faqs2.questions;
  }
  
  // Handle Faqs3 updates
  if (faqs3) {
    // Update heading properties
    if (faqs3.heading) {
      if (faqs3.heading.tag !== undefined) faq.faqs3.heading.tag = faqs3.heading.tag;
      if (faqs3.heading.title !== undefined) faq.faqs3.heading.title = faqs3.heading.title;
      if (faqs3.heading.description !== undefined) faq.faqs3.heading.description = faqs3.heading.description;
      if (faqs3.heading.titleColor !== undefined) faq.faqs3.heading.titleColor = faqs3.heading.titleColor;
      if (faqs3.heading.descriptionColor !== undefined) faq.faqs3.heading.descriptionColor = faqs3.heading.descriptionColor;
    }
    
    // Update tag properties
    if (faqs3.tagVisible !== undefined) faq.faqs3.tagVisible = faqs3.tagVisible;
    if (faqs3.tagBackgroundColor !== undefined) faq.faqs3.tagBackgroundColor = faqs3.tagBackgroundColor;
    if (faqs3.tagTextColor !== undefined) faq.faqs3.tagTextColor = faqs3.tagTextColor;
    if (faqs3.tagImage !== undefined) faq.faqs3.tagImage = faqs3.tagImage;

    // Update description and image visibility
    if (faqs3.descriptionVisible !== undefined) faq.faqs3.descriptionVisible = faqs3.descriptionVisible;
    if (faqs3.leftImagesVisible !== undefined) faq.faqs3.leftImagesVisible = faqs3.leftImagesVisible;
    
    // Update button properties
    if (faqs3.buttons) {
      if (faqs3.buttons.primary) {
        if (faqs3.buttons.primary.text !== undefined) faq.faqs3.buttons.primary.text = faqs3.buttons.primary.text;
        if (faqs3.buttons.primary.link !== undefined) faq.faqs3.buttons.primary.link = faqs3.buttons.primary.link;
        if (faqs3.buttons.primary.visible !== undefined) faq.faqs3.buttons.primary.visible = faqs3.buttons.primary.visible;
        if (faqs3.buttons.primary.backgroundColor !== undefined) faq.faqs3.buttons.primary.backgroundColor = faqs3.buttons.primary.backgroundColor;
        if (faqs3.buttons.primary.textColor !== undefined) faq.faqs3.buttons.primary.textColor = faqs3.buttons.primary.textColor;
      }
      
      if (faqs3.buttons.secondary) {
        if (faqs3.buttons.secondary.text !== undefined) faq.faqs3.buttons.secondary.text = faqs3.buttons.secondary.text;
        if (faqs3.buttons.secondary.link !== undefined) faq.faqs3.buttons.secondary.link = faqs3.buttons.secondary.link;
        if (faqs3.buttons.secondary.visible !== undefined) faq.faqs3.buttons.secondary.visible = faqs3.buttons.secondary.visible;
        if (faqs3.buttons.secondary.textColor !== undefined) faq.faqs3.buttons.secondary.textColor = faqs3.buttons.secondary.textColor;
      }
    }
    
    // Update image properties
    if (faqs3.leftImage1 !== undefined) faq.faqs3.leftImage1 = faqs3.leftImage1;
    if (faqs3.leftImage2 !== undefined) faq.faqs3.leftImage2 = faqs3.leftImage2;
    
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
