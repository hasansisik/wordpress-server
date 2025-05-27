const Header = require("../models/Header");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

// Get header
const getHeader = async (req, res) => {
  let header = await Header.findOne({});
  
  // If no header exists, create a default one
  if (!header) {
    header = await Header.create({});
  }
  
  res.status(StatusCodes.OK).json({ header });
};

// Update header
const updateHeader = async (req, res) => {
  const { 
    logo, 
    links, 
    mainMenu, 
    socialLinks,
    topBarItems,
    showDarkModeToggle,
    showActionButton,
    actionButtonText,
    actionButtonLink,
    headerComponent,
    workingHours,
    topBarColor,
    topBarTextColor,
    mobileMenuButtonColor
  } = req.body;
  
  // Get the current header or create one if it doesn't exist
  let header = await Header.findOne({});
  if (!header) {
    header = await Header.create({});
  }
  
  // Update fields that were provided
  if (logo) header.logo = logo;
  if (links) header.links = links;
  if (mainMenu) header.mainMenu = mainMenu;
  if (socialLinks) header.socialLinks = socialLinks;
  if (topBarItems) header.topBarItems = topBarItems;
  if (showDarkModeToggle !== undefined) header.showDarkModeToggle = showDarkModeToggle;
  if (showActionButton !== undefined) header.showActionButton = showActionButton;
  if (actionButtonText) header.actionButtonText = actionButtonText;
  if (actionButtonLink) header.actionButtonLink = actionButtonLink;
  if (headerComponent) header.headerComponent = headerComponent;
  if (workingHours) header.workingHours = workingHours;
  if (topBarColor) header.topBarColor = topBarColor;
  if (topBarTextColor) header.topBarTextColor = topBarTextColor;
  if (mobileMenuButtonColor) header.mobileMenuButtonColor = mobileMenuButtonColor;
  
  await header.save();
  
  res.status(StatusCodes.OK).json({ header });
};

module.exports = {
  getHeader,
  updateHeader,
}; 