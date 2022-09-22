
//react router dom helps to create routes in our app.
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material'; //it is a simple div element.

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

/* the App is the element (app) that will be render on the index.js, which grabs the div tag of className="root"
so it will be the base of our app, 
here we will create all the common element our app will have as the background div (<Box/> element), the navbar element
also all the routes our app will have. to do this we use the Routes element wrapping all the specific
routes, for each route we will use a Route element, which will call a path, and the element we will render when that path is called. 
*/
const App = () => (
  <BrowserRouter> {/*it has to wrap the entire app*/}
    <Box sx={{ backgroundColor: '#2C5F2D' }}> {/*background for the entire app*/}
      <Navbar /> {/*this Navbar will be present in the entire app*/}
      <Routes>
        <Route exact path='/' element={<Feed />} /> {/*the path '/' will render the Feed element*/}
        <Route path='/video/:id' element={<VideoDetail />} /> {/* the path '/video/:id' will render the VideoDetail element*/}
        <Route path='/channel/:id' element={<ChannelDetail />} /> {/* the path '/channel/:id' will render the ChannelDetail element*/}
        <Route path='/search/:searchTerm' element={<SearchFeed />} /> {/* the path '/search/:searchTerm' will render the SearchFeed element. 
          searchTerm is a state that is set on the SearchBar element (part of the Navbar*/}
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
 