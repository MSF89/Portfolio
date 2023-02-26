import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Technologies from "./Technologies";
import Imagenes from "./ImgSkillCert.js"



function Skills({title, id}) {

    return (
      <MisSkills>
        <div  className="divSection" id={id}>
          <Typography variant="h4" marginTop={4} marginLeft={4}>{title}</Typography>
          <div className="tech">
            <div>
            {
              Imagenes.map((e)=>
              <Technologies
                id={e.id}
                skill={e.skill}
                cert={e.cert}
                />
              )
            }
            </div>
          </div>
        </div>
      </MisSkills>

    );
  }
  
  export default Skills;

  const MisSkills = styled.div`  
  color: #2f2f3d;
  margin-bottom: 2em;
  .tech{
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  
  @media(min-width: 768px){
    .tech{
      display: block;
    }
    
  }
`