const General = require("../models/General");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

// Get general settings
const getGeneral = async (req, res) => {
  let general = await General.findOne({});
  
  // If no general settings exist, create default ones
  if (!general) {
    general = await General.create({});
  }
  
  res.status(StatusCodes.OK).json({ general });
};

// Update general settings
const updateGeneral = async (req, res) => {
  const { 
    siteName,
    siteDescription,
    favicon,
    theme,
    cloudinary,
    whatsapp,
    colors,
    seo,
    iyzico
  } = req.body;
  
  // Get the current general settings or create if it doesn't exist
  let general = await General.findOne({});
  if (!general) {
    general = await General.create({});
  }
  
  // Update fields that were provided
  if (siteName !== undefined) general.siteName = siteName;
  if (siteDescription !== undefined) general.siteDescription = siteDescription;
  if (favicon !== undefined) general.favicon = favicon;
  
  // Update theme settings if provided
  if (theme) {
    if (theme.headerStyle !== undefined) general.theme.headerStyle = theme.headerStyle;
    if (theme.footerStyle !== undefined) general.theme.footerStyle = theme.footerStyle;
  }
  
  // Update cloudinary settings if provided
  if (cloudinary) {
    if (cloudinary.cloudName !== undefined) general.cloudinary.cloudName = cloudinary.cloudName;
    if (cloudinary.apiKey !== undefined) general.cloudinary.apiKey = cloudinary.apiKey;
    if (cloudinary.apiSecret !== undefined) general.cloudinary.apiSecret = cloudinary.apiSecret;
  }
  
  // Update iyzico settings if provided
  if (iyzico) {
    if (iyzico.apiKey !== undefined) general.iyzico.apiKey = iyzico.apiKey;
    if (iyzico.secretKey !== undefined) general.iyzico.secretKey = iyzico.secretKey;
    if (iyzico.uri !== undefined) general.iyzico.uri = iyzico.uri;
  }
  
  // Update whatsapp settings if provided
  if (whatsapp) {
    if (whatsapp.enabled !== undefined) general.whatsapp.enabled = whatsapp.enabled;
    if (whatsapp.phoneNumber !== undefined) general.whatsapp.phoneNumber = whatsapp.phoneNumber;
    if (whatsapp.message !== undefined) general.whatsapp.message = whatsapp.message;
  }
  
  // Update color settings if provided
  if (colors) {
    if (colors.primaryColor !== undefined) general.colors.primaryColor = colors.primaryColor;
    if (colors.secondaryColor !== undefined) general.colors.secondaryColor = colors.secondaryColor;
    if (colors.accentColor !== undefined) general.colors.accentColor = colors.accentColor;
    if (colors.textColor !== undefined) general.colors.textColor = colors.textColor;
    if (colors.darkPrimaryColor !== undefined) general.colors.darkPrimaryColor = colors.darkPrimaryColor;
    if (colors.darkSecondaryColor !== undefined) general.colors.darkSecondaryColor = colors.darkSecondaryColor;
    if (colors.darkAccentColor !== undefined) general.colors.darkAccentColor = colors.darkAccentColor;
    if (colors.darkTextColor !== undefined) general.colors.darkTextColor = colors.darkTextColor;
  }
  
  // Update SEO settings if provided
  if (seo) {
    // Update general SEO settings
    if (seo.general) {
      if (seo.general.title !== undefined) general.seo.general.title = seo.general.title;
      if (seo.general.description !== undefined) general.seo.general.description = seo.general.description;
      if (seo.general.keywords !== undefined) general.seo.general.keywords = seo.general.keywords;
      if (seo.general.ogTitle !== undefined) general.seo.general.ogTitle = seo.general.ogTitle;
      if (seo.general.ogDescription !== undefined) general.seo.general.ogDescription = seo.general.ogDescription;
      if (seo.general.ogImage !== undefined) general.seo.general.ogImage = seo.general.ogImage;
    }
    
    // Update SEO pages
    if (seo.pages) {
      // Replace entire pages array if provided
      general.seo.pages = seo.pages;
    } else if (seo.pageUpdate) {
      // Update a specific page
      const { id, data } = seo.pageUpdate;
      const pageIndex = general.seo.pages.findIndex(page => page.id === id);
      
      if (pageIndex !== -1) {
        general.seo.pages[pageIndex] = {
          ...general.seo.pages[pageIndex],
          ...data
        };
      }
    }
  }
  
  await general.save();
  
  res.status(StatusCodes.OK).json({ general });
};

module.exports = {
  getGeneral,
  updateGeneral,
}; 