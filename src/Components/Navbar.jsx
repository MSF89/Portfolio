import React, { useState } from "react";
import ImgLogo from '../Imgs/sole.png';
import styled from "styled-components"
import { Link, animateScroll as scroll } from 'react-scroll'
import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon } from '@mui/material'
import { Abc, Close, Menu } from '@mui/icons-material'



const linkes = [
  {
    id: "about",
    text: "Sobre Mi",
  },
  {
    id: "skills",
    text: "Skills",
  },
  {
    id: "work",
    text: "Proyectos",
  },
  {
    id: "contact",
    text: "Contacto",
  }
]


function Navbar() {
  const [open, setOpen] = useState(false)
  

  return (
    <>
      <NavContainer>
        <a href="#"><img className="logo" src={ImgLogo} alt="" /></a>
        <List className="links">
          {
            linkes.map(({ id, text }, index) => (
              <Link key={index} to={id} spy={true} activeClass="active" smooth={true} duration={500} offset={-95}>
                {text}
              </Link>
            ))
          }
        </List>

        <IconButton className="burguer" onClick={() => setOpen(!open)}>
          <Menu fontSize="large" />
        </IconButton>

        <Drawer anchor="right" open={open}  onClose={() => setOpen(false)}>
          <IconButton  className="btnClose" onClick={() => setOpen(false)}>
            <Close color= "action" fontSize="large" />
          </IconButton>
          <Divider/>
          {
            linkes.map(({ id, text }, index) => (
              <Link style={menuLateral} key={index} to={id}  spy={true} activeClass="active" smooth={true} duration={500} offset={-95}>
                <ListItem component="h5">
                  {text}
                </ListItem>
                  <Divider/>
              </Link>
            ))
          }
        </Drawer>
      </NavContainer>
    </>
  );
}

export default Navbar;
const menuLateral = {
  width: "40vw",  
  color: "#727297",
  cursor: "pointer",
  fontSize: "1.5em",
  padding: ".6em",  
  
}

const NavContainer = styled.nav`
 position: sticky;
 top:0;
 z-index: 999;
 background-color: white;
 
 display: flex;
 align-items: center;
 justify-content: space-between;
 border-bottom: 2px solid #727297;

  .logo{
    width: 4em;
    object-fit: contain;
  }
  .logo:hover{
    cursor: pointer;
  }

  .links{
   display: none;
   
    
    @media(min-width: 768px){
      display: flex;
      text-decoration: none;
      cursor: pointer;
      a{
        margin-right: .5em;  
        color: #727297;
        font-size: 1.25em;
        font-weight: bold;
        display: inline;
        &:hover{
          color: #2f2f3d;
        }
      }
    }
  }
 
  .burguer{
    @media(min-width: 768px){
      display: none;
      
    }
 
`
