import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  // State declarations
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [ph, setPh] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [password, setPassword] = useState('');
  const [msg, setmsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('ph', ph);
    formData.append('avatar', avatar);
    formData.append('coverImage', coverImage);
    formData.append('password', password);

    try {
      const response = await fetch("http://localhost:8000/api/v1/userRegister", {
        method: "POST",
        body: formData
      });

      if (await response.ok) {
        setmsg("successful registration")
        setAvatar(null);
        setCoverImage(null);
        setEmail('');
        setPassword('');
        setPh('');
        setUsername('');
        navigate("/login")
        
      }else{
        setmsg("User already exists. Please try a different username or email.")
      }
      
      

    } catch (error) {
      console.error("Error during registration:", error);
      alert('Error occurred, please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="form-group">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ph" className="form-label">Phone</label>
          <input
            type="text"
            id="ph"
            className="form-control"
            value={ph}
            onChange={(e) => setPh(e.target.value)}
            required
            placeholder="Enter your phone number"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="avatar" className="form-label">Avatar</label>
          <input
            type="file"
            id="avatar"
            className="form-control"
            onChange={(e) => setAvatar(e.target.files[0])}
            accept="image/*"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="coverImage" className="form-label">Cover Image</label>
          <input
            type="file"
            id="coverImage"
            className="form-control"
            onChange={(e) => setCoverImage(e.target.files[0])}
            accept="image/*"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
      <p className="mt-3 text-center">
        Already have an account? <Link to="/login">Login here</Link>
      </p>

      <p className="mt-3 text-center">
        {msg}
      </p>

    </div>
  );
};

export default Register;
