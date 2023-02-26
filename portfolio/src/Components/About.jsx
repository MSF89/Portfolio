import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ImgLogo from '../Imgs/sole.jpg';
import TypeWriterEffect from 'react-typewriter-effect'

function About({id}) {
    return (
      <SobreMi>
        <div  className="divSection" id={id}>
          
          <Card className="card">
            <CardMedia className="media" image={ImgLogo}></CardMedia>
            <CardContent className="content">
              <TypeWriterEffect text= "Hola! Soy Soledad Figueroa" textStyle={{fontSize:"2em", color: "white"}} startDelay={100} cursorColor="white" typeSpeed={100}/>
              <TypeWriterEffect text= "Desarrolladora FrontEnd apasionada, con ganas de crecer y aprender un poco más siempre!!" textStyle={{fontSize:"1.5em", color: "grey"}} startDelay={2800} cursorColor="grey" typeSpeed={100}/>
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
    background-color: rgb(51, 51, 51);
    max-width: 80%;
    margin: 0 auto;
    height: 400px;
    display: flex;
    margin-top: 4em;
    /* box-shadow: none; */
  }
  .media{
    width 20em;
    height: auto;
    object-fit: cover;
  }
  .content{
    margin-top: 3em;
    background-color: rgb(51, 51, 51);
  }
  
  
  `