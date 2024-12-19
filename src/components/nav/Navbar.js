import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import './NavbarComponent.css';
import { useNavigate } from 'react-router';
import { IoMdArrowRoundBack } from "react-icons/io";



const NavbarComponent = () => {
    const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseToggle = () => {
    setIsOpen(false);
  }

  const handleEditProfile = () => {
    navigate("/editprofile");
  };

  const handleChangePassword = () => {
    navigate("/changePassword");
  };

  const handleLogout = () => {
    navigate("/logout");
  };

  const handlechangeDp = () => {
    navigate("/changeDp");
  };

  const handleUploadVideo = () => {
    navigate("/uploadvideo");
  };


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Profile</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
          <FaBars />
        </Navbar.Toggle>
        
        <div className={`slide-navbar ${isOpen ? 'open' : ''}`}>
          <Nav className="ml-auto p-2">
            <button onClick={handleCloseToggle} className='btn'
            style={{border:"none"}}>
            <IoMdArrowRoundBack />

            </button>
            <div className="text-center mt-4">
                <button
                  className="btn btn-primary me-3 btn-lg px-4 py-2 shadow-sm"
                  onClick={handleEditProfile}
                >
                  Edit Profile
                </button>
                <button
                  className="btn btn-primary me-3 btn-lg px-4 py-2 shadow-sm"
                  onClick={handlechangeDp}
                >
                  Change Dp
                </button>
                <button
                  className="btn btn-primary me-3 btn-lg px-4 py-2 shadow-sm"
                  onClick={handleUploadVideo}
                >
                  Upload Video
                </button>
                <button
                  className="btn btn-secondary btn-lg px-4 py-2 shadow-sm"
                  onClick={handleChangePassword}
                >
                  Change Password
                </button>
                <button
                  className="btn btn-danger btn-lg px-4 py-2 shadow-sm mt-3"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
          </Nav>
        </div>
        
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
