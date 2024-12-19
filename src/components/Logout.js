import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import Footer from './Main_page/Footer';
import { useNavigate } from 'react-router';

const Logout = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = user.AccessToken
    // console.log(token);

    try {
      const response = await fetch("http://localhost:8000/api/v1/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (response.ok) {
        localStorage.removeItem('token');
        setUser(null);
      } else {
        console.error('Logout failed');
      }

      navigate("/login")
    } catch (error) {
      console.error("Error during logout", error);
    }
  };

  const handleCancle = () => {
    navigate("/profile")
  }

  return (
    <div>
      <div
        style={{ height: '90vh' }}
        className="d-flex align-items-center justify-content-center"
      >
        {user ? (
            <div className="text-center">
              <p>Are you sure you want to log out?</p>
              <button
                className="btn btn-danger me-2"
                onClick={handleLogout}
              >
                Yes, Log Out
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleCancle()}
              >
                Cancel
              </button>
            </div>
          ) : (
          <div className="text-center">
            <p>You are not logged in.</p>
          </div>
        )}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Logout;
