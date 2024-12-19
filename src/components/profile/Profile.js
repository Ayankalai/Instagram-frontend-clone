import React, { useContext } from 'react';
import Footer from '../Main_page/Footer';
import UserContext from '../../context/UserContext';
import  Navbar  from '../nav/Navbar';

const Profile = () => {
  const { user } = useContext(UserContext);
  

  if (!user || !user.user) {
    return <div className="text-center">Loading...</div>;
  }
  // console.log(user.user.username)
  // const token = user.AccessToken

  // const response =  axios.get(`http://localhost:8000/api/v1/c/${user.user.username}`, {
  //   headers: {
  //     Authorization: `Bearer ${token}`
  //   }
  // });
  // console.log(response)
  

  return (
    <div className="container mt-2 vh-100">
      <Navbar />

      <div className="row justify-content-center mt-2">
        <div className="col-md-8">
          <div className="card shadow-lg rounded-lg">
            <div className="card-body">
              <h5 className="card-title text-center text-uppercase">{user.user.username}</h5>
              <p className="card-text text-muted text-center mb-4">
                <strong>Email:</strong> {user.user.email}
              </p>

              <div className="text-center mb-4">
                <strong>Avatar:</strong>
                <div>
                  <img
                    src={user.user.avatar}
                    alt="User Avatar"
                    className="img-fluid rounded-circle border border-4 border-primary"
                    style={{ width: '150px', height: '150px' }}
                  />
                </div>
              </div>

              <div className="text-center mb-4">
                <strong>Cover Image:</strong>
                <div>
                  <img
                    src={user.user.coverImage}
                    alt="User Cover"
                    className="img-fluid rounded border border-4 border-info"
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-5">
        <Footer />
      </footer>
    </div>
  );
};

export default Profile;
