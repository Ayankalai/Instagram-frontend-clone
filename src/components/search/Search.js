import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import Footer from '../Main_page/Footer';

import "./search.css"
const Search = () => {
  return (
    <div>
        <button className="btn">
          <IoSearchOutline size={25}/>  Search
        </button>


        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default Search