import { Stack, Box } from "@mui/material"; 
import { Link } from "react-router-dom";

import  logo  from "../assets/greenlogo.png";
import { SearchBar } from "./";
//Navbar component
/* 
  it will render a <Stack/> element which is a component from materialUI. we can always modify this elements checking the documentation of materialUI
    with the sx property we can set any css style we want for this element.
  this Stack element will work as a container for the navbar elements. so within the Stack element we will have.
    - a Link element from router-dom which will link the children element to the path we set up.
      this Link element will contain a img tag (children element) rendering a logo that has been imported from constants. 
    - a <SearchBar /> element which we have previously created and it has been imported from components.
*/  
const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#2C5F2D', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    
    <SearchBar />
  </Stack>
);

export default Navbar;
