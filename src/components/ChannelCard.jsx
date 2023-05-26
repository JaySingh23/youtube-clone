import React from 'react'
import { Box, Typography, CardContent, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box sx={{boxShadow: 'none', borderRadius: '20px'}}>
        <Link to = {`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center', textAlign: 'center', marginTop }}>
                <CardMedia image= {channelDetail?.snippet?.thumbnails?.high?.url} sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2 }} />
                 <Typography variant="h6">
                {channelDetail?.snippet?.title}{' '}
                </Typography>
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard