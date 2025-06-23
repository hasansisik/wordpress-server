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
  
  // Helper function to deep merge objects
  const deepMerge = (target, source) => {
    if (!source) return target;
    if (!target) return source;
    
    const result = { ...target };
    
    for (const key in source) {
      if (source[key] !== undefined) {
        if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
          result[key] = deepMerge(target[key] || {}, source[key]);
        } else {
          result[key] = source[key];
        }
      }
    }
    
    return result;
  };
  
  // Update activeFeature if provided
  if (updateData.activeFeature !== undefined) {
    features.activeFeature = updateData.activeFeature;
  }
  
  // Update features1 properties if they exist
  if (updateData.features1) {
    features.features1 = deepMerge(features.features1, updateData.features1);
  }

  // Update features4 properties if they exist
  if (updateData.features4) {
    features.features4 = deepMerge(features.features4, updateData.features4);
  }
  
  // Update features5 properties if they exist
  if (updateData.features5) {
    const features5 = updateData.features5;
    
    // Handle non-section updates
    if (features5.title !== undefined) features.features5.title = features5.title;
    if (features5.titleColor !== undefined) features.features5.titleColor = features5.titleColor;
    if (features5.description !== undefined) features.features5.description = features5.description;
    if (features5.descriptionColor !== undefined) features.features5.descriptionColor = features5.descriptionColor;
    if (features5.backgroundColor !== undefined) features.features5.backgroundColor = features5.backgroundColor;
    
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
            // Deep merge the section update
            features.features5.sections[sectionIndex] = deepMerge(
              features.features5.sections[sectionIndex],
              features5.sections.section
            );
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
  }
  
  // Update features8 properties if they exist
  if (updateData.features8) {
    features.features8 = deepMerge(features.features8, updateData.features8);
  }
  
  // Update features10 properties if they exist
  if (updateData.features10) {
    features.features10 = deepMerge(features.features10, updateData.features10);
  }
  
  await features.save();
  
  res.status(StatusCodes.OK).json({ features });
};

module.exports = {
  getFeatures,
  updateFeatures,
}; 