import React, { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import Footer from '../Main_page/Footer';

const Changepassword = () => {
  const { user } = useContext(UserContext);
  const [oldpassword, setOldpassword] = useState('');
  const [newpassword, setNewpassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(user.AccessToken)
    const token = user.AccessToken

    try {
      const response = await fetch("http://localhost:8000/api/v1/changePassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify({ oldpassword, newpassword }),
      });

      if (response.ok) {
        setSuccessMessage("Password changed successfully!");
        setError('');
      } else {
        setError("Failed to change password. Please try again.");
        setSuccessMessage('');
      }
    } catch (error) {
      setError("An error occurred while changing the password.");
      setSuccessMessage('');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary">Change Password</h1>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg rounded-lg">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {successMessage && (
                  <div className="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                )}
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                <div className="mb-3">
                  <label htmlFor="oldpassword" className="form-label">
                    Old Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="oldpassword"
                    value={oldpassword}
                    onChange={(e) => setOldpassword(e.target.value)}
                    placeholder="Enter your old password"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="newpassword" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newpassword"
                    value={newpassword}
                    onChange={(e) => setNewpassword(e.target.value)}
                    placeholder="Enter your new password"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-100">
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Changepassword;
