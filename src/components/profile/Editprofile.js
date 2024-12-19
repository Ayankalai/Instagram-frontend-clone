import React, { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import Footer from '../Main_page/Footer';

const Editprofile = () => {
  const { user } = useContext(UserContext);
  const [username, setUsername] = useState(user?.user?.username || '');
  const [email, setEmail] = useState(user?.user?.email || '');
  const [ph, setPh] = useState(user?.user?.ph || ''); 
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = user?.AccessToken;

    if (!token) {
      setError("You must be logged in to update your profile.");
      return;
    }

    try {
      console.log(username, email, ph);
      console.log(token);

      const response = await fetch("http://localhost:8000/api/v1/updateAccountDetails", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          username,
          email,
          ph
        })
      });
      
      const data = await response.json();
      console.log(data);
      
      

    } catch (error) {
      console.error("Error updating profile:", error);
      setError("An error occurred while updating your profile.");
      setSuccessMessage('');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary">Edit Profile</h1>
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
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your new username"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your new email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="ph" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ph"
                    value={ph}
                    onChange={(e) => setPh(e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-100">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Editprofile;
