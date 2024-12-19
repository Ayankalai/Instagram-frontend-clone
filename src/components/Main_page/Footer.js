import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { IoSearchOutline } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";

import './footer.css'; 
const Footer = () => {
  const navigate = useNavigate();

  const handleHomeBtn = () =>{
    navigate("/hero")
  }

  const handleSearch = () => {
    navigate("/search")
  }

  const handleReels = () => {
    navigate("/reels")
  }
  const handleProfile = () => {
    navigate("/profile")
  }
  const handleStatus = () => {
    navigate("/status")
  }



  return (
    <div>
        <footer className="footer">
          <div className="homeBtn" onClick={() => handleHomeBtn()} title="Go to Home">
            <GoHome size={30} color="black" />
          </div>
          <div className="homeBtn" onClick={() => handleSearch()} title="Go to Search">
            <IoSearchOutline size={30} color="black" />
          </div>
          <div className="homeBtn" onClick={() => handleStatus()} title="Go to Home">
            <MdOutlineAddBox size={30} color="black" />
          </div>
          <div className="homeBtn" onClick={() => handleReels()} title="Go to Reels">
            <BiMoviePlay size={30} color="black" />
          </div>
          <div className="homeBtn" onClick={() => handleProfile()} title="Go to Home">
            <FaRegUserCircle size={30} color="black" />
          </div>
        </footer>
    </div>
  )
}

export default Footer