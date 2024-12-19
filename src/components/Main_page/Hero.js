import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';


import './hero.css'; 
import Footer from './Footer';

const Hero = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="heroContainer">
      <div className="content">
        {user ? (
          <h1>Welcome, {user.user.username}</h1>
        ) : (
          <p>Loading...</p>
        )}
      </div>

        <footer>
          <Footer />
        </footer>
    </div>
  );
};

export default Hero;
