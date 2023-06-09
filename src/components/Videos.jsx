import React from 'react'
import {Stack, Box} from '@mui/material'

import { ChannelCard, VideoCard } from '../components'

const Videos = ({videos}) => {
  
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={1}>
      {videos.map((item , idx) => (
          <Box key={idx} sx={{width: '30%', margin: '1rem'}} >
            {item.id.videoId && <VideoCard video = {item} />}
            {item.id.channelId && <ChannelCard channelDetail = {item} />}
          </Box>
      ))}
    </Stack>
  )
}

export default Videos