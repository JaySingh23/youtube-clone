import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "../components";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null)
  const[videos, setVideos] = useState([])

  const { id } =  useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`)
      .then((data) => setchannelDetail(data?.items[0]));

      fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
        .then((data) => setVideos(data?.items));
  }, [id]);

  return (
     <Box minHeight="95vh" sx={{backgroundColor: '#0F0F0F'}}>
      <Box>
        <div style={{
          height:'300px',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(6,6,33,0.7153711826527486) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;