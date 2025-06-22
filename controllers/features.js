const Features = require("../models/Features");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

// Get features
const getFeatures = async (req, res) => {
  let features = await Features.findOne({});
  
  // If no features exists, create a default one
  if (!features) {
    features = await Features.create({});
  }
  
  res.status(StatusCodes.OK).json({ features });
};

// Update features
const updateFeatures = async (req, res) => {
  const updateData = req.body;
  
  // Get the current features or create one if it doesn't exist
  let features = await Features.findOne({});
  if (!features) {
    features = await Features.create({});
  }
  
  // Log incoming data for debugging
  console.log('Updating features with data:', JSON.stringify(updateData, null, 2));
  
  // Update fields that were provided
  if (updateData.activeFeature !== undefined) features.activeFeature = updateData.activeFeature;
  
  // Update features1 properties if they exist
  if (updateData.features1) {
    const features1 = updateData.features1;
    if (features1.badge) {
      if (features1.badge.visible !== undefined) features.features1.badge.visible = features1.badge.visible;
      if (features1.badge.label !== undefined) features.features1.badge.label = features1.badge.label;
      if (features1.badge.text !== undefined) features.features1.badge.text = features1.badge.text;
      if (features1.badge.backgroundColor !== undefined) features.features1.badge.backgroundColor = features1.badge.backgroundColor;
      if (features1.badge.labelTextColor !== undefined) features.features1.badge.labelTextColor = features1.badge.labelTextColor;
    }
    
    if (features1.title) {
      if (features1.title.part1 !== undefined) features.features1.title.part1 = features1.title.part1;
      if (features1.title.part2 !== undefined) features.features1.title.part2 = features1.title.part2;
      if (features1.title.part3 !== undefined) features.features1.title.part3 = features1.title.part3;
      if (features1.title.part3TextColor !== undefined) features.features1.title.part3TextColor = features1.title.part3TextColor;
    }
    
    if (features1.images) {
      if (features1.images.img1 !== undefined) features.features1.images.img1 = features1.images.img1;
      if (features1.images.img2 !== undefined) features.features1.images.img2 = features1.images.img2;
      if (features1.images.img3 !== undefined) features.features1.images.img3 = features1.images.img3;
      if (features1.images.bgEllipse !== undefined) features.features1.images.bgEllipse = features1.images.bgEllipse;
      if (features1.images.starLg !== undefined) features.features1.images.starLg = features1.images.starLg;
      if (features1.images.starMd !== undefined) features.features1.images.starMd = features1.images.starMd;
      if (features1.images.dots !== undefined) features.features1.images.dots = features1.images.dots;
    }
    
    if (features1.videoId !== undefined) features.features1.videoId = features1.videoId;
    
    // Handle updating individual feature items
    if (features1.features) {
      features1.features.forEach((feature, index) => {
        if (index < features.features1.features.length) {
          if (feature.icon !== undefined) features.features1.features[index].icon = feature.icon;
          if (feature.title !== undefined) features.features1.features[index].title = feature.title;
          if (feature.description !== undefined) features.features1.features[index].description = feature.description;
          if (feature.backgroundColor !== undefined) features.features1.features[index].backgroundColor = feature.backgroundColor;
          if (feature.titleColor !== undefined) features.features1.features[index].titleColor = feature.titleColor;
          if (feature.descriptionColor !== undefined) features.features1.features[index].descriptionColor = feature.descriptionColor;
          if (feature.iconBackgroundColor !== undefined) features.features1.features[index].iconBackgroundColor = feature.iconBackgroundColor;
        }
      });
    }
  }

  // Update features4 properties if they exist
  if (updateData.features4) {
    const features4 = updateData.features4;
    if (features4.badge) {
      if (features4.badge.visible !== undefined) features.features4.badge.visible = features4.badge.visible;
      if (features4.badge.label !== undefined) features.features4.badge.label = features4.badge.label;
      if (features4.badge.backgroundColor !== undefined) features.features4.badge.backgroundColor = features4.badge.backgroundColor;
      if (features4.badge.labelTextColor !== undefined) features.features4.badge.labelTextColor = features4.badge.labelTextColor;
      if (features4.badge.icon !== undefined) features.features4.badge.icon = features4.badge.icon;
    }
    
    if (features4.title) {
      if (features4.title.part1 !== undefined) features.features4.title.part1 = features4.title.part1;
      if (features4.title.part2 !== undefined) features.features4.title.part2 = features4.title.part2;
      if (features4.title.part3 !== undefined) features.features4.title.part3 = features4.title.part3;
      if (features4.title.part2TextColor !== undefined) features.features4.title.part2TextColor = features4.title.part2TextColor;
    }
    
    if (features4.buttons) {
      if (features4.buttons.primary) {
        if (features4.buttons.primary.visible !== undefined) features.features4.buttons.primary.visible = features4.buttons.primary.visible;
        if (features4.buttons.primary.text !== undefined) features.features4.buttons.primary.text = features4.buttons.primary.text;
        if (features4.buttons.primary.link !== undefined) features.features4.buttons.primary.link = features4.buttons.primary.link;
        if (features4.buttons.primary.backgroundColor !== undefined) features.features4.buttons.primary.backgroundColor = features4.buttons.primary.backgroundColor;
        if (features4.buttons.primary.textColor !== undefined) features.features4.buttons.primary.textColor = features4.buttons.primary.textColor;
        if (features4.buttons.primary.iconColor !== undefined) features.features4.buttons.primary.iconColor = features4.buttons.primary.iconColor;
      }
      
      if (features4.buttons.secondary) {
        if (features4.buttons.secondary.visible !== undefined) features.features4.buttons.secondary.visible = features4.buttons.secondary.visible;
        if (features4.buttons.secondary.text !== undefined) features.features4.buttons.secondary.text = features4.buttons.secondary.text;
        if (features4.buttons.secondary.link !== undefined) features.features4.buttons.secondary.link = features4.buttons.secondary.link;
        if (features4.buttons.secondary.textColor !== undefined) features.features4.buttons.secondary.textColor = features4.buttons.secondary.textColor;
      }
    }
    
    if (features4.backgroundColor !== undefined) features.features4.backgroundColor = features4.backgroundColor;
    
    // Handle updating individual feature items for features4
    if (features4.features) {
      features4.features.forEach((feature, index) => {
        if (index < features.features4.features.length) {
          if (feature.icon !== undefined) features.features4.features[index].icon = feature.icon;
          if (feature.title !== undefined) features.features4.features[index].title = feature.title;
          if (feature.description !== undefined) features.features4.features[index].description = feature.description;
          if (feature.backgroundColor !== undefined) features.features4.features[index].backgroundColor = feature.backgroundColor;
          if (feature.titleColor !== undefined) features.features4.features[index].titleColor = feature.titleColor;
          if (feature.descriptionColor !== undefined) features.features4.features[index].descriptionColor = feature.descriptionColor;
          if (feature.iconColor !== undefined) features.features4.features[index].iconColor = feature.iconColor;
        }
      });
    }
  }
  
  // Update features5 properties if they exist
  if (updateData.features5) {
    const features5 = updateData.features5;
    // Update title and description
    if (features5.title !== undefined) features.features5.title = features5.title;
    if (features5.titleColor !== undefined) features.features5.titleColor = features5.titleColor;
    if (features5.description !== undefined) features.features5.description = features5.description;
    if (features5.descriptionColor !== undefined) features.features5.descriptionColor = features5.descriptionColor;
    
    // Handle the sections array
    if (features5.sections) {
      // If completely replacing the sections array
      if (Array.isArray(features5.sections)) {
        features.features5.sections = features5.sections;
      } 
      // If updating specific sections or adding/removing sections
      else if (features5.sections.operation) {
        // Add a new section
        if (features5.sections.operation === 'add' && features5.sections.section) {
          // Generate new section ID
          const sectionIds = features.features5.sections.map(section => section.id);
          let newId = 'section' + (features.features5.sections.length + 1);
          // Make sure the ID is unique
          while (sectionIds.includes(newId)) {
            newId = 'section' + (parseInt(newId.replace('section', '')) + 1);
          }
          
          // Add position information
          const newSection = {
            ...features5.sections.section,
            id: newId,
            position: features.features5.sections.length + 1,
            visible: true
          };
          
          features.features5.sections.push(newSection);
        }
        // Remove a section
        else if (features5.sections.operation === 'remove' && features5.sections.sectionId) {
          features.features5.sections = features.features5.sections.filter(
            section => section.id !== features5.sections.sectionId
          );
          
          // Reindex positions
          features.features5.sections.forEach((section, index) => {
            section.position = index + 1;
          });
        }
        // Update a section
        else if (features5.sections.operation === 'update' && features5.sections.section) {
          const sectionIndex = features.features5.sections.findIndex(
            section => section.id === features5.sections.section.id
          );
          
          if (sectionIndex !== -1) {
            // Update only the provided fields
            Object.keys(features5.sections.section).forEach(key => {
              if (key === 'title') {
                // Handle title object separately
                Object.keys(features5.sections.section.title).forEach(titleKey => {
                  features.features5.sections[sectionIndex].title[titleKey] = 
                    features5.sections.section.title[titleKey];
                });
              } else {
                features.features5.sections[sectionIndex][key] = features5.sections.section[key];
              }
            });
            
          }
        }
        // Reorder sections
        else if (features5.sections.operation === 'reorder' && features5.sections.order) {
          // Map of id -> new position
          const positionMap = features5.sections.order.reduce((map, id, index) => {
            map[id] = index + 1;
            return map;
          }, {});
          
          // Update positions
          features.features5.sections.forEach(section => {
            if (positionMap[section.id] !== undefined) {
              section.position = positionMap[section.id];
            }
          });
          
          // Sort sections by position
          features.features5.sections.sort((a, b) => a.position - b.position);
        }
      }
    }
    
    if (features5.backgroundColor !== undefined) features.features5.backgroundColor = features5.backgroundColor;
  }
  
  // Update features8 properties if they exist
  if (updateData.features8) {
    const features8 = updateData.features8;
    if (features8.title !== undefined) features.features8.title = features8.title;
    if (features8.description !== undefined) features.features8.description = features8.description;
    if (features8.starIcon !== undefined) features.features8.starIcon = features8.starIcon;
    if (features8.backgroundColor !== undefined) features.features8.backgroundColor = features8.backgroundColor;
    if (features8.titleColor !== undefined) features.features8.titleColor = features8.titleColor;
    if (features8.descriptionColor !== undefined) features.features8.descriptionColor = features8.descriptionColor;
    if (features8.valuesTitleColor !== undefined) features.features8.valuesTitleColor = features8.valuesTitleColor;
    if (features8.valuesDescriptionColor !== undefined) features.features8.valuesDescriptionColor = features8.valuesDescriptionColor;
    
    // Handle updating individual values for features8
    if (features8.values) {
      features8.values.forEach((value, index) => {
        if (index < features.features8.values.length) {
          if (value.title !== undefined) features.features8.values[index].title = value.title;
          if (value.description !== undefined) features.features8.values[index].description = value.description;
          if (value.icon !== undefined) features.features8.values[index].icon = value.icon;
        }
      });
    }
  }
  
  // Update features10 properties if they exist
  if (updateData.features10) {
    const features10 = updateData.features10;
    if (features10.backgroundColor !== undefined) features.features10.backgroundColor = features10.backgroundColor;
    if (features10.backgroundImage !== undefined) features.features10.backgroundImage = features10.backgroundImage;
    
    // Handle updating individual features for features10
    if (features10.features) {
      features10.features.forEach((feature, index) => {
        if (index < features.features10.features.length) {
          if (feature.icon !== undefined) features.features10.features[index].icon = feature.icon;
          if (feature.title !== undefined) features.features10.features[index].title = feature.title;
          if (feature.description !== undefined) features.features10.features[index].description = feature.description;
          if (feature.backgroundColor !== undefined) features.features10.features[index].backgroundColor = feature.backgroundColor;
          if (feature.titleColor !== undefined) features.features10.features[index].titleColor = feature.titleColor;
          if (feature.descriptionColor !== undefined) features.features10.features[index].descriptionColor = feature.descriptionColor;
          if (feature.iconBackgroundColor !== undefined) features.features10.features[index].iconBackgroundColor = feature.iconBackgroundColor;
        }
      });
    }
  }
  
  await features.save();
  
  res.status(StatusCodes.OK).json({ features });
};

module.exports = {
  getFeatures,
  updateFeatures,
}; 