const Blog = require("../models/Blog");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

// Create a blog post
const createBlog = async (req, res) => {
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
    
    const blog = await Blog.create(req.body);
    
    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Blog başarıyla oluşturuldu",
      blog
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Blog oluşturulurken bir hata oluştu",
      error: error.message
    });
  }
};

// Get all blog posts
const getAllBlogs = async (req, res) => {
  try {
    const { companyId } = req.query;
    
    // If companyId is provided in query, filter by it
    // Otherwise, return all blogs (for public access)
    const filter = companyId ? { companyId } : {};
    
    const blogs = await Blog.find(filter).sort({ createdAt: -1 });
    
    res.status(StatusCodes.OK).json({
      success: true,
      count: blogs.length,
      blogs
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Bloglar alınırken bir hata oluştu",
      error: error.message
    });
  }
};

// Get a single blog post
const getSingleBlog = async (req, res) => {
  try {
    const { id: blogId } = req.params;
    
    const blog = await Blog.findOne({ _id: blogId });
    
    if (!blog) {
      throw new CustomError.NotFoundError(`${blogId} ID'li blog bulunamadı`);
    }
    
    res.status(StatusCodes.OK).json({
      success: true,
      blog
    });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: error.message || "Blog bulunamadı",
    });
  }
};

// Update a blog post
const updateBlog = async (req, res) => {
  try {
    const { id: blogId } = req.params;
    
    // Get user to check permissions
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Kullanıcı bulunamadı"
      });
    }
    
    // Find the blog to check ownership and company
    const existingBlog = await Blog.findById(blogId);
    if (!existingBlog) {
      throw new CustomError.NotFoundError(`${blogId} ID'li blog bulunamadı`);
    }
    
    // Only allow update if user is admin/editor and from the same company as the blog
    const isAdmin = user.role === 'admin';
    const isEditor = user.role === 'editor';
    const isSameCompany = user.companyId === existingBlog.companyId;
    
    if ((!isAdmin && !isEditor) || !isSameCompany) {
      return res.status(StatusCodes.FORBIDDEN).json({
        success: false,
        message: "Bu işlemi yapmak için yetkiniz yok"
      });
    }
    
    // Don't allow changing company ID
    if (req.body.companyId && req.body.companyId !== existingBlog.companyId) {
      delete req.body.companyId;
    }
    
    const blog = await Blog.findOneAndUpdate(
      { _id: blogId },
      req.body,
      { new: true, runValidators: true }
    );
    
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Blog başarıyla güncellendi",
      blog
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Blog güncellenirken bir hata oluştu",
      error: error.message
    });
  }
};

// Delete a blog post
const deleteBlog = async (req, res) => {
  try {
    const { id: blogId } = req.params;
    
    // Get user to check permissions
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Kullanıcı bulunamadı"
      });
    }
    
    // Find the blog to check ownership and company
    const blog = await Blog.findById(blogId);
    if (!blog) {
      throw new CustomError.NotFoundError(`${blogId} ID'li blog bulunamadı`);
    }
    
    // Only allow delete if user is admin/editor and from the same company as the blog
    const isAdmin = user.role === 'admin';
    const isEditor = user.role === 'editor';
    const isSameCompany = user.companyId === blog.companyId;
    
    if ((!isAdmin && !isEditor) || !isSameCompany) {
      return res.status(StatusCodes.FORBIDDEN).json({
        success: false,
        message: "Bu işlemi yapmak için yetkiniz yok"
      });
    }
    
    await Blog.findByIdAndDelete(blogId);
    
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Blog başarıyla silindi"
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Blog silinirken bir hata oluştu",
      error: error.message
    });
  }
};

// Get company blogs
const getCompanyBlogs = async (req, res) => {
  try {
    // Get user to check company ID
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Kullanıcı bulunamadı"
      });
    }
    
    // Get blogs from user's company
    const blogs = await Blog.find({ companyId: user.companyId }).sort({ createdAt: -1 });
    
    res.status(StatusCodes.OK).json({
      success: true,
      count: blogs.length,
      blogs
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Şirket blogları alınırken bir hata oluştu",
      error: error.message
    });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  getCompanyBlogs
}; 