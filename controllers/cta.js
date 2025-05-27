const Cta = require("../models/Cta");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

// Get CTA
const getCta = async (req, res) => {
  let cta = await Cta.findOne({});
  
  // If no CTA exists, create a default one
  if (!cta) {
    cta = await Cta.create({});
  }
  
  res.status(StatusCodes.OK).json({ cta });
};

// Update CTA
const updateCta = async (req, res) => {
  const { 
    activeCta,
    cta1,
    cta4,
    cta9
  } = req.body;
  
  // Get the current CTA or create one if it doesn't exist
  let cta = await Cta.findOne({});
  if (!cta) {
    cta = await Cta.create({});
  }
  
  // Update fields that were provided
  if (activeCta !== undefined) cta.activeCta = activeCta;
  
  // Update cta1 if provided
  if (cta1) {
    if (cta1.badge !== undefined) cta.cta1.badge = cta1.badge;
    if (cta1.title !== undefined) cta.cta1.title = cta1.title;
    if (cta1.tagImage !== undefined) cta.cta1.tagImage = cta1.tagImage;
    if (cta1.star1 !== undefined) cta.cta1.star1 = cta1.star1;
    if (cta1.star2 !== undefined) cta.cta1.star2 = cta1.star2;
    if (cta1.bgEllipse !== undefined) cta.cta1.bgEllipse = cta1.bgEllipse;
    if (cta1.images) cta.cta1.images = cta1.images;
    if (cta1.socialLabel !== undefined) cta.cta1.socialLabel = cta1.socialLabel;
  }
  
  // Update cta4 if provided
  if (cta4) {
    if (cta4.videoGuide) {
      if (cta4.videoGuide.image !== undefined) cta.cta4.videoGuide.image = cta4.videoGuide.image;
      if (cta4.videoGuide.videoId !== undefined) cta.cta4.videoGuide.videoId = cta4.videoGuide.videoId;
      if (cta4.videoGuide.buttonText !== undefined) cta.cta4.videoGuide.buttonText = cta4.videoGuide.buttonText;
    }
    
    if (cta4.vector && cta4.vector.image !== undefined) cta.cta4.vector.image = cta4.vector.image;
    
    if (cta4.heading) {
      if (cta4.heading.small !== undefined) cta.cta4.heading.small = cta4.heading.small;
      if (cta4.heading.title !== undefined) cta.cta4.heading.title = cta4.heading.title;
    }
    
    if (cta4.description !== undefined) cta.cta4.description = cta4.description;
    if (cta4.features) cta.cta4.features = cta4.features;
    
    if (cta4.buttons) {
      if (cta4.buttons.primary) {
        if (cta4.buttons.primary.text !== undefined) cta.cta4.buttons.primary.text = cta4.buttons.primary.text;
        if (cta4.buttons.primary.link !== undefined) cta.cta4.buttons.primary.link = cta4.buttons.primary.link;
      }
      
      if (cta4.buttons.secondary) {
        if (cta4.buttons.secondary.text !== undefined) cta.cta4.buttons.secondary.text = cta4.buttons.secondary.text;
        if (cta4.buttons.secondary.link !== undefined) cta.cta4.buttons.secondary.link = cta4.buttons.secondary.link;
      }
    }
  }
  
  // Update cta9 if provided
  if (cta9) {
    if (cta9.videoGuide) {
      if (cta9.videoGuide.image !== undefined) cta.cta9.videoGuide.image = cta9.videoGuide.image;
      if (cta9.videoGuide.videoId !== undefined) cta.cta9.videoGuide.videoId = cta9.videoGuide.videoId;
      if (cta9.videoGuide.buttonText !== undefined) cta.cta9.videoGuide.buttonText = cta9.videoGuide.buttonText;
    }
    
    if (cta9.vectors) {
      if (cta9.vectors.vector1 !== undefined) cta.cta9.vectors.vector1 = cta9.vectors.vector1;
      if (cta9.vectors.vector2 !== undefined) cta.cta9.vectors.vector2 = cta9.vectors.vector2;
      if (cta9.vectors.bgLine !== undefined) cta.cta9.vectors.bgLine = cta9.vectors.bgLine;
    }
    
    if (cta9.heading) {
      if (cta9.heading.tag !== undefined) cta.cta9.heading.tag = cta9.heading.tag;
      if (cta9.heading.title !== undefined) cta.cta9.heading.title = cta9.heading.title;
    }
    
    if (cta9.tagImage !== undefined) cta.cta9.tagImage = cta9.tagImage;
  }
  
  await cta.save();
  
  res.status(StatusCodes.OK).json({ cta });
};

module.exports = {
  getCta,
  updateCta,
}; 