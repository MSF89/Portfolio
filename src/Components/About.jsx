import { Card, CardContent } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ImgLogo from '../Imgs/sole.jpg';
import TypeWriterEffect from 'react-typewriter-effect'

function About({id}) {
    return (
      <SobreMi>
          <div  className="divSection" id={id}>
          
          <Card className="card">
            <img className="media" src={ImgLogo} alt="logo"/>
            <CardContent className="content">
              <TypeWriterEffect text= "Hola! Soy Soledad Figueroa" textStyle={{fontSize:"1.5rem", color: "grey"}} startDelay={100} cursorColor="grey" typeSpeed={100}/>
              <TypeWriterEffect text= "Desarrolladora FrontEnd apasionada, con ganas de crecer y aprender un poco más siempre!!" textStyle={{fontSize:"1.25rem", color: "grey"}} startDelay={2800} cursorColor="grey" typeSpeed={100}/>
            </CardContent>
          </Card>
        </div>
      </SobreMi>
      
      
    );
  }
  
  
  export default About;

  const SobreMi = styled.div `
  background-color: #727297;
  color: white;
  .card{
    background-color: rgb(208, 205, 205);
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    margin-bottom: 2em;
    /* box-shadow: none; */
  }
  .media{
    width: 100%; 
    height: auto;
    object-fit: cover;
  }
  .content{
    margin-top: 1em; 
  }
  
  @media(min-width: 600px){
    .card {
      margin-top: 4em;
      height: 400px;
      flex-direction: row;
    }
    .media {
      width: 25em; 
      height: auto;
    }
    .content{
      margin-top: 10%;
    }
    
  }
  `