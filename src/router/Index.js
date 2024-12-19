import { Route, Routes } from 'react-router-dom';
import Register from '../components/Register';
import Login from '../components/Login';
import Hero from '../components/Main_page/Hero';
import Logout from '../components/Logout';
import Search from '../components/search/Search';
import Profile from '../components/profile/Profile';
import Status from '../components/status/Status';
import Reels from '../components/reels/Reels';
import Editprofile from '../components/profile/Editprofile';
import Changepassword from '../components/profile/Changepassword';
import Navbar from '../components/nav/Navbar';
import ChangeDp from '../components/profile/ChangeDp';
import UploadVideo from '../components/reels/UploadVideo';
import GetUserVideos from '../components/reels/GetUserVideos';
const Index = () => {
 
    
    
  return (
    <div className='p-2'>
     

      <Routes>
        <Route path="/" element={<Register  />} />
        <Route path="/login" element={<Login  />} />
        <Route path="/logout" element={<Logout  />} />
        <Route path="/hero" element={<Hero  />} />
        <Route path="/search" element={<Search  />} />
        <Route path="/status" element={<Status  />} />
        <Route path="/profile" element={<Profile  />} />
        <Route path="/reels" element={<Reels  />} />
        <Route path="/editprofile" element={<Editprofile  />} />
        <Route path="/changePassword" element={<Changepassword  />} />
        <Route path="/navbar" element={<Navbar  />} />
        <Route path="/changeDp" element={<ChangeDp  />} />
        <Route path="/uploadvideo" element={<UploadVideo  />} />
        <Route path="/getuservideos" element={<GetUserVideos  />} />
      </Routes>
    </div>
  )
}

export default Index