const Hero = require("../models/Hero");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

// Get hero
const getHero = async (req, res) => {
  let hero = await Hero.findOne({});
  
  // If no hero exists, create a default one
  if (!hero) {
    hero = await Hero.create({});
  }
  
  res.status(StatusCodes.OK).json({ hero });
};

// Update hero
const updateHero = async (req, res) => {
  const { 
    activeHero,
    hero1,
    hero3
  } = req.body;
  
  // Get the current hero or create one if it doesn't exist
  let hero = await Hero.findOne({});
  if (!hero) {
    hero = await Hero.create({});
  }
  
  // Update fields that were provided
  if (activeHero !== undefined) hero.activeHero = activeHero;
  if (hero1) {
    // Update hero1 properties if they exist
    if (hero1.badge) {
      if (hero1.badge.visible !== undefined) hero.hero1.badge.visible = hero1.badge.visible;
      if (hero1.badge.label !== undefined) hero.hero1.badge.label = hero1.badge.label;
      if (hero1.badge.text !== undefined) hero.hero1.badge.text = hero1.badge.text;
      if (hero1.badge.link !== undefined) hero.hero1.badge.link = hero1.badge.link;
      if (hero1.badge.backgroundColor !== undefined) hero.hero1.badge.backgroundColor = hero1.badge.backgroundColor;
      if (hero1.badge.labelBgColor !== undefined) hero.hero1.badge.labelBgColor = hero1.badge.labelBgColor;
      if (hero1.badge.labelTextColor !== undefined) hero.hero1.badge.labelTextColor = hero1.badge.labelTextColor;
      if (hero1.badge.textColor !== undefined) hero.hero1.badge.textColor = hero1.badge.textColor;
      if (hero1.badge.iconColor !== undefined) hero.hero1.badge.iconColor = hero1.badge.iconColor;
    }
    if (hero1.title !== undefined) hero.hero1.title = hero1.title;
    if (hero1.description !== undefined) hero.hero1.description = hero1.description;
    
    if (hero1.primaryButton) {
      if (hero1.primaryButton.visible !== undefined) hero.hero1.primaryButton.visible = hero1.primaryButton.visible;
      if (hero1.primaryButton.text !== undefined) hero.hero1.primaryButton.text = hero1.primaryButton.text;
      if (hero1.primaryButton.link !== undefined) hero.hero1.primaryButton.link = hero1.primaryButton.link;
      if (hero1.primaryButton.backgroundColor !== undefined) hero.hero1.primaryButton.backgroundColor = hero1.primaryButton.backgroundColor;
      if (hero1.primaryButton.textColor !== undefined) hero.hero1.primaryButton.textColor = hero1.primaryButton.textColor;
      if (hero1.primaryButton.iconColor !== undefined) hero.hero1.primaryButton.iconColor = hero1.primaryButton.iconColor;
    }
    
    if (hero1.secondaryButton) {
      if (hero1.secondaryButton.visible !== undefined) hero.hero1.secondaryButton.visible = hero1.secondaryButton.visible;
      if (hero1.secondaryButton.text !== undefined) hero.hero1.secondaryButton.text = hero1.secondaryButton.text;
      if (hero1.secondaryButton.link !== undefined) hero.hero1.secondaryButton.link = hero1.secondaryButton.link;
      if (hero1.secondaryButton.backgroundColor !== undefined) hero.hero1.secondaryButton.backgroundColor = hero1.secondaryButton.backgroundColor;
      if (hero1.secondaryButton.borderColor !== undefined) hero.hero1.secondaryButton.borderColor = hero1.secondaryButton.borderColor;
      if (hero1.secondaryButton.textColor !== undefined) hero.hero1.secondaryButton.textColor = hero1.secondaryButton.textColor;
      if (hero1.secondaryButton.iconColor !== undefined) hero.hero1.secondaryButton.iconColor = hero1.secondaryButton.iconColor;
    }
    
    if (hero1.images) {
      if (hero1.images.background !== undefined) hero.hero1.images.background = hero1.images.background;
      if (hero1.images.shape1 !== undefined) hero.hero1.images.shape1 = hero1.images.shape1;
      if (hero1.images.shape2 !== undefined) hero.hero1.images.shape2 = hero1.images.shape2;
      if (hero1.images.shape3 !== undefined) hero.hero1.images.shape3 = hero1.images.shape3;
    }
    
    if (hero1.card) {
      if (hero1.card.visible !== undefined) hero.hero1.card.visible = hero1.card.visible;
      if (hero1.card.image !== undefined) hero.hero1.card.image = hero1.card.image;
      if (hero1.card.title !== undefined) hero.hero1.card.title = hero1.card.title;
      if (hero1.card.description !== undefined) hero.hero1.card.description = hero1.card.description;
      if (hero1.card.backgroundColor !== undefined) hero.hero1.card.backgroundColor = hero1.card.backgroundColor;
      if (hero1.card.titleColor !== undefined) hero.hero1.card.titleColor = hero1.card.titleColor;
      if (hero1.card.descriptionColor !== undefined) hero.hero1.card.descriptionColor = hero1.card.descriptionColor;
      
      if (hero1.card.button) {
        if (hero1.card.button.label !== undefined) hero.hero1.card.button.label = hero1.card.button.label;
        if (hero1.card.button.text !== undefined) hero.hero1.card.button.text = hero1.card.button.text;
        if (hero1.card.button.link !== undefined) hero.hero1.card.button.link = hero1.card.button.link;
        if (hero1.card.button.backgroundColor !== undefined) hero.hero1.card.button.backgroundColor = hero1.card.button.backgroundColor;
        if (hero1.card.button.labelBgColor !== undefined) hero.hero1.card.button.labelBgColor = hero1.card.button.labelBgColor;
        if (hero1.card.button.labelTextColor !== undefined) hero.hero1.card.button.labelTextColor = hero1.card.button.labelTextColor;
        if (hero1.card.button.textColor !== undefined) hero.hero1.card.button.textColor = hero1.card.button.textColor;
        if (hero1.card.button.iconColor !== undefined) hero.hero1.card.button.iconColor = hero1.card.button.iconColor;
      }
    }
  }
  
  if (hero3) {
    // Update hero3 properties if they exist
    if (hero3.badge) {
      if (hero3.badge.visible !== undefined) hero.hero3.badge.visible = hero3.badge.visible;
      if (hero3.badge.text !== undefined) hero.hero3.badge.text = hero3.badge.text;
      if (hero3.badge.backgroundColor !== undefined) hero.hero3.badge.backgroundColor = hero3.badge.backgroundColor;
      if (hero3.badge.textColor !== undefined) hero.hero3.badge.textColor = hero3.badge.textColor;
      if (hero3.badge.borderColor !== undefined) hero.hero3.badge.borderColor = hero3.badge.borderColor;
    }
    
    if (hero3.title) {
      if (hero3.title.part1 !== undefined) hero.hero3.title.part1 = hero3.title.part1;
      if (hero3.title.part2 !== undefined) hero.hero3.title.part2 = hero3.title.part2;
    }
    
    if (hero3.description !== undefined) hero.hero3.description = hero3.description;
    
    if (hero3.button) {
      if (hero3.button.visible !== undefined) hero.hero3.button.visible = hero3.button.visible;
      if (hero3.button.text !== undefined) hero.hero3.button.text = hero3.button.text;
      if (hero3.button.link !== undefined) hero.hero3.button.link = hero3.button.link;
      if (hero3.button.backgroundColor !== undefined) hero.hero3.button.backgroundColor = hero3.button.backgroundColor;
      if (hero3.button.textColor !== undefined) hero.hero3.button.textColor = hero3.button.textColor;
      if (hero3.button.iconColor !== undefined) hero.hero3.button.iconColor = hero3.button.iconColor;
    }
    
    if (hero3.buttons && hero3.buttons.secondary) {
      if (hero3.buttons.secondary.visible !== undefined) hero.hero3.buttons.secondary.visible = hero3.buttons.secondary.visible;
      if (hero3.buttons.secondary.text !== undefined) hero.hero3.buttons.secondary.text = hero3.buttons.secondary.text;
      if (hero3.buttons.secondary.link !== undefined) hero.hero3.buttons.secondary.link = hero3.buttons.secondary.link;
      if (hero3.buttons.secondary.backgroundColor !== undefined) hero.hero3.buttons.secondary.backgroundColor = hero3.buttons.secondary.backgroundColor;
      if (hero3.buttons.secondary.borderColor !== undefined) hero.hero3.buttons.secondary.borderColor = hero3.buttons.secondary.borderColor;
      if (hero3.buttons.secondary.textColor !== undefined) hero.hero3.buttons.secondary.textColor = hero3.buttons.secondary.textColor;
    }
    
    if (hero3.avatarsVisible !== undefined) hero.hero3.avatarsVisible = hero3.avatarsVisible;
    
    // Handle updating individual avatars
    if (hero3.avatars) {
      hero3.avatars.forEach((avatar, index) => {
        if (index < hero.hero3.avatars.length) {
          if (avatar.image !== undefined) hero.hero3.avatars[index].image = avatar.image;
          if (avatar.alt !== undefined) hero.hero3.avatars[index].alt = avatar.alt;
          if (avatar.visible !== undefined) hero.hero3.avatars[index].visible = avatar.visible;
          if (avatar.borderColor !== undefined) hero.hero3.avatars[index].borderColor = avatar.borderColor;
          if (avatar.backgroundColor !== undefined) hero.hero3.avatars[index].backgroundColor = avatar.backgroundColor;
        }
      });
    }
    
    if (hero3.images) {
      if (hero3.images.image1 !== undefined) hero.hero3.images.image1 = hero3.images.image1;
      if (hero3.images.image2 !== undefined) hero.hero3.images.image2 = hero3.images.image2;
      if (hero3.images.image3 !== undefined) hero.hero3.images.image3 = hero3.images.image3;
      if (hero3.images.image4 !== undefined) hero.hero3.images.image4 = hero3.images.image4;
      if (hero3.images.star !== undefined) hero.hero3.images.star = hero3.images.star;
    }
  }
  
  await hero.save();
  
  res.status(StatusCodes.OK).json({ hero });
};

module.exports = {
  getHero,
  updateHero,
}; 