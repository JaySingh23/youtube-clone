import React from 'react'
import Stack from '@mui/material/Stack';
import "../css/navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import youtubeLogo from '../assets/yt_logo_rgb_dark.png'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  
  return (
    <div className='navbar'>
      <div className="container">

        <div className="first">
          <MenuIcon fontSize='medium' sx={{color: 'white', marginRight: '8px', cursor: 'pointer'}}/>
          <Link to = '/'><img id="youtubeLogo" src={youtubeLogo} alt="youtube logo" /></Link>
        </div>

        <div className="middle">
          <SearchBar />
        </div>

        <div className="end">
          <Stack direction="row" spacing={3}>
            <VideoCallOutlinedIcon fontSize='large' sx={{color: 'whitesmoke'}}/>
            <NotificationsNoneOutlinedIcon fontSize='large' sx={{color: 'white'}}/>
            <AccountCircleOutlinedIcon fontSize='large' sx={{color: 'white'}}/>
          </Stack>
        </div>

      </div>
    </div>
  )
}

export default Navbar