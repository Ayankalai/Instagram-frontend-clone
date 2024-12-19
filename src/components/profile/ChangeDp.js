import React, { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';

const ChangeDp = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useContext(UserContext);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const token = user?.AccessToken;
  console.log(token)
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedImage) {
      alert('Please select an image first');
      return;
    }

    const formData = new FormData();
    formData.append('avatar', selectedImage);

    try {
      setIsSubmitting(true);
      const response = await fetch("http://localhost:8000/api/v1/updateAvatar", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        console.log("Image upload failed");

      }
    } catch (error) {
      console.error('Error during image upload:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Change Profile Picture</h1>
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center mb-3">
          <input
            type="file"
            id="avatar"
            accept="image/*"
            onChange={handleImageChange}
            className="form-control-file"
          />
        </div>

        {selectedImage && (
          <div className="text-center mt-4">
            <h3>Preview:</h3>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Profile Preview"
              className="img-fluid rounded-circle"
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
            {isSubmitting ? 'Uploading...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeDp;
