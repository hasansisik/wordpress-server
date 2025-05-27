const Footer = require("../models/Footer");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

// Get footer
const getFooter = async (req, res) => {
  let footer = await Footer.findOne({});
  
  // If no footer exists, create a default one
  if (!footer) {
    footer = await Footer.create({});
  }
  
  res.status(StatusCodes.OK).json({ footer });
};

// Update footer
const updateFooter = async (req, res) => {
  const { 
    logo, 
    copyright,
    description,
    socialLinks,
    columns,
    contactItems,
    instagramPosts,
    appLinks,
    showAppLinks,
    showInstagram,
    showPrivacyLinks,
    showSocialLinks,
    privacyLinks,
    footerComponent
  } = req.body;
  
  // Get the current footer or create one if it doesn't exist
  let footer = await Footer.findOne({});
  if (!footer) {
    footer = await Footer.create({});
  }
  
  // Update fields that were provided
  if (logo) footer.logo = logo;
  if (copyright !== undefined) footer.copyright = copyright;
  if (description !== undefined) footer.description = description;
  if (socialLinks) footer.socialLinks = socialLinks;
  if (columns) footer.columns = columns;
  if (contactItems) footer.contactItems = contactItems;
  if (instagramPosts) footer.instagramPosts = instagramPosts;
  if (appLinks) footer.appLinks = appLinks;
  if (showAppLinks !== undefined) footer.showAppLinks = showAppLinks;
  if (showInstagram !== undefined) footer.showInstagram = showInstagram;
  if (showPrivacyLinks !== undefined) footer.showPrivacyLinks = showPrivacyLinks;
  if (showSocialLinks !== undefined) footer.showSocialLinks = showSocialLinks;
  if (privacyLinks) footer.privacyLinks = privacyLinks;
  if (footerComponent) footer.footerComponent = footerComponent;
  
  await footer.save();
  
  res.status(StatusCodes.OK).json({ footer });
};

module.exports = {
  getFooter,
  updateFooter,
}; 