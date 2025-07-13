const { Service, Category } = require("../models/Service");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

// ==================== SERVICE CONTROLLERS ====================

// Create a service
const createService = async (req, res) => {
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
    
    const service = await Service.create(req.body);
    
    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Servis başarıyla oluşturuldu",
      service
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Servis oluşturulurken bir hata oluştu",
      error: error.message
    });
  }
};

// Get all services
const getAllServices = async (req, res) => {
  try {
    const { companyId } = req.query;
    
    // If companyId is provided in query, filter by it
    // Otherwise, return all services (for public access)
    const filter = companyId ? { companyId } : {};
    
    const services = await Service.find(filter).sort({ createdAt: -1 });
    
    res.status(StatusCodes.OK).json({
      success: true,
      count: services.length,
      services
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Servisler alınırken bir hata oluştu",
      error: error.message
    });
  }
};

// Get a single service
const getSingleService = async (req, res) => {
  try {
    const { id: serviceId } = req.params;
    
    const service = await Service.findOne({ _id: serviceId });
    
    if (!service) {
      throw new CustomError.NotFoundError(`${serviceId} ID'li servis bulunamadı`);
    }
    
    res.status(StatusCodes.OK).json({
      success: true,
      service
    });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: error.message || "Servis bulunamadı",
    });
  }
};

// Update a service
const updateService = async (req, res) => {
  try {
    const { id: serviceId } = req.params;
    
    // Get user to check permissions
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Kullanıcı bulunamadı"
      });
    }
    
    // Find the service to check ownership and company
    const existingService = await Service.findById(serviceId);
    if (!existingService) {
      throw new CustomError.NotFoundError(`${serviceId} ID'li servis bulunamadı`);
    }
    
    // Only allow update if user is admin/editor and from the same company as the service
    const isAdmin = user.role === 'admin';
    const isEditor = user.role === 'editor';

    const isSameCompany = user.companyId === existingService.companyId;
    
    if ((!isAdmin && !isEditor) || !isSameCompany) {
      return res.status(StatusCodes.FORBIDDEN).json({
        success: false,
        message: "Bu işlemi yapmak için yetkiniz yok"
      });
    }
    
    // Don't allow changing company ID
    if (req.body.companyId && req.body.companyId !== existingService.companyId) {
      delete req.body.companyId;
    }
    
    const service = await Service.findOneAndUpdate(
      { _id: serviceId },
      req.body,
      { new: true, runValidators: true }
    );
    
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Servis başarıyla güncellendi",
      service
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Servis güncellenirken bir hata oluştu",
      error: error.message
    });
  }
};

// Delete a service
const deleteService = async (req, res) => {
  try {
    const { id: serviceId } = req.params;
    
    // Get user to check permissions
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Kullanıcı bulunamadı"
      });
    }
    
    // Find the service to check ownership and company
    const service = await Service.findById(serviceId);
    if (!service) {
      throw new CustomError.NotFoundError(`${serviceId} ID'li servis bulunamadı`);
    }
    
    // Only allow delete if user is admin/editor and from the same company as the service
    const isAdmin = user.role === 'admin';
    const isEditor = user.role === 'editor';
    const isSameCompany = user.companyId === service.companyId;
    
    if ((!isAdmin && !isEditor) || !isSameCompany) {
      return res.status(StatusCodes.FORBIDDEN).json({
        success: false,
        message: "Bu işlemi yapmak için yetkiniz yok"
      });
    }
    
    await Service.findByIdAndDelete(serviceId);
    
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Servis başarıyla silindi"
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Servis silinirken bir hata oluştu",
      error: error.message
    });
  }
};

// Get company services
const getCompanyServices = async (req, res) => {
  try {
    // Get user to check company ID
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Kullanıcı bulunamadı"
      });
    }
    
    // Get services from user's company
    const services = await Service.find({ companyId: user.companyId }).sort({ createdAt: -1 });
    
    res.status(StatusCodes.OK).json({
      success: true,
      count: services.length,
      services
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Şirket servisleri alınırken bir hata oluştu",
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
    
    const category = await Category.create(req.body);
    
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
    
    const categories = await Category.find(filter);
    
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
    const existingCategory = await Category.findById(categoryId);
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
    
    const category = await Category.findOneAndUpdate(
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
    const category = await Category.findById(categoryId);
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
    
    await Category.findByIdAndDelete(categoryId);
    
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
    const categories = await Category.find({ companyId: user.companyId });
    
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
  createService,
  getAllServices,
  getSingleService,
  updateService,
  deleteService,
  getCompanyServices,
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
  getCompanyCategories
}; 