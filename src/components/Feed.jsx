import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";






/* 
Feed element contains:
  a useState function, which creates the selectedCategory state and set it as initial value "New", it also creates the setSelectedCategory() which modifies the state.
  another useState function, which creates the videos state and is set as initial value null, it also creates the setVideos() which modifies the state
  a useEffect(), which runs after the entire main element is rendered. 
    this function calls back the setVideos() in order to set the videos state equals to null.
    this function also calls the fetchFromAPI() which makes a request directly to the API we are working with.
      it takes as a property the path of a search which will be completed with the selectedCategory state. so everytime we modify that state, this function will create a new request.
      this function also gives a response which is contained in a "data" variable. Part of this variable (data.items) is used as a parameter for the setVideos(), in order to set the videos state.
Feed element will render:
  a Stack tag, which is a materialUI component. this will work as a container for the entire Feed element. and it will have two children:
    The first Box element, which is a materialUI component, it will work as a container for: 
      The Sidebar element, which we have previously created, here we will pass through the as properties the state selectedCategory and the function setSelectedCategory
      a Typography tag, which is a materialUI component. it works as a <hX> tag. just to render some text. with copy right information
    The second Box element, which is a materialUI component. it works as a container for:
      a Typography tag, which is a materialUI component. it works as a <hX> tag. just to render some text. in this case it will render the string 
        that comes from selectedCategory state added to the "videos" string. 
      The Videos element, which we have previously created, here we will pass thorough as a property the state Videos  
*/

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "77vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Links to="/" className="copyright" style={{ display: "flex", alignItems: "center", justifyContent:'center', marginTop:'15px' }}>
          <LogoBold className='logo'/>
        </Links>
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", textAlign:"center" }}>
          Web App by: <span style={{ color: "#97BC62FF", fontWeight:"bold"}}> Stefan Miranda</span>
        </Typography>
        <Box className='copyright logo' style={{ display: "flex", alignItems: "center", gap:'10px', marginTop:'10px' }}>
          <Links>
            <a href="https://github.com/Stefan-migo" target='_blank' ><GitHubIcon style={{fill:'white'}}/></a>
          </Links>
          <Links>
            <a href="https://www.instagram.com/leberland/" target='_blank' ><InstagramIcon style={{fill:'white'}}/></a>
          </Links>
          <Links>
            <a href="https://www.linkedin.com/in/stefan-miranda-gonzalez-787387118/" target='_blank' ><LinkedInIcon style={{fill:'white'}}/></a>
          </Links>
        </Box>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "86vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#97BC62FF" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
