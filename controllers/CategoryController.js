let CategorySchema = require('../schema/CategorySchema')


// Create a new category
exports.createCategory = async (req, res) => {
    try {
      const newCategory = new CategorySchema(req.body);
      const savedCategory = await newCategory.save();
      res.status(201).json(savedCategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Get all categories
  exports.getAllCategories = async (req, res) => {
    try {
      const categories = await CategorySchema.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Get a single category by ID
  exports.getCategoryById = async (req, res) => {
    try {
      const category = await CategorySchema.findById(req.params.id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Update a category by ID
  exports.updateCategory = async (req, res) => {
    try {
      const updatedCategory = await CategorySchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedCategory) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.status(200).json(updatedCategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Delete a category by ID
  exports.deleteCategory = async (req, res) => {
    try {
      const deletedCategory = await CategorySchema.findByIdAndDelete(req.params.id);
      if (!deletedCategory) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };









