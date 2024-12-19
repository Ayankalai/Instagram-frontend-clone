import React, { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router';

const UploadVideo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedVideo(file);
    }
  };

  const token = user.AccessToken;

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedThumbnail(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedVideo || !title || !description || !selectedThumbnail) {
      alert('Please fill all the fields');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('videoFile', selectedVideo);
    formData.append('thumbnail', selectedThumbnail);

    try {
      setIsSubmitting(true);
      console.log(token);

      const response = await fetch('http://localhost:8000/api/v1/video/publishVideo', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const responseText = await response.text();
      console.log('Raw response:', responseText);
      navigate("/profile")

    } catch (error) {
      console.error('Error during video upload:', error);
    } finally {
      setIsSubmitting(false);

    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Upload Video</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            placeholder="Enter video title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            placeholder="Enter video description"
            rows="3"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="videoFile" className="form-label">
            Video File
          </label>
          <input
            type="file"
            id="videoFile"
            accept="video/*"
            onChange={handleVideoChange}
            className="form-control"
          />
        </div>

        {selectedVideo && (
          <div className="text-center mt-4">
            <h3>Preview:</h3>
            <video
              controls
              src={URL.createObjectURL(selectedVideo)}
              alt="Video Preview"
              className="img-fluid"
              style={{ width: '100%', maxWidth: '500px' }}
            />
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="thumbnail" className="form-label">
            Thumbnail Image
          </label>
          <input
            type="file"
            id="thumbnail"
            accept="image/*"
            onChange={handleThumbnailChange}
            className="form-control"
          />
        </div>

        {selectedThumbnail && (
          <div className="text-center mt-4">
            <h3>Thumbnail Preview:</h3>
            <img
              src={URL.createObjectURL(selectedThumbnail)}
              alt="Thumbnail Preview"
              className="img-fluid rounded"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
          </div>
        )}

        <div className="text-center mt-4">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Uploading...' : 'Upload Video'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadVideo;
