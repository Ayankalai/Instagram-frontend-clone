import React, { useEffect, useState } from 'react';
import Footer from '../Main_page/Footer';
// import axios from 'axios';

const Reels = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/video/getAllvideos");
        const data = await response.json();
        console.log(data)
        setVideos(data)
      } catch (err) {
        setError('Failed to fetch videos');
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div>
        {videos && videos.length > 0 ? (
          videos.map(video => {
            return (
              <div key={video._id}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <video controls>
                  <source src={video.videoFile} type="video/mp4" />
                </video>
                <img src={video.thumbnail} alt={video.title} />
              </div>
            );
          })
        ) : (
          <div>No videos available</div>
        )}
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Reels;
