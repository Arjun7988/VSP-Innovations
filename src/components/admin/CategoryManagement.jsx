import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import { supabase } from '../../lib/supabaseClient';

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: ''
  });
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState({});

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
  try {
    const { data, error } = await supabase
      .from('blog_categories')
      .select('*')
      .order('name');

    if (error) throw error;
    setCategories(data || []);
  } catch (error) {
    console.error('Error fetching categories:', error);
    alert('Error fetching categories. Please try again.');
  }
};


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    if (editingCategory && editingCategory.id) {
     const { data, error } = await supabase
  .from('blog_categories')
  .update({ name: formData.name })
  .eq('id', editingCategory.id)
  .select();

if (error) throw error;
if (!data || data.length === 0) {
  throw new Error("No category was updated. Possibly invalid ID.");
}

      console.log('Updated category:', data);
    } else {
      const { error } = await supabase
        .from('blog_categories')
        .insert([{ name: formData.name }]);

      if (error) throw error;
    }

    setFormData({ name: '' });
    setEditingCategory(null);
    setShowForm(false);
    await fetchCategories();
  } catch (error) {
    console.error('Error saving category:', error);
    alert(`Error saving category: ${error.message}`);
  } finally {
    setLoading(false);
  }
};


  const handleEdit = (category) => {
    setEditingCategory(category);
   setFormData({
  name: category.name,
  is_active: category.is_active ?? true, // <- if you plan to edit this later
});

    setShowForm(true);
  };

  const handleDelete = async (categoryId) => {
    if (!window.confirm('Are you sure you want to delete this category?')) {
      return;
    }

    setActionLoading(prev => ({ ...prev, [categoryId]: true }));

    try {
      const { error } = await supabase
        .from('blog_categories')
        .delete()
        .eq('id', categoryId);

      if (error) throw error;
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
      alert(`Error deleting category: ${error.message}`);
    } finally {
      setActionLoading(prev => ({ ...prev, [categoryId]: false }));
    }
  };

  const toggleStatus = async (categoryId, currentStatus) => {
    setActionLoading(prev => ({ ...prev, [categoryId]: true }));

    try {
      const { error } = await supabase
        .from('blog_categories')
        .update({ is_active: !currentStatus })
        .eq('id', categoryId);

      if (error) throw error;
      fetchCategories();
    } catch (error) {
      console.error('Error toggling category status:', error);
      alert(`Error updating category status: ${error.message}`);
    } finally {
      setActionLoading(prev => ({ ...prev, [categoryId]: false }));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Categories</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setEditingCategory(null);
            setFormData({ name: '' });
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600
                   text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          <FaPlus />
          Add Category
        </motion.button>
      </div>

      {showForm ? (
        <motion.form
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                     focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     dark:bg-gray-800 dark:text-white"
              required
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setEditingCategory(null);
                setFormData({ name: '' });
              }}
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900
                       dark:hover:text-white transition-colors"
            >
              Cancel
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600
                       text-white rounded-lg hover:opacity-90 transition-opacity
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Saving...' : editingCategory ? 'Update Category' : 'Add Category'}
            </motion.button>
          </div>
        </motion.form>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  S No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Category Name
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {categories.map((category, index) => (
                <motion.tr
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {category.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button
                      onClick={() => toggleStatus(category.id, category.is_active)}
                      disabled={actionLoading[category.id]}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                               ${category.is_active
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                                : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                               } ${actionLoading[category.id] ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {category.is_active ? (
                        <><FaCheck className="mr-1" /> Active</>
                      ) : (
                        <><FaTimes className="mr-1" /> Inactive</>
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                    <div className="flex justify-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleEdit(category)}
                        disabled={actionLoading[category.id]}
                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400
                                 dark:hover:text-blue-300 transition-colors
                                 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <FaEdit />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleDelete(category.id)}
                        disabled={actionLoading[category.id]}
                        className="text-red-600 hover:text-red-700 dark:text-red-400
                                 dark:hover:text-red-300 transition-colors
                                 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <FaTrash />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CategoryManagement;