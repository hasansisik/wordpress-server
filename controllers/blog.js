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
    const { companyId, category } = req.query;
    
    // Build filter based on query parameters
    let filter = { isSystemCategory: { $ne: true } }; // Exclude system category placeholders
    
    // If companyId is provided, filter by it
    if (companyId) {
      filter.companyId = companyId;
    }
    
    // If category is provided, filter by it
    if (category) {
      // Use $in operator to match category in array
      filter.category = { $in: [category] };
    }
    
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

// Get all unique categories
const getAllCategories = async (req, res) => {
  try {
    // Aggregate to get all unique categories
    const categories = await Blog.aggregate([
      // Unwind the category array to get individual categories
      { $unwind: "$category" },
      // Group by category name
      { $group: { _id: "$category" } },
      // Sort alphabetically
      { $sort: { _id: 1 } },
      // Project to get a clean array of category names
      { $project: { name: "$_id", _id: 0 } }
    ]);
    
    res.status(StatusCodes.OK).json({
      success: true,
      count: categories.length,
      categories: categories.map(cat => cat.name)
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Kategoriler alınırken bir hata oluştu",
      error: error.message
    });
  }
};

// Add a new category to an existing blog post
const addCategory = async (req, res) => {
  try {
    const { id: blogId } = req.params;
    const { category } = req.body;
    
    if (!category || category.trim() === "") {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Kategori adı gereklidir"
      });
    }
    
    // Get user to check permissions
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Kullanıcı bulunamadı"
      });
    }
    
    // Find the blog to check ownership
    const blog = await Blog.findById(blogId);
    if (!blog) {
      throw new CustomError.NotFoundError(`${blogId} ID'li blog bulunamadı`);
    }
    
    // Check if user has permission to update this blog
    const isAdmin = user.role === 'admin';
    const isEditor = user.role === 'editor';
    const isSameCompany = user.companyId === blog.companyId;
    
    if ((!isAdmin && !isEditor) || !isSameCompany) {
      return res.status(StatusCodes.FORBIDDEN).json({
        success: false,
        message: "Bu işlemi yapmak için yetkiniz yok"
      });
    }
    
    // Ensure blog.category is an array
    if (!Array.isArray(blog.category)) {
      blog.category = [blog.category].filter(Boolean);
    }
    
    // Check if category already exists
    if (blog.category.includes(category)) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Bu kategori zaten mevcut"
      });
    }
    
    // Add the new category
    blog.category.push(category);
    await blog.save();
    
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Kategori başarıyla eklendi",
      blog
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Kategori eklenirken bir hata oluştu",
      error: error.message
    });
  }
};

// Delete a category from a blog post
const deleteCategory = async (req, res) => {
  try {
    const { id: blogId, category } = req.params;
    
    if (!category) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Kategori adı gereklidir"
      });
    }
    
    // Get user to check permissions
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Kullanıcı bulunamadı"
      });
    }
    
    // Find the blog to check ownership
    const blog = await Blog.findById(blogId);
    if (!blog) {
      throw new CustomError.NotFoundError(`${blogId} ID'li blog bulunamadı`);
    }
    
    // Check if user has permission to update this blog
    const isAdmin = user.role === 'admin';
    const isEditor = user.role === 'editor';
    const isSameCompany = user.companyId === blog.companyId;
    
    if ((!isAdmin && !isEditor) || !isSameCompany) {
      return res.status(StatusCodes.FORBIDDEN).json({
        success: false,
        message: "Bu işlemi yapmak için yetkiniz yok"
      });
    }
    
    // Ensure blog.category is an array
    if (!Array.isArray(blog.category)) {
      blog.category = [blog.category].filter(Boolean);
    }
    
    // Check if category exists
    if (!blog.category.includes(category)) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Bu kategori mevcut değil"
      });
    }
    
    // Remove the category
    blog.category = blog.category.filter(cat => cat !== category);
    
    // Make sure we have at least one category
    if (blog.category.length === 0) {
      blog.category = ["Genel"];
    }
    
    await blog.save();
    
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Kategori başarıyla silindi",
      blog
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Kategori silinirken bir hata oluştu",
      error: error.message
    });
  }
};

// Add a new global category
const createGlobalCategory = async (req, res) => {
  try {
    const { name } = req.body;
    
    if (!name || name.trim() === "") {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Kategori adı gereklidir"
      });
    }
    
    // Get user to check permissions (only admin can add global categories)
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Kullanıcı bulunamadı"
      });
    }
    
    // Check if user is admin or editor
    if (user.role !== 'admin' && user.role !== 'editor') {
      return res.status(StatusCodes.FORBIDDEN).json({
        success: false,
        message: "Bu işlemi yapmak için admin veya editör yetkisine sahip olmalısınız"
      });
    }
    
    // Check if category already exists by using aggregate query
    const existingCategories = await Blog.aggregate([
      { $unwind: "$category" },
      { $group: { _id: "$category" } },
      { $match: { _id: name } }
    ]);
    
    if (existingCategories.length > 0) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Bu kategori zaten mevcut"
      });
    }
    
    // Find an existing blog to add the category to (instead of creating a new one)
    // This is just to ensure the category appears in the category list
    let blogToUpdate = await Blog.findOne({ user: user._id });
    
    if (blogToUpdate) {
      // If user has a blog, add the category to it
      if (!Array.isArray(blogToUpdate.category)) {
        blogToUpdate.category = [blogToUpdate.category].filter(Boolean);
      }
      
      blogToUpdate.category.push(name);
      await blogToUpdate.save();
    } else {
      // Find any blog to add the category to (preferably by the same company)
      blogToUpdate = await Blog.findOne({ companyId: user.companyId });
      
      if (blogToUpdate) {
        if (!Array.isArray(blogToUpdate.category)) {
          blogToUpdate.category = [blogToUpdate.category].filter(Boolean);
        }
        
        blogToUpdate.category.push(name);
        await blogToUpdate.save();
      } else {
        // If no blog exists at all, add the category to the system categories list
        // We'll create a small dummy blog with hidden flag that won't appear in listings
        const categoryPlaceholder = await Blog.create({
          title: `_system_category_${name}`,
          description: "_system_category_placeholder",
          image: "/assets/imgs/placeholder.png",
          category: [name],
          author: "System",
          content: {
            intro: "_system_category_placeholder",
            readTime: "1 min",
            author: {
              name: "System",
              avatar: "/assets/imgs/blog-4/avatar-1.png",
              date: new Date().toISOString()
            },
            mainImage: "/assets/imgs/placeholder.png",
            fullContent: "_system_category_placeholder"
          },
          user: user._id,
          companyId: user.companyId,
          isSystemCategory: true  // This field can be used to filter out system categories from blog lists
        });
      }
    }
    
    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Kategori başarıyla oluşturuldu",
      category: name
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Kategori oluşturulurken bir hata oluştu",
      error: error.message
    });
  }
};

// Delete a global category
const deleteGlobalCategory = async (req, res) => {
  try {
    const { category } = req.params;
    
    // Get user to check permissions (only admin can delete global categories)
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Kullanıcı bulunamadı"
      });
    }
    
    // Check if user is admin or editor
    if (user.role !== 'admin' && user.role !== 'editor') {
      return res.status(StatusCodes.FORBIDDEN).json({
        success: false,
        message: "Bu işlemi yapmak için admin veya editör yetkisine sahip olmalısınız"
      });
    }
    
    // Delete any system category placeholder posts with this category
    await Blog.deleteMany({ 
      isSystemCategory: true,
      title: `_system_category_${category}`
    });
    
    // Find all regular blogs with this category
    const blogs = await Blog.find({ 
      category: category,
      isSystemCategory: { $ne: true }
    });
    
    // Remove the category from all blogs
    for (const blog of blogs) {
      if (Array.isArray(blog.category)) {
        blog.category = blog.category.filter(cat => cat !== category);
        
        // Make sure we have at least one category
        if (blog.category.length === 0) {
          blog.category = ["Genel"];
        }
        
        await blog.save();
      }
    }
    
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Kategori başarıyla silindi",
      category
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Kategori silinirken bir hata oluştu",
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
  getCompanyBlogs,
  getAllCategories,
  addCategory,
  deleteCategory,
  createGlobalCategory,
  deleteGlobalCategory
}; 