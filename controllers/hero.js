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
      if (hero1.badge.label !== undefined) hero.hero1.badge.label = hero1.badge.label;
      if (hero1.badge.text !== undefined) hero.hero1.badge.text = hero1.badge.text;
      if (hero1.badge.link !== undefined) hero.hero1.badge.link = hero1.badge.link;
    }
    if (hero1.title !== undefined) hero.hero1.title = hero1.title;
    if (hero1.description !== undefined) hero.hero1.description = hero1.description;
    
    if (hero1.primaryButton) {
      if (hero1.primaryButton.text !== undefined) hero.hero1.primaryButton.text = hero1.primaryButton.text;
      if (hero1.primaryButton.link !== undefined) hero.hero1.primaryButton.link = hero1.primaryButton.link;
    }
    
    if (hero1.secondaryButton) {
      if (hero1.secondaryButton.text !== undefined) hero.hero1.secondaryButton.text = hero1.secondaryButton.text;
      if (hero1.secondaryButton.link !== undefined) hero.hero1.secondaryButton.link = hero1.secondaryButton.link;
    }
    
    if (hero1.images) {
      if (hero1.images.background !== undefined) hero.hero1.images.background = hero1.images.background;
      if (hero1.images.shape1 !== undefined) hero.hero1.images.shape1 = hero1.images.shape1;
      if (hero1.images.shape2 !== undefined) hero.hero1.images.shape2 = hero1.images.shape2;
      if (hero1.images.shape3 !== undefined) hero.hero1.images.shape3 = hero1.images.shape3;
    }
    
    if (hero1.card) {
      if (hero1.card.image !== undefined) hero.hero1.card.image = hero1.card.image;
      if (hero1.card.title !== undefined) hero.hero1.card.title = hero1.card.title;
      if (hero1.card.description !== undefined) hero.hero1.card.description = hero1.card.description;
      
      if (hero1.card.button) {
        if (hero1.card.button.label !== undefined) hero.hero1.card.button.label = hero1.card.button.label;
        if (hero1.card.button.text !== undefined) hero.hero1.card.button.text = hero1.card.button.text;
        if (hero1.card.button.link !== undefined) hero.hero1.card.button.link = hero1.card.button.link;
      }
    }
  }
  
  if (hero3) {
    // Update hero3 properties if they exist
    if (hero3.badge && hero3.badge.text !== undefined) hero.hero3.badge.text = hero3.badge.text;
    
    if (hero3.title) {
      if (hero3.title.part1 !== undefined) hero.hero3.title.part1 = hero3.title.part1;
      if (hero3.title.part2 !== undefined) hero.hero3.title.part2 = hero3.title.part2;
    }
    
    if (hero3.description !== undefined) hero.hero3.description = hero3.description;
    
    if (hero3.button) {
      if (hero3.button.text !== undefined) hero.hero3.button.text = hero3.button.text;
      if (hero3.button.link !== undefined) hero.hero3.button.link = hero3.button.link;
    }
    
    if (hero3.avatars) hero.hero3.avatars = hero3.avatars;
    
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