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
    premium,
    cloudinary,
    whatsapp,
    phone,
    cookieConsent,
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
  
  // Update premium settings if provided
  if (premium) {
    if (premium.price !== undefined) general.premium.price = premium.price;
    if (premium.currency !== undefined) general.premium.currency = premium.currency;
    if (premium.features !== undefined) general.premium.features = premium.features;
    if (premium.ctaText !== undefined) general.premium.ctaText = premium.ctaText;
    if (premium.subtitle !== undefined) general.premium.subtitle = premium.subtitle;
    if (premium.yearlyPriceText !== undefined) general.premium.yearlyPriceText = premium.yearlyPriceText;
    if (premium.description !== undefined) general.premium.description = premium.description;
    if (premium.leftTitle !== undefined) general.premium.leftTitle = premium.leftTitle;
    if (premium.leftSubtitle !== undefined) general.premium.leftSubtitle = premium.leftSubtitle;
    if (premium.rightTitle !== undefined) general.premium.rightTitle = premium.rightTitle;
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
  
  // Update phone settings if provided
  if (req.body.phone) {
    if (req.body.phone.enabled !== undefined) general.phone.enabled = req.body.phone.enabled;
    if (req.body.phone.phoneNumber !== undefined) general.phone.phoneNumber = req.body.phone.phoneNumber;
  }
  
  // Update cookie consent settings if provided
  if (cookieConsent) {
    if (cookieConsent.enabled !== undefined) general.cookieConsent.enabled = cookieConsent.enabled;
    if (cookieConsent.title !== undefined) general.cookieConsent.title = cookieConsent.title;
    if (cookieConsent.description !== undefined) general.cookieConsent.description = cookieConsent.description;
    if (cookieConsent.modalTitle !== undefined) general.cookieConsent.modalTitle = cookieConsent.modalTitle;
    if (cookieConsent.modalDescription !== undefined) general.cookieConsent.modalDescription = cookieConsent.modalDescription;
    if (cookieConsent.necessaryTitle !== undefined) general.cookieConsent.necessaryTitle = cookieConsent.necessaryTitle;
    if (cookieConsent.necessaryDescription !== undefined) general.cookieConsent.necessaryDescription = cookieConsent.necessaryDescription;
    if (cookieConsent.functionalTitle !== undefined) general.cookieConsent.functionalTitle = cookieConsent.functionalTitle;
    if (cookieConsent.functionalDescription !== undefined) general.cookieConsent.functionalDescription = cookieConsent.functionalDescription;
    if (cookieConsent.analyticsTitle !== undefined) general.cookieConsent.analyticsTitle = cookieConsent.analyticsTitle;
    if (cookieConsent.analyticsDescription !== undefined) general.cookieConsent.analyticsDescription = cookieConsent.analyticsDescription;
    if (cookieConsent.performanceTitle !== undefined) general.cookieConsent.performanceTitle = cookieConsent.performanceTitle;
    if (cookieConsent.performanceDescription !== undefined) general.cookieConsent.performanceDescription = cookieConsent.performanceDescription;
    if (cookieConsent.moreInfoText !== undefined) general.cookieConsent.moreInfoText = cookieConsent.moreInfoText;
    if (cookieConsent.acceptAllText !== undefined) general.cookieConsent.acceptAllText = cookieConsent.acceptAllText;
    if (cookieConsent.rejectAllText !== undefined) general.cookieConsent.rejectAllText = cookieConsent.rejectAllText;
    if (cookieConsent.customizeText !== undefined) general.cookieConsent.customizeText = cookieConsent.customizeText;
    if (cookieConsent.savePreferencesText !== undefined) general.cookieConsent.savePreferencesText = cookieConsent.savePreferencesText;
    if (cookieConsent.alwaysActiveText !== undefined) general.cookieConsent.alwaysActiveText = cookieConsent.alwaysActiveText;
    if (cookieConsent.iconColor !== undefined) general.cookieConsent.iconColor = cookieConsent.iconColor;
    if (cookieConsent.buttonBgColor !== undefined) general.cookieConsent.buttonBgColor = cookieConsent.buttonBgColor;
    if (cookieConsent.position !== undefined) general.cookieConsent.position = cookieConsent.position;
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
    
    // Update schema settings
    if (seo.schema) {
      // Initialize schema object if it doesn't exist
      if (!general.seo.schema) {
        general.seo.schema = {
          organization: {
            socialLinks: [
              "https://facebook.com/wordpressclone",
              "https://twitter.com/wordpressclone",
              "https://instagram.com/wordpressclone",
              "https://linkedin.com/company/wordpressclone"
            ],
            logo: "/logo.png",
            address: {
              streetAddress: "",
              addressLocality: "",
              addressRegion: "",
              postalCode: "",
              addressCountry: "TR"
            }
          },
          enableWebPageSchema: true,
          enableBlogPostingSchema: true,
          enableItemListSchema: true
        };
      }
      
      // Update organization settings
      if (seo.schema.organization) {
        if (seo.schema.organization.socialLinks !== undefined) {
          general.seo.schema.organization.socialLinks = seo.schema.organization.socialLinks;
        }
        if (seo.schema.organization.logo !== undefined) {
          general.seo.schema.organization.logo = seo.schema.organization.logo;
        }
        
        // Update address
        if (seo.schema.organization.address) {
          const address = seo.schema.organization.address;
          if (address.streetAddress !== undefined) {
            general.seo.schema.organization.address.streetAddress = address.streetAddress;
          }
          if (address.addressLocality !== undefined) {
            general.seo.schema.organization.address.addressLocality = address.addressLocality;
          }
          if (address.addressRegion !== undefined) {
            general.seo.schema.organization.address.addressRegion = address.addressRegion;
          }
          if (address.postalCode !== undefined) {
            general.seo.schema.organization.address.postalCode = address.postalCode;
          }
          if (address.addressCountry !== undefined) {
            general.seo.schema.organization.address.addressCountry = address.addressCountry;
          }
        }
      }
      
      // Update schema feature flags
      if (seo.schema.enableWebPageSchema !== undefined) {
        general.seo.schema.enableWebPageSchema = seo.schema.enableWebPageSchema;
      }
      if (seo.schema.enableBlogPostingSchema !== undefined) {
        general.seo.schema.enableBlogPostingSchema = seo.schema.enableBlogPostingSchema;
      }
      if (seo.schema.enableItemListSchema !== undefined) {
        general.seo.schema.enableItemListSchema = seo.schema.enableItemListSchema;
      }
    }

    // Update robots.txt settings
    if (seo.robotsTxt) {
      // Initialize robotsTxt object if it doesn't exist
      if (!general.seo.robotsTxt) {
        general.seo.robotsTxt = {
          customRules: "",
          enableDefaultRules: true
        };
      }
      
      if (seo.robotsTxt.customRules !== undefined) {
        general.seo.robotsTxt.customRules = seo.robotsTxt.customRules;
      }
      if (seo.robotsTxt.enableDefaultRules !== undefined) {
        general.seo.robotsTxt.enableDefaultRules = seo.robotsTxt.enableDefaultRules;
      }
    }

    // Update sitemap settings
    if (seo.sitemap) {
      // Initialize sitemap object if it doesn't exist
      if (!general.seo.sitemap) {
        general.seo.sitemap = {
          excludeUrls: [],
          additionalUrls: [],
          changeFrequencies: {
            homepage: "daily",
            pages: "weekly",
            posts: "monthly"
          },
          priorities: {
            homepage: 1.0,
            pages: 0.8,
            posts: 0.7
          }
        };
      }
      
      if (seo.sitemap.excludeUrls !== undefined) {
        general.seo.sitemap.excludeUrls = seo.sitemap.excludeUrls;
      }
      if (seo.sitemap.additionalUrls !== undefined) {
        general.seo.sitemap.additionalUrls = seo.sitemap.additionalUrls;
      }
      
      // Update change frequencies
      if (seo.sitemap.changeFrequencies) {
        const frequencies = seo.sitemap.changeFrequencies;
        if (frequencies.homepage !== undefined) {
          general.seo.sitemap.changeFrequencies.homepage = frequencies.homepage;
        }
        if (frequencies.pages !== undefined) {
          general.seo.sitemap.changeFrequencies.pages = frequencies.pages;
        }
        if (frequencies.posts !== undefined) {
          general.seo.sitemap.changeFrequencies.posts = frequencies.posts;
        }
      }
      
      // Update priorities
      if (seo.sitemap.priorities) {
        const priorities = seo.sitemap.priorities;
        if (priorities.homepage !== undefined) {
          general.seo.sitemap.priorities.homepage = priorities.homepage;
        }
        if (priorities.pages !== undefined) {
          general.seo.sitemap.priorities.pages = priorities.pages;
        }
        if (priorities.posts !== undefined) {
          general.seo.sitemap.priorities.posts = priorities.posts;
        }
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