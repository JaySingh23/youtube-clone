import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack } from '@mui/material'
import { Sidebar, Videos } from '../components'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('Home')
  const [videos, setVideos] = useState([])

  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]); //it will recall the function whenever we change a category

  return (
    <Stack sx = {{ flexDirection: { sx: 'column', md: 'row'}, mt: 2}}>
      <Box sx = {{ height: {sx: 'auto', md: '88vh'}, px: {sx: 0, md: 2}}}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>
      <Box p={2} sx={{overflowY: 'auto', height: '84vh', flex: '2', backgroundColor: '#0F0F0F'}}>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed