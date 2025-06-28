import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUpload, FaTimes } from 'react-icons/fa';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { supabase } from '../../lib/supabaseClient';

const BlogPostForm = ({ initialData, onSubmit, onCancel }) => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    category_ids: [],
    content: '',
    image_url: '',
    video_url: '',
    seo_title: '',
    seo_keywords: '',
    seo_description: '',
    slug: ''
  });
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  // Rich text editor modules configuration
  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' },
       { 'indent': '-1'}, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['clean'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'direction': 'rtl' }],
      ['code-block']
    ],
    clipboard: {
      matchVisual: false
    }
  };

  // Rich text editor formats
  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'color', 'background', 'align',
    'script', 'direction', 'code-block'
  ];

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_categories')
        .select('*')
        .eq('is_active', true)
        .order('name');

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'title' ? {
        slug: value.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        seo_title: value
      } : {})
    }));
  };

  const handleCategoryChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setFormData(prev => ({
      ...prev,
      category_ids: selectedOptions
    }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    await handleFiles(files);
  };

  const handleFileSelect = async (e) => {
    const files = e.target.files;
    await handleFiles(files);
  };

  const handleFiles = async (files) => {
    if (uploading) return;
    setUploading(true);

    try {
      for (const file of files) {
        if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
          alert('Please upload only image or video files.');
          continue;
        }

        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('blog-media')
          .upload(filePath, file, {
            cacheControl: '3600',
            upsert: false,
            onUploadProgress: (progress) => {
              setUploadProgress((progress.loaded / progress.total) * 100);
            }
          });

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('blog-media')
          .getPublicUrl(filePath);

        setFormData(prev => ({
          ...prev,
          [file.type.startsWith('image/') ? 'image_url' : 'video_url']: publicUrl
        }));
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file. Please try again.');
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
   const {
  data: { user },
  error: userError
} = await supabase.auth.getUser();

if (userError) throw userError;

// Ensure author_profiles row exists
await supabase
  .from('author_profiles')
  .upsert({
    id: user.id,
    email: user.email,
    raw_user_meta_data: user.user_metadata
  }, { onConflict: 'id' });

const { author, ...sanitizedForm } = formData;
const postData = {
  ...sanitizedForm,
  author_id: user.id,
  updated_at: new Date().toISOString()
};



    let response;

    if (initialData?.id) {
      response = await supabase
        .from('blog_posts')
        .update(postData)
        .eq('id', initialData.id)
        .select()
        .single();
    } else {
      postData.created_at = new Date().toISOString(); // only for new posts
      response = await supabase
        .from('blog_posts')
        .insert([postData])
        .select()
        .single();
    }

    if (response.error) {
      console.error('Supabase Update Error:', response.error);
      alert(`Supabase error: ${response.error.message}`);
      return;
    }

    if (onSubmit) {
      onSubmit(response.data);
    }
  } catch (error) {
    console.error('Error saving blog post:', error);
    alert(`Unexpected error: ${error.message}`);
  }
};


  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
                   dark:bg-gray-700 dark:text-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          URL Slug
        </label>
        <input
          type="text"
          name="slug"
          value={formData.slug}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                   focus:ring-2 focus:ring-purple-500 focus:border-transparent
                   dark:bg-gray-700 dark:text-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Categories
        </label>
        <select
          multiple
          name="category_ids"
          value={formData.category_ids}
          onChange={handleCategoryChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                   focus:ring-2 focus:ring-purple-500 focus:border-transparent
                   dark:bg-gray-700 dark:text-white"
          required
        >
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Media Upload
        </label>
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors
                   ${dragActive
                     ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                     : 'border-gray-300 dark:border-gray-600'
                   }`}
        >
          <input
            type="file"
            onChange={handleFileSelect}
            accept="image/*,video/*"
            className="hidden"
            id="file-upload"
            multiple
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center gap-4"
          >
            <FaUpload className="text-4xl text-gray-400" />
            <div className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold text-purple-600">Click to upload</span> or drag and drop
              <br />
              Images or Videos
            </div>
          </label>

          {uploadProgress > 0 && (
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-purple-600 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          {(formData.image_url || formData.video_url) && (
            <div className="mt-4 space-y-2">
              {formData.image_url && (
                <div className="flex items-center gap-2">
                  <img src={formData.image_url} alt="Preview" className="w-20 h-20 object-cover rounded" />
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, image_url: '' }))}
                    className="text-red-600 hover:text-red-700"
                  >
                    <FaTimes />
                  </button>
                </div>
              )}
              {formData.video_url && (
                <div className="flex items-center gap-2">
                  <video src={formData.video_url} className="w-20 h-20 object-cover rounded" />
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, video_url: '' }))}
                    className="text-red-600 hover:text-red-700"
                  >
                    <FaTimes />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Content
        </label>
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
          <ReactQuill
            value={formData.content}
            onChange={(content) => setFormData(prev => ({ ...prev, content }))}
            modules={modules}
            formats={formats}
            theme="snow"
            className="h-96"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">SEO Settings</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            SEO Title
          </label>
          <input
            type="text"
            name="seo_title"
            value={formData.seo_title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                     focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            SEO Keywords
          </label>
          <input
            type="text"
            name="seo_keywords"
            value={formData.seo_keywords}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                     focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     dark:bg-gray-700 dark:text-white"
            placeholder="Comma-separated keywords"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            SEO Description
          </label>
          <textarea
            name="seo_description"
            value={formData.seo_description}
            onChange={handleInputChange}
            rows="3"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                     focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900
                     dark:hover:text-white transition-colors"
          >
            Cancel
          </button>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600
                   text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          {initialData ? 'Update Post' : 'Create Post'}
        </motion.button>
      </div>
    </form>
  );
};

export default BlogPostForm;