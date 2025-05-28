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
    cta3
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
    if (cta1.badgeVisible !== undefined) cta.cta1.badgeVisible = cta1.badgeVisible;
    if (cta1.badgeBackgroundColor !== undefined) cta.cta1.badgeBackgroundColor = cta1.badgeBackgroundColor;
    if (cta1.badgeTextColor !== undefined) cta.cta1.badgeTextColor = cta1.badgeTextColor;
    if (cta1.title !== undefined) cta.cta1.title = cta1.title;
    if (cta1.tagImage !== undefined) cta.cta1.tagImage = cta1.tagImage;
    if (cta1.star1 !== undefined) cta.cta1.star1 = cta1.star1;
    if (cta1.star2 !== undefined) cta.cta1.star2 = cta1.star2;
    if (cta1.bgEllipse !== undefined) cta.cta1.bgEllipse = cta1.bgEllipse;
    if (cta1.images) cta.cta1.images = cta1.images;
    if (cta1.socialLabel !== undefined) cta.cta1.socialLabel = cta1.socialLabel;
    
    // Update buttons
    if (cta1.buttons) {
      if (cta1.buttons.primary) {
        if (cta1.buttons.primary.visible !== undefined) cta.cta1.buttons.primary.visible = cta1.buttons.primary.visible;
        if (cta1.buttons.primary.text !== undefined) cta.cta1.buttons.primary.text = cta1.buttons.primary.text;
        if (cta1.buttons.primary.link !== undefined) cta.cta1.buttons.primary.link = cta1.buttons.primary.link;
        if (cta1.buttons.primary.backgroundColor !== undefined) cta.cta1.buttons.primary.backgroundColor = cta1.buttons.primary.backgroundColor;
        if (cta1.buttons.primary.textColor !== undefined) cta.cta1.buttons.primary.textColor = cta1.buttons.primary.textColor;
      }
      
      if (cta1.buttons.secondary) {
        if (cta1.buttons.secondary.visible !== undefined) cta.cta1.buttons.secondary.visible = cta1.buttons.secondary.visible;
        if (cta1.buttons.secondary.text !== undefined) cta.cta1.buttons.secondary.text = cta1.buttons.secondary.text;
        if (cta1.buttons.secondary.link !== undefined) cta.cta1.buttons.secondary.link = cta1.buttons.secondary.link;
        if (cta1.buttons.secondary.backgroundColor !== undefined) cta.cta1.buttons.secondary.backgroundColor = cta1.buttons.secondary.backgroundColor;
        if (cta1.buttons.secondary.textColor !== undefined) cta.cta1.buttons.secondary.textColor = cta1.buttons.secondary.textColor;
      }
    }
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
      if (cta4.heading.visible !== undefined) cta.cta4.heading.visible = cta4.heading.visible;
      if (cta4.heading.smallColor !== undefined) cta.cta4.heading.smallColor = cta4.heading.smallColor;
      if (cta4.heading.titleColor !== undefined) cta.cta4.heading.titleColor = cta4.heading.titleColor;
    }
    
    if (cta4.description !== undefined) cta.cta4.description = cta4.description;
    if (cta4.features) cta.cta4.features = cta4.features;
    
    if (cta4.buttons) {
      if (cta4.buttons.primary) {
        if (cta4.buttons.primary.text !== undefined) cta.cta4.buttons.primary.text = cta4.buttons.primary.text;
        if (cta4.buttons.primary.link !== undefined) cta.cta4.buttons.primary.link = cta4.buttons.primary.link;
        if (cta4.buttons.primary.visible !== undefined) cta.cta4.buttons.primary.visible = cta4.buttons.primary.visible;
        if (cta4.buttons.primary.backgroundColor !== undefined) cta.cta4.buttons.primary.backgroundColor = cta4.buttons.primary.backgroundColor;
        if (cta4.buttons.primary.textColor !== undefined) cta.cta4.buttons.primary.textColor = cta4.buttons.primary.textColor;
      }
      
      if (cta4.buttons.secondary) {
        if (cta4.buttons.secondary.text !== undefined) cta.cta4.buttons.secondary.text = cta4.buttons.secondary.text;
        if (cta4.buttons.secondary.link !== undefined) cta.cta4.buttons.secondary.link = cta4.buttons.secondary.link;
        if (cta4.buttons.secondary.visible !== undefined) cta.cta4.buttons.secondary.visible = cta4.buttons.secondary.visible;
        if (cta4.buttons.secondary.backgroundColor !== undefined) cta.cta4.buttons.secondary.backgroundColor = cta4.buttons.secondary.backgroundColor;
        if (cta4.buttons.secondary.textColor !== undefined) cta.cta4.buttons.secondary.textColor = cta4.buttons.secondary.textColor;
      }
    }
  }
  
  // Update cta3 if provided
  if (cta3) {
    if (cta3.tag !== undefined) cta.cta3.tag = cta3.tag;
    if (cta3.tagVisible !== undefined) cta.cta3.tagVisible = cta3.tagVisible;
    if (cta3.tagBackgroundColor !== undefined) cta.cta3.tagBackgroundColor = cta3.tagBackgroundColor;
    if (cta3.tagTextColor !== undefined) cta.cta3.tagTextColor = cta3.tagTextColor;
    if (cta3.title !== undefined) cta.cta3.title = cta3.title;
    if (cta3.titleColor !== undefined) cta.cta3.titleColor = cta3.titleColor;
    if (cta3.subtitle !== undefined) cta.cta3.subtitle = cta3.subtitle;
    if (cta3.subtitleColor !== undefined) cta.cta3.subtitleColor = cta3.subtitleColor;
    if (cta3.description !== undefined) cta.cta3.description = cta3.description;
    if (cta3.descriptionColor !== undefined) cta.cta3.descriptionColor = cta3.descriptionColor;
    if (cta3.tagImage !== undefined) cta.cta3.tagImage = cta3.tagImage;
    
    if (cta3.buttons) {
      if (cta3.buttons.primary) {
        if (cta3.buttons.primary.visible !== undefined) cta.cta3.buttons.primary.visible = cta3.buttons.primary.visible;
        if (cta3.buttons.primary.text !== undefined) cta.cta3.buttons.primary.text = cta3.buttons.primary.text;
        if (cta3.buttons.primary.link !== undefined) cta.cta3.buttons.primary.link = cta3.buttons.primary.link;
        if (cta3.buttons.primary.backgroundColor !== undefined) cta.cta3.buttons.primary.backgroundColor = cta3.buttons.primary.backgroundColor;
        if (cta3.buttons.primary.textColor !== undefined) cta.cta3.buttons.primary.textColor = cta3.buttons.primary.textColor;
      }
    }
  }
  
  await cta.save();
  
  res.status(StatusCodes.OK).json({ cta });
};

module.exports = {
  getCta,
  updateCta,
}; 