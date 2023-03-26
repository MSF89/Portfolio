import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Whats from "../Imgs/WhatsApp.png"
import Linkedin from "../Imgs/linkedin.png"
import GitHub from "../Imgs/GitHub.png"
import Email from "../Imgs/mail.webp"

const Redes = [
  
  {
    nombre:"Linkedin",
    link:"https://linkedin.com/in/soledad-figueroa-4a16b91aa",
    image: Linkedin,
    id: 1
  },
  {
    nombre:"GitHub",
    link:"https://github.com/MSF89",
    image: GitHub,
    id: 2
  },
  {
    nombre:"Whatsapp",
    link:"https://walink.co/debdf0",
    image: Whats,
    id: 3
  },
  {
    nombre:"Email",
    link:"mailto:figueroasoledad89@gmail.com",
    image: Email,
    id: 4
  },
]

function Contact({title, id}) {
    return (
      <Contacto>
        <div className="contenedor" id={id}>
          {
            Redes.map(({nombre, link, image}, id)=>
            <a key={id} href={link} target="_blank" rel="noopener no referrer"><img src={image} alt={nombre} /></a>              
            )
          }
        </div>
      </Contacto>
    );
  }
  
  export default Contact;

const Contacto = styled.div `
color: #2f2f3d;
display: block;
.contenedor{
  height: 6em;
  display: flex;
  align-items: center;
  justify-content: center;
}
img{
  width: 3em;
  padding: .5em;
  
  border-radius: 10px;
  box-shadow: 2px 1px 1px grey;
}
 
`

