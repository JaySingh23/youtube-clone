import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'

const VideoCard = ({video: {id: {videoId}, snippet}}) => { //we destucture videoId from id and id from video object
    
  return (
    <Card sx={{borderTopRightRadius: '0.8rem', borderTopLeftRadius: '0.8rem', border: '4px solid #0F0F0F', width: {md: '320px', xs: '100%', boxShadow: 'none'}}}>
        <Link to={`/video/${videoId}`}>
        <CardMedia image = {snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{width: 'auto', height: '13rem'}}/>
        </Link>
        <CardContent sx={{backgroundColor: '#0F0F0F', height: 100, width: 'inherit'}}>
            <Link to={`/video/${videoId}`}>
                <Typography variant="subtitle1" fontWeight="bold" sx={{color: 'white'}}>
                    {snippet?.title.slice(0,70)}
                </Typography>
            </Link>
            <Link to = {`/channel/${snippet?.channelId}`}>
                <Typography>
                    {snippet?.channelTitle}
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard