import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


//SearchBar element
/* 
SearchBar element contains:
  - a useState function that allows us to create an state and at the same time the function which modifies that state. 
      in this case we create searchTerm state and the function to modify it "setSearchTerm()" 
  - a navigate variable which calls the useNavigate function that has been imported from react-router-dom package.
    this function will call the element that is associated to the path that is set up as a property of the same function.
  - an onhandleSubmit function. this function will have a condition if: 
    so if searchTerm is real (it is not an empty string), we will call the navigate function:
      as property we will set the path /search/"searchTerm" (the state). so this will call the SearchFeed element. (check App.js)
SearchBar element will render:
  - a <Paper/> element which is a materialUI component this one works as a form tag that help to set all the css styles for the input,
    it also contains the onSubmit property which calls the onhandleSubmit function when the button submit is clicked and the input has some data.
  - an input tag. this tag gets as properties: 
    onChange which calls an (e) function that will set the state (searchTerm) calling the function setSearchTerm. 
    the value property will get the value of the searchTerm.
  - an <IconButton/> element which is a materialUI component. 
    this one works as a wrapper for the proper icon and it helps to set up the style of the button.
    it also contains the icon which will be display in the button.
*/

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px', color: '#97BC62FF' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
