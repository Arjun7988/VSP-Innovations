import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaCheck, FaTimes, FaUpload, FaTimes as FaClose } from 'react-icons/fa';
import { supabase } from '../../lib/supabaseClient';

const PortfolioManagement = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: '',
    client_name: '',
    comments: '',
    category: '',
    website_url: '',
    is_active: true
  });
  const [actionLoading, setActionLoading] = useState({});
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  
  const imageFileInputRef = useRef(null);

  useEffect(() => {
    fetchPortfolioItems();
  }, []);

  const fetchPortfolioItems = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPortfolioItems(data || []);
    } catch (error) {
      console.error('Error fetching portfolio items:', error);
      alert('Error fetching portfolio items. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileUpload = async (file) => {
    if (!file) return null;
    
    setUploading(true);
    setUploadProgress(0);
    
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${fileName}`;
      
      const { error: uploadError } = await supabase.storage
        .from('portfolio-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
          onUploadProgress: (progress) => {
            setUploadProgress((progress.loaded / progress.total) * 100);
          }
        });
      
      if (uploadError) throw uploadError;
      
      const { data: { publicUrl } } = supabase.storage
        .from('portfolio-images')
        .getPublicUrl(filePath);
      
      return publicUrl;
    } catch (error) {
      console.error(`Error uploading image:`, error);
      alert(`Error uploading image: ${error.message}`);
      return null;
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const publicUrl = await handleFileUpload(file);
    if (publicUrl) {
      setFormData(prev => ({ ...prev, image_url: publicUrl }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setActionLoading(prev => ({ ...prev, form: true }));

    try {
      if (editingItem) {
        const { error } = await supabase
          .from('portfolio')
          .update({
            ...formData,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingItem.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('portfolio')
          .insert([formData]);

        if (error) throw error;
      }

      setFormData({
        title: '',
        description: '',
        image_url: '',
        client_name: '',
        comments: '',
        category: '',
        website_url: '',
        is_active: true
      });
      setEditingItem(null);
      setShowForm(false);
      fetchPortfolioItems();
    } catch (error) {
      console.error('Error saving portfolio item:', error);
      alert(`Error saving portfolio item: ${error.message}`);
    } finally {
      setActionLoading(prev => ({ ...prev, form: false }));
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      ...item
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this portfolio item?')) {
      return;
    }

    setActionLoading(prev => ({ ...prev, [id]: true }));

    try {
      const { error } = await supabase
        .from('portfolio')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchPortfolioItems();
    } catch (error) {
      console.error('Error deleting portfolio item:', error);
      alert(`Error deleting portfolio item: ${error.message}`);
    } finally {
      setActionLoading(prev => ({ ...prev, [id]: false }));
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    setActionLoading(prev => ({ ...prev, [id]: true }));

    try {
      const { error } = await supabase
        .from('portfolio')
        .update({ is_active: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      fetchPortfolioItems();
    } catch (error) {
      console.error('Error toggling portfolio item status:', error);
      alert(`Error updating portfolio item status: ${error.message}`);
    } finally {
      setActionLoading(prev => ({ ...prev, [id]: false }));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Portfolio</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setEditingItem(null);
            setFormData({
              title: '',
              description: '',
              image_url: '',
              client_name: '',
              comments: '',
              category: '',
              website_url: '',
              is_active: true
            });
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600
                   text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          <FaPlus />
          Add Portfolio Item
        </motion.button>
      </div>

      {showForm && (
        <motion.form
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                     focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     dark:bg-gray-800 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                     focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     dark:bg-gray-800 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Project Image
            </label>
            <div className="flex items-center gap-4">
              <input
                type="text"
                name="image_url"
                value={formData.image_url}
                onChange={handleInputChange}
                placeholder="Enter image URL or upload"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                       focus:ring-2 focus:ring-purple-500 focus:border-transparent
                       dark:bg-gray-800 dark:text-white"
                required
              />
              <input
                type="file"
                ref={imageFileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
              <button
                type="button"
                onClick={() => imageFileInputRef.current.click()}
                disabled={uploading}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200
                         rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors
                         disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <FaUpload />
                {uploading ? 'Uploading...' : 'Upload'}
              </button>
            </div>
            {uploading && (
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-purple-600 h-2.5 rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}
            {formData.image_url && (
              <div className="mt-2 flex items-center gap-2">
                <img
                  src={formData.image_url}
                  alt="Project preview"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, image_url: '' }))}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaClose />
                </button>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                     focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     dark:bg-gray-800 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Client Name
            </label>
            <input
              type="text"
              name="client_name"
              value={formData.client_name || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                     focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Comments
            </label>
            <textarea
              name="comments"
              value={formData.comments || ''}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                     focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     dark:bg-gray-800 dark:text-white"
              placeholder="Additional notes, feedback, or comments about the project"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Website URL (Optional)
            </label>
            <input
              type="url"
              name="website_url"
              value={formData.website_url || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                     focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="is_active"
              checked={formData.is_active}
              onChange={handleInputChange}
              className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
            />
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Active
            </label>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setEditingItem(null);
                setFormData({
                  title: '',
                  description: '',
                  image_url: '',
                  client_name: '',
                  comments: '',
                  category: '',
                  website_url: '',
                  is_active: true
                });
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
              disabled={actionLoading.form}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600
                       text-white rounded-lg hover:opacity-90 transition-opacity
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {actionLoading.form ? 'Saving...' : editingItem ? 'Update Item' : 'Add Item'}
            </motion.button>
          </div>
        </motion.form>
      )}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Client
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Comments
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
            {portfolioItems.map((item) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  <div className="flex items-center gap-3">
                    {item.image_url && (
                      <img 
                        src={item.image_url} 
                        alt={item.title}
                        className="w-10 h-10 object-cover rounded"
                      />
                    )}
                    <span>{item.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {item.client_name || '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {item.category}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                  <div className="max-w-xs overflow-hidden text-ellipsis">
                    {item.comments || '-'}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button
                    onClick={() => toggleStatus(item.id, item.is_active)}
                    disabled={actionLoading[item.id]}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                             ${item.is_active
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                              : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                             } ${actionLoading[item.id] ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {item.is_active ? (
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
                      onClick={() => handleEdit(item)}
                      disabled={actionLoading[item.id]}
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400
                               dark:hover:text-blue-300 transition-colors
                               disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FaEdit />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDelete(item.id)}
                      disabled={actionLoading[item.id]}
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
    </div>
  );
};

export default PortfolioManagement;