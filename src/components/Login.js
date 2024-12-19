import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import axios from 'axios';
import UserContext from '../context/UserContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [issuccess, setIssuccess] = useState(false);  
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate(); 

  
  const handleLogin = async (e) => { 
    e.preventDefault();

    const userData = { username, password };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/login", 
        userData,
        {
          headers: { "Content-Type": "application/json" }
        }
      );

      if (response.status >= 200 && response.status < 300) {
        setMsg("Login successful");
        setIssuccess(true);
        
        setUsername('');
        setPassword('');
        
        const data = response.data;
        console.log(data)

        setUser({ email: data.user.email, token: data.accessToken }); 

        localStorage.setItem("userInfo", JSON.stringify(data));
        setUser(data);
        
        navigate('/hero');
      }

    } catch (error) {
      console.error("Login failed:", error);

      if (error.response) {
        setMsg(error.response.data.message || "Invalid username or password");
        setIssuccess(false);
      } else {
        setMsg("An error occurred. Please try again.");
        setIssuccess(false);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">Login Here</h1>
          
          <form onSubmit={handleLogin} className="mt-4">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
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
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>

          <p className="mt-3 text-center">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>

          {msg && (
            <p className={`mt-3 text-center ${issuccess ? 'text-success' : 'text-danger'}`}>
              {msg}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
