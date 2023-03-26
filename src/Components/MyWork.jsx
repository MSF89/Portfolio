import { Typography, Grid, Card, CardMedia, CardContent, Link } from "@mui/material";
import React from "react";
import styled from "styled-components";
import MyWorkData from "./MyWorkData";

function MyWork({ title, id }) {
  return (
    <Work>
      <div className="divSection" id={id}>
        <Typography variant="h4" margin={4}>{title}</Typography>
        <Grid container>
          {
            MyWorkData.map(({ title, image, link }, index) =>
              <Grid item className="grid" key={index} xs={12} sm={6} md={4}>
                <Card className="card">
                  <CardMedia className="media" image={image} titulo= "caratula"/>
                  <CardContent>
                    <Link href={link} className="link" target="_blank" rel="noopener no referrer">
                      {title}
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            )
          }
        </Grid>
      </div>
    </Work>
  );
}

export default MyWork;

const Work = styled.div`
background-color: #727297;
color: white;
.grid{
  padding:1em;
}
.card{
  background-color: grey;
  width: 18em;
  height: 20em;
  margin 2em;
}
.media{
  background-color: rgb(208, 205, 205);
  height: 0;
  padding-top: 90%;
}
.link{
  color: #2f2f3d;
  text-decoration: none;
  &:hover{
    font-weight: bold;
  }
}

  `