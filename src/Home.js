import React, { Component, Fragment } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Footer from "./Footer.js";
import "./index.css";

import "../node_modules/video-react/dist/video-react.css"; // import css
import { Player } from 'video-react';


class Home extends Component {
  state = {
    heading: {
      textAlign: "center",
      display: "block",
      margin: "auto",
      width: 1000,
      borderWidth: 3, 
      borderStyle: "solid", 
      borderColor: "blue",
      backgroundColor: "#a3e5f6",
      fontFamily: "cambria",
      padding: 7
    },

    cardGrid: {
        paddingTop: 8,
        paddingBottom: 8
    },

    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column", 
      marginLeft: 10
    },

    cardMedia: {
      paddingTop: "56.25%" // 16:9
    },

    cardContent: {
      flexGrow: 1
    }, 


    card2: {
        display: 'flex',
    },

    details: {
        display: 'flex',
        flexDirection: 'column',
    },

    content: {
        flex: '1 0 auto',
    },

    cover: {
        width: 151,
    },


    controls: {
        display: 'flex',
        alignItems: 'center',
        // paddingLeft: theme.spacing(1),
        // paddingBottom: theme.spacing(1),
    },

    playIcon: {
        height: 38,
        width: 38,
    }
    
  };

  render() {
    const cards = [
      { id: 1, image: "personexperience.gif", header: "Experience", description: "Portrays a person's experience of their life events." },
      { id: 2, image: "subject.gif", header: "Personality", description: "Displays an analysis of the subject's personality." },
      { id: 3, image: "non-fiction.gif", header: "Non-Fiction", description: "Involves around non-fictional categories." }
    ];

    return (
      <Fragment>

        <h3 style={this.state.heading}>
          <strong>UNDERSTAND THE IMPORTANCE OF BIOGRAPHY && ITS MAJOR REASONS</strong>
        </h3>

        <br />

        <Container className={this.state.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={this.state.card} style = {{marginRight: 10, marginLeft: 10, borderWidth: 2, borderStyle: "solid", borderColor: "red"}}>
                  <CardMedia
                    className={this.state.cardMedia}
                    component="img"
                    alt="Reason Cards"
                    image={`/images/${card.image}`}
                    title="Image title"
                  />
                  <CardContent className={this.state.cardContent}>
                    <Typography gutterBottom variant="h5" component="h3" style = {{textAlign: "center", fontFamily: "cambria", fontSize: 25, color: "purple"}}>
                      <strong>{card.header}</strong>
                    </Typography>
                    <Typography style = {{textAlign: "center", fontFamily: "cambria", fontSize: 16}}>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <br/>
        <br/>

        <Card className={this.state.card2} style = {{backgroundColor: "#f3ebc5", borderWidth: 2, borderStyle: "solid", 
        borderColor: "red", width: 2000, display: "block", margin: "auto"}}>
            <div className={this.state.details}>
                <CardContent className={this.state.content}>
                    <CardMedia
                        component="img"
                        alt="Biography"
                        className={this.state.cover}
                        style = {{width: 900, height: 500, float: "left", marginRight: 25}}
                        image="../images/biography.png"
                        title="Biography Textures"
                    />
                    <span>
                        <Typography component="h6" variant="h4" style = {{textAlign: "center"}}>
                            <strong>ADVANCING HIDDEN ITEMS OF HANIA'S BIOGRAPHY: </strong>
                        </Typography>
                        <br/>
                        <Typography variant="subtitle1" color="black" style = {{fontFamily: "cambria", textAlign: "center", fontSize: 25}}>
                            <strong>MISSION: </strong> <br/><span>Our mission is to positively introduce the biography of a person and their country
                                to all the communities of the world. 
                            </span>
                        </Typography>
                        <br/>
                        <Typography variant="subtitle1" color="black" style = {{fontFamily: "cambria", textAlign: "center", fontSize: 25}}>
                            <strong>VISION: </strong><br/><span>Our vision is to be the market leader in specialized services by 
                                creating better futures for all children, families, and communities nationwide.
                            </span>
                        </Typography>
                        <br/>
                        <Typography variant="subtitle1" color="black" style = {{fontFamily: "cambria", textAlign: "center", fontSize: 25}}>
                            <strong>VALUES: </strong><br/><span>Trust, Integrity, Quality, Results, & Community </span>
                        </Typography>
                    </span>
                
                </CardContent>
            </div>   
        </Card>

        <br/>

        <h3 style={this.state.heading}>
          <strong>WATCH OUR VIDEO TO UNDERSTAND THE BIOGRAPHY DIFFERENCES</strong>
        </h3>

        <br/>

        <div style = {{width: 1100, margin: "auto", display: "block", borderWidth: 3, borderColor: "red", borderStyle: "dotted"}}>
          <Player
            playsInline
            poster="/images/background2.png"
            src="/sound/biography.mp4"
          />
        </div>

        <br/>

        <Footer />


      </Fragment>
    );
  }
}

export default Home;
