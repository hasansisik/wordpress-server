const { Hizmet, HizmetCategory } = require("../models/Hizmet");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

// ==================== HIZMET CONTROLLERS ====================

// Create a hizmet
const createHizmet = async (req, res) => {
  try {
    // Get user to get company ID
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Kullanıcı bulunamadı"
      });
    }
    
    req.body.user = req.user.userId;
    req.body.companyId = user.companyId; // Automatically set company ID
    
    // Ensure content has the necessary sections
    if (!req.body.content) {
      req.body.content = {};
    }
    
    // Initialize arrays if they don't exist
    if (!req.body.content.beforeAfterItems) {
      req.body.content.beforeAfterItems = [];
    }
    
    if (!req.body.content.leftRightItems) {
      req.body.content.leftRightItems = [];
    }
    
    if (!req.body.content.galleryImages) {
      req.body.content.galleryImages = [];
    }
    
    const hizmet = await Hizmet.create(req.body);
    
    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Hizmet başarıyla oluşturuldu",
      hizmet
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Hizmet oluşturulurken bir hata oluştu",
      error: error.message
    });
  }
};

// Get all hizmetler
const getAllHizmetler = async (req, res) => {
  try {
    const { companyId } = req.query;
    
    // If companyId is provided in query, filter by it
    // Otherwise, return all hizmetler (for public access)
    const filter = companyId ? { companyId } : {};
    
    const hizmetler = await Hizmet.find(filter).sort({ createdAt: -1 });
    
    res.status(StatusCodes.OK).json({
      success: true,
      count: hizmetler.length,
      hizmetler
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Hizmetler alınırken bir hata oluştu",
      error: error.message
    });
  }
};

// Get a single hizmet
const getSingleHizmet = async (req, res) => {
  try {
    const { id: hizmetId } = req.params;
    
    const hizmet = await Hizmet.findOne({ _id: hizmetId });
    
    if (!hizmet) {
      throw new CustomError.NotFoundError(`${hizmetId} ID'li hizmet bulunamadı`);
    }
    
    res.status(StatusCodes.OK).json({
      success: true,
      hizmet
    });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: error.message || "Hizmet bulunamadı",
    });
  }
};

// Update a hizmet
const updateHizmet = async (req, res) => {
  try {
    const { id: hizmetId } = req.params;
    
    // Get user to check permissions
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Kullanıcı bulunamadı"
      });
    }
    
    // Find the hizmet to check ownership and company
    const existingHizmet = await Hizmet.findById(hizmetId);
    if (!existingHizmet) {
      throw new CustomError.NotFoundError(`${hizmetId} ID'li hizmet bulunamadı`);
    }
    
    // Only allow update if user is admin/editor and from the same company as the hizmet
    const isAdmin = user.role === 'admin';
    const isEditor = user.role === 'editor';
    const isSameCompany = user.companyId === existingHizmet.companyId;
    
    if ((!isAdmin && !isEditor) || !isSameCompany) {
      return res.status(StatusCodes.FORBIDDEN).json({
        success: false,
        message: "Bu işlemi yapmak için yetkiniz yok"
      });
    }
    
    // Don't allow changing company ID
    if (req.body.companyId && req.body.companyId !== existingHizmet.companyId) {
      delete req.body.companyId;
    }
    
    // Update the hizmet
    const hizmet = await Hizmet.findOneAndUpdate(
      { _id: hizmetId },
      req.body,
      { new: true, runValidators: true }
    );
    
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Hizmet başarıyla güncellendi",
      hizmet
    });
  } catch (error) {
    console.log("error", error);
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Hizmet güncellenirken bir hata oluştu",
      error: error.message
    });
  }
};

// Delete a hizmet
const deleteHizmet = async (req, res) => {
  try {
    const { id: hizmetId } = req.params;
    
    // Get user to check permissions
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Kullanıcı bulunamadı"
      });
    }
    
    // Find the hizmet to check ownership and company
    const hizmet = await Hizmet.findById(hizmetId);
    if (!hizmet) {
      throw new CustomError.NotFoundError(`${hizmetId} ID'li hizmet bulunamadı`);
    }
    
    // Only allow delete if user is admin/editor and from the same company as the hizmet
    const isAdmin = user.role === 'admin';
    const isEditor = user.role === 'editor';
    const isSameCompany = user.companyId === hizmet.companyId;
    
    if ((!isAdmin && !isEditor) || !isSameCompany) {
      return res.status(StatusCodes.FORBIDDEN).json({
        success: false,
        message: "Bu işlemi yapmak için yetkiniz yok"
      });
    }
    
    await Hizmet.findByIdAndDelete(hizmetId);
    
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Hizmet başarıyla silindi"
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Hizmet silinirken bir hata oluştu",
      error: error.message
    });
  }
};

// Get company hizmetler
const getCompanyHizmetler = async (req, res) => {
  try {
    // Get user to check company ID
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Kullanıcı bulunamadı"
      });
    }
    
    // Get hizmetler from user's company
    const hizmetler = await Hizmet.find({ companyId: user.companyId }).sort({ createdAt: -1 });
    
    res.status(StatusCodes.OK).json({
      success: true,
      count: hizmetler.length,
      hizmetler
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Şirket hizmetleri alınırken bir hata oluştu",
      error: error.message
    });
  }
};

// ==================== CATEGORY CONTROLLERS ====================

// Create a category
const createCategory = async (req, res) => {
  try {
    // Get user to get company ID
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Kullanıcı bulunamadı"
      });
    }
    
    // Add company ID to category
    req.body.companyId = user.companyId;
    
    const category = await HizmetCategory.create(req.body);
    
    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Kategori başarıyla oluşturuldu",
      category
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Kategori oluşturulurken bir hata oluştu",
      error: error.message
    });
  }
};

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const { companyId } = req.query;
    
    // If companyId is provided in query, filter by it
    // Otherwise, return all categories (for public access)
    const filter = companyId ? { companyId } : {};
    
    const categories = await HizmetCategory.find(filter);
    
    res.status(StatusCodes.OK).json({
      success: true,
      count: categories.length,
      categories
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Kategoriler alınırken bir hata oluştu",
      error: error.message
    });
  }
};

// Update a category
const updateCategory = async (req, res) => {
  try {
    const { id: categoryId } = req.params;
    
    // Get user to check permissions
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Kullanıcı bulunamadı"
      });
    }
    
    // Find category to check company
    const existingCategory = await HizmetCategory.findById(categoryId);
    if (!existingCategory) {
      throw new CustomError.NotFoundError(`${categoryId} ID'li kategori bulunamadı`);
    }
    
    // Check if user is from the same company
    if (existingCategory.companyId !== user.companyId) {
      return res.status(StatusCodes.FORBIDDEN).json({
        success: false,
        message: "Bu işlemi yapmak için yetkiniz yok"
      });
    }
    
    // Don't allow changing company ID
    if (req.body.companyId && req.body.companyId !== existingCategory.companyId) {
      delete req.body.companyId;
    }
    
    const category = await HizmetCategory.findOneAndUpdate(
      { _id: categoryId },
      req.body,
      { new: true, runValidators: true }
    );
    
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Kategori başarıyla güncellendi",
      category
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Kategori güncellenirken bir hata oluştu",
      error: error.message
    });
  }
};

// Delete a category
const deleteCategory = async (req, res) => {
  try {
    const { id: categoryId } = req.params;
    
    // Get user to check permissions
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Kullanıcı bulunamadı"
      });
    }
    
    // Find category to check company
    const category = await HizmetCategory.findById(categoryId);
    if (!category) {
      throw new CustomError.NotFoundError(`${categoryId} ID'li kategori bulunamadı`);
    }
    
    // Check if user is from the same company
    if (category.companyId !== user.companyId) {
      return res.status(StatusCodes.FORBIDDEN).json({
        success: false,
        message: "Bu işlemi yapmak için yetkiniz yok"
      });
    }
    
    await HizmetCategory.findByIdAndDelete(categoryId);
    
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Kategori başarıyla silindi"
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Kategori silinirken bir hata oluştu",
      error: error.message
    });
  }
};

// Get company categories
const getCompanyCategories = async (req, res) => {
  try {
    // Get user to check company ID
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Kullanıcı bulunamadı"
      });
    }
    
    // Get categories from user's company
    const categories = await HizmetCategory.find({ companyId: user.companyId });
    
    res.status(StatusCodes.OK).json({
      success: true,
      count: categories.length,
      categories
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Şirket kategorileri alınırken bir hata oluştu",
      error: error.message
    });
  }
};

module.exports = {
  createHizmet,
  getAllHizmetler,
  getSingleHizmet,
  updateHizmet,
  deleteHizmet,
  getCompanyHizmetler,
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
  getCompanyCategories
}; 