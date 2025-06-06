import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaCheck, FaTimes, FaImage, FaVideo, FaImages } from 'react-icons/fa';
import { format } from 'date-fns';
import { supabase } from '../../lib/supabaseClient';
import BlogPostForm from './BlogPostForm';

const BlogPostManagement = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    fetchPosts();
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


     const fetchPosts = async () => {
  try {
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    if (posts?.length) {
      const authorIds = [...new Set(posts.map(post => post.author_id))];

      const { data: authors, error: authorError } = await supabase
        .from('author_profiles')
        .select('id, email, raw_user_meta_data')
        .in('id', authorIds);

      if (authorError) throw authorError;

      const authorMap = {};
      authors?.forEach(author => {
        authorMap[author.id] = author;
      });

      const postsWithAuthors = posts.map(post => ({
        ...post,
        author: authorMap[post.author_id] || null
      }));

      setPosts(postsWithAuthors);
    } else {
      setPosts([]);
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
  } finally {
    setLoading(false);
  }
};


  const handlePostSubmit = async (postData) => {
    await fetchPosts();
    setShowForm(false);
    setEditingPost(null);
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setShowForm(true);
  };

  const handleDelete = async (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const { error } = await supabase
          .from('blog_posts')
          .delete()
          .eq('id', postId);

        if (error) throw error;
        fetchPosts();
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  const toggleStatus = async (postId, currentStatus) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ is_active: !currentStatus })
        .eq('id', postId);

      if (error) throw error;
      fetchPosts();
    } catch (error) {
      console.error('Error toggling post status:', error);
    }
  };

  const getMediaType = (post) => {
    if (post.image_url && post.video_url) {
      return <FaImages className="text-purple-600" title="Image & Video" />;
    } else if (post.video_url) {
      return <FaVideo className="text-blue-600" title="Video" />;
    } else if (post.image_url) {
      return <FaImage className="text-green-600" title="Image" />;
    }
    return null;
  };

  const getCategoryNames = (categoryIds) => {
    if (!categoryIds) return '';
    return categoryIds
      .map(id => categories.find(cat => cat.id === id)?.name)
      .filter(Boolean)
      .join(', ');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (showForm) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {editingPost ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h2>
        </div>
        <BlogPostForm
          initialData={editingPost}
          onSubmit={handlePostSubmit}
          onCancel={() => {
            setShowForm(false);
            setEditingPost(null);
          }}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Blog Posts</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600
                   text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          <FaPlus />
          New Post
        </motion.button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                S No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Media
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Content
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
            {posts.map((post, index) => (
              <motion.tr
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {getCategoryNames(post.category_ids)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {post.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-xl">
                  {getMediaType(post)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                  <div className="max-w-xs overflow-hidden text-ellipsis">
                    {post.content.replace(/<[^>]*>/g, '').substring(0, 100)}...
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button
                    onClick={() => toggleStatus(post.id, post.is_active)}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                             ${post.is_active
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                              : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                             }`}
                  >
                    {post.is_active ? (
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
                      onClick={() => handleEdit(post)}
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400
                               dark:hover:text-blue-300 transition-colors"
                    >
                      <FaEdit />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDelete(post.id)}
                      className="text-red-600 hover:text-red-700 dark:text-red-400
                               dark:hover:text-red-300 transition-colors"
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

export default BlogPostManagement;