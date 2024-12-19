import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/UserContext';


const GetUserVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useContext(UserContext);

  

  useEffect(() => {
    const fetchUserVideos = async () => {
      const token = user.AccessToken
      console.log(token)
      try {
        const response = await fetch("http://localhost:8000/api/v1/video/getuservideos", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`, 
          }
        });

        console.log(response)

        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }

        const data = await response.json();
        setVideos(data.videos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserVideos();
  }, [user]);

  if (loading) {
    return <div>Loading videos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>User Videos</h2>
      <ul>
        {videos.length > 0 ? (
          videos.map((video) => (
            <li key={video._id}>
              <h4>{video.title}</h4>
              <video width="320" height="240" controls>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <button className="btn btn-info">
                Edit
              </button>
              <button className="btn btn-danger">
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No videos found</p>
        )}
      </ul>
    </div>
  );
};

export default GetUserVideos;
