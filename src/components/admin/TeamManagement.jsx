import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaCheck, FaTimes, FaUpload, FaTimes as FaClose, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { supabase } from '../../lib/supabaseClient';

const TeamManagement = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    image_url: '',
    linkedin_url: '',
    instagram_url: '',
    facebook_url: '',
    position: 0,
    is_active: true
  });
  const [actionLoading, setActionLoading] = useState({});
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  
  const imageFileInputRef = useRef(null);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('position', { ascending: true })
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTeamMembers(data || []);
    } catch (error) {
      console.error('Error fetching team members:', error);
      alert('Error fetching team members. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : 
              name === 'position' ? parseInt(value) || 0 : value
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
    if (uploading || !files || files.length === 0) return;
    setUploading(true);

    try {
      const file = files[0]; // Only use the first file
      
      if (!file.type.startsWith('image/')) {
        alert('Please upload only image files.');
        return;
      }

      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('team-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
          onUploadProgress: (progress) => {
            setUploadProgress((progress.loaded / progress.total) * 100);
          }
        });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('team-images')
        .getPublicUrl(filePath);

      setFormData(prev => ({ ...prev, image_url: publicUrl }));
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
    setActionLoading(prev => ({ ...prev, form: true }));

    try {
      if (editingMember) {
        const { error } = await supabase
          .from('team_members')
          .update({
            ...formData,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingMember.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('team_members')
          .insert([formData]);

        if (error) throw error;
      }

      setFormData({
        name: '',
        designation: '',
        image_url: '',
        linkedin_url: '',
        instagram_url: '',
        facebook_url: '',
        position: 0,
        is_active: true
      });
      setEditingMember(null);
      setShowForm(false);
      fetchTeamMembers();
    } catch (error) {
      console.error('Error saving team member:', error);
      alert(`Error saving team member: ${error.message}`);
    } finally {
      setActionLoading(prev => ({ ...prev, form: false }));
    }
  };

  const handleEdit = (member) => {
    setEditingMember(member);
    setFormData(member);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this team member?')) {
      return;
    }

    setActionLoading(prev => ({ ...prev, [id]: true }));

    try {
      const { error } = await supabase
        .from('team_members')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchTeamMembers();
    } catch (error) {
      console.error('Error deleting team member:', error);
      alert(`Error deleting team member: ${error.message}`);
    } finally {
      setActionLoading(prev => ({ ...prev, [id]: false }));
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    setActionLoading(prev => ({ ...prev, [id]: true }));

    try {
      const { error } = await supabase
        .from('team_members')
        .update({ is_active: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      fetchTeamMembers();
    } catch (error) {
      console.error('Error toggling team member status:', error);
      alert(`Error updating team member status: ${error.message}`);
    } finally {
      setActionLoading(prev => ({ ...prev, [id]: false }));
    }
  };

  const movePosition = async (id, currentPosition, direction) => {
    setActionLoading(prev => ({ ...prev, [id]: true }));
    
    try {
      const newPosition = direction === 'up' ? currentPosition - 1 : currentPosition + 1;
      
      // Find if there's a member at the target position
      const memberAtTargetPosition = teamMembers.find(m => m.position === newPosition);
      
      if (memberAtTargetPosition) {
        // Swap positions
        await supabase
          .from('team_members')
          .update({ position: currentPosition })
          .eq('id', memberAtTargetPosition.id);
      }
      
      // Update current member's position
      const { error } = await supabase
        .from('team_members')
        .update({ position: newPosition })
        .eq('id', id);

      if (error) throw error;
      
      fetchTeamMembers();
    } catch (error) {
      console.error('Error updating position:', error);
      alert(`Error updating position: ${error.message}`);
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
        <h2 className="text-2xl font-bold">Team Members</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setEditingMember(null);
            setFormData({
              name: '',
              designation: '',
              image_url: '',
              linkedin_url: '',
              instagram_url: '',
              facebook_url: '',
              position: teamMembers.length > 0 ? Math.max(...teamMembers.map(m => m.position || 0)) + 1 : 0,
              is_active: true
            });
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600
                   text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          <FaPlus />
          Add Team Member
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
              Name
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

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                     focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     dark:bg-gray-800 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Position (for ordering)
            </label>
            <input
              type="number"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                     focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     dark:bg-gray-800 dark:text-white"
              min="0"
            />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Lower numbers appear first. Team members with the same position will be ordered by creation date.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Profile Image
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
                ref={imageFileInputRef}
                onChange={handleFileSelect}
                accept="image/*"
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center gap-4"
              >
                <FaUpload className="text-4xl text-gray-400" />
                <div className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold text-purple-600">Click to upload</span> or drag and drop
                  <br />
                  Profile image
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

              {formData.image_url && (
                <div className="mt-4 flex items-center gap-2">
                  <img
                    src={formData.image_url}
                    alt="Profile preview"
                    className="w-20 h-20 object-cover rounded-full"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, image_url: '' }))}
                    className="text-red-600 hover:text-red-700"
                  >
                    <FaClose />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              LinkedIn URL (Optional)
            </label>
            <input
              type="url"
              name="linkedin_url"
              value={formData.linkedin_url || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                     focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Instagram URL (Optional)
            </label>
            <input
              type="url"
              name="instagram_url"
              value={formData.instagram_url || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                     focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Facebook URL (Optional)
            </label>
            <input
              type="url"
              name="facebook_url"
              value={formData.facebook_url || ''}
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
                setEditingMember(null);
                setFormData({
                  name: '',
                  designation: '',
                  image_url: '',
                  linkedin_url: '',
                  instagram_url: '',
                  facebook_url: '',
                  position: 0,
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
              {actionLoading.form ? 'Saving...' : editingMember ? 'Update Member' : 'Add Member'}
            </motion.button>
          </div>
        </motion.form>
      )}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Position
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Profile
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Designation
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Social Links
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
            {teamMembers.map((member, index) => (
              <motion.tr
                key={member.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{member.position}</span>
                    <div className="flex flex-col">
                      <button
                        onClick={() => movePosition(member.id, member.position, 'up')}
                        disabled={index === 0 || actionLoading[member.id]}
                        className={`text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 
                                  ${index === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
                      >
                        <FaArrowUp size={12} />
                      </button>
                      <button
                        onClick={() => movePosition(member.id, member.position, 'down')}
                        disabled={index === teamMembers.length - 1 || actionLoading[member.id]}
                        className={`text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300
                                  ${index === teamMembers.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
                      >
                        <FaArrowDown size={12} />
                      </button>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {member.image_url ? (
                    <img 
                      src={member.image_url} 
                      alt={member.name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {member.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {member.designation}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="flex justify-center gap-2">
                    {member.linkedin_url && (
                      <a 
                        href={member.linkedin_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        LinkedIn
                      </a>
                    )}
                    {member.instagram_url && (
                      <a 
                        href={member.instagram_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-800"
                      >
                        Instagram
                      </a>
                    )}
                    {member.facebook_url && (
                      <a 
                        href={member.facebook_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-800 hover:text-blue-900"
                      >
                        Facebook
                      </a>
                    )}
                    {!member.linkedin_url && !member.instagram_url && !member.facebook_url && (
                      <span className="text-gray-400">None</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button
                    onClick={() => toggleStatus(member.id, member.is_active)}
                    disabled={actionLoading[member.id]}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                             ${member.is_active
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                              : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                             } ${actionLoading[member.id] ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {member.is_active ? (
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
                      onClick={() => handleEdit(member)}
                      disabled={actionLoading[member.id]}
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400
                               dark:hover:text-blue-300 transition-colors
                               disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FaEdit />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDelete(member.id)}
                      disabled={actionLoading[member.id]}
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
            {teamMembers.length === 0 && (
              <tr>
                <td colSpan="7" className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                  No team members found. Add your first team member!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamManagement;