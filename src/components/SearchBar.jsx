import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      navigate(`/search/${searchTerm}`);
      setsearchTerm('')
    }
  }

  return (
    <div>
      <div className="search">
            <Paper component="form" onSubmit={handleSubmit} sx={{ p: '1px 4px', display: 'flex', alignItems: 'center', width: 600, borderRadius: '30px', mt: '5px', backgroundColor: '#121212', border: '1px solid', borderColor: '#888888' }}>
              <InputBase
                sx={{ ml: 1, flex: 1, input:{color: 'white'} }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
                onChange = {(e) => setsearchTerm(e.target.value)}
                value={searchTerm}
              />
              <Divider sx={{ height: 28, m: 0.5, color: '#888888' }} orientation="vertical" />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon sx={{color: '#888888'}}/>
              </IconButton>
          </Paper>
      </div>
    </div>
  )
}

export default SearchBar