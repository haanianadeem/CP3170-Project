import React, { Component, Fragment } from "react";
import Footer from "./Footer.js";
import "./index.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";

class Biography extends Component {
  state = {
    heading: {
      textAlign: "center",
      display: "block",
      margin: "auto",
      width: 900,
      borderWidth: 3,
      borderStyle: "solid",
      borderColor: "blue",
      backgroundColor: "#a3e5f6",
      fontFamily: "cambria",
      padding: 7
    },

    heading2: {
      textAlign: "center",
      width: 400,
      borderWidth: 3,
      borderStyle: "solid",
      borderColor: "blue",
      backgroundColor: "#a3e5f6",
      fontFamily: "cambria",
      padding: 10,
      marginLeft: 20
    },

    button: {
      fontSize: 15,
      textAlign: "center",
      display: "block",
      margin: "auto",
      width: 200
    },

    cardStyle: {
      maxWidth: 400,
      display: "inline-block",
      marginLeft: 15,
      height: 450,
      borderWidth: 2,
      borderColor: "blue",
      borderStyle: "solid"
    },

    media: {
      height: 170
    }
  };

  render() {
    const interests = [
      {
        id: 1,
        name: "New Cultures",
        image: "culture.png",
        description: "I explore and learn about new cultures of the world."
      },
      {
        id: 2,
        name: "Tourism",
        image: "tourism.png",
        description: "I visit new places to enjoy and increase my relaxation."
      },
      {
        id: 3,
        name: "Software Technologies",
        image: "software.png",
        description:
          "I love studying about IT Software and advance technologies. "
      },
      {
        id: 4,
        name: "Finding Books",
        image: "books.png",
        description:
          "Reading is my passion and knowing about new book arrivals is a piece of gold."
      },
      {
        id: 5,
        name: "Cooking Shows",
        image: "cookingShow.png",
        description:
          "Watching cooking shows and learning new recipes truly inspires me. One of my favourite cooking show is Pioneer Woman."
      }
    ];

    const programming = [
      {
        id: 1,
        name: "HTML",
        image: "html.png",
        description: "HyperText Markup Language!"
      },
      {
        id: 2,
        name: "CSS",
        image: "css.png",
        description: "Cascading Style Sheet!"
      },
      {
        id: 3,
        name: "JavaScript",
        image: "javascript.png",
        description: "Interactive Features To Webpages!"
      }
    ];

    const hobbies = [
      {
        id: 1,
        name: "Baking",
        image: "baking.png",
        description:
          "One of my passion to enjoy sweet flavours, reduce stress levels, and make people happy."
      },
      {
        id: 2,
        name: "Reading Books",
        image: "reading.png",
        description:
          "One of my favourite hobbies which helps my mind to learn and dive into mysterious backgrounds."
      },
      {
        id: 3,
        name: "Organzing Resources",
        image: "organizing.png",
        description:
          "I hate messy rooms and try my best to clean them as neat as a new pin. It's all about perfection!"
      },
      {
        id: 4,
        name: "Travelling",
        image: "travelling.png",
        description:
          "I travel for fun and learn about new cultures of the world. It helps to enhance my tolerance for uncertainty and ensures peace of mind."
      }, 

      {
        id: 5,
        name: "Helping People",
        image: "helping.png",
        description:
          "I help people to increase happiness and promote postive behaviour in teenagers. It develops a sense of purpose and satisfaction in my life."
      }
    ];

    return (
      <Fragment>
        <h3 style={this.state.heading}>
          <strong>
            STEP FORWARD INTO MY BIOGRAPHY TO EXPLORE THE INFORMATION!
          </strong>
        </h3>

        <br />

        <Card
          className={this.state.card2}
          style={{
            backgroundColor: "#8ed1fc",
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: "blue",
            width: 1300,
            display: "block",
            margin: "auto"
          }}
        >
          <div className={this.state.details}>
            <CardContent className={this.state.content}>
              <CardMedia
                component="img"
                alt="Biography"
                className={this.state.cover}
                style={{
                  width: 500,
                  height: 500,
                  float: "left",
                  marginRight: 25
                }}
                image="../images/hania.png"
                title="Biography Textures"
              />
              <span>
                <Typography
                  variant="subtitle1"
                  color="black"
                  style={{
                    fontFamily: "cambria",
                    textAlign: "center",
                    fontSize: 23
                  }}
                >
                  <strong>NAME: </strong>
                  <span>Hania Nadeem</span>
                </Typography>
                <br />
                <Typography
                  variant="subtitle1"
                  color="black"
                  style={{
                    fontFamily: "cambria",
                    textAlign: "center",
                    fontSize: 23
                  }}
                >
                  <strong>SIBLINGS: </strong>
                  <span>Zero (0) !</span>
                </Typography>
                <br />
                <Typography
                  variant="subtitle1"
                  color="black"
                  style={{
                    fontFamily: "cambria",
                    textAlign: "center",
                    fontSize: 23
                  }}
                >
                  <strong>WHERE DO I LIVE: </strong>
                  <span>
                    Villa A5, Al-Bayyan Gardens, Near Al-Sadd Sports Club, Ahmed
                    Bin Taymiyya Street, Doha Qatar.{" "}
                  </span>
                </Typography>
                <br />
                <Typography
                  variant="subtitle1"
                  color="black"
                  style={{
                    fontFamily: "cambria",
                    textAlign: "center",
                    fontSize: 23
                  }}
                >
                  <strong>NATIONALITY: </strong>
                  <span>Pakistani</span>
                </Typography>
                <br />
                <Typography
                  variant="subtitle1"
                  color="black"
                  style={{
                    fontFamily: "cambria",
                    textAlign: "center",
                    fontSize: 23
                  }}
                >
                  <strong>CURRENT PROFESSION: </strong>
                  <span>Web Developer Student at CNAQ</span>
                </Typography>
                <br />
                <Typography
                  variant="subtitle1"
                  color="black"
                  style={{
                    fontFamily: "cambria",
                    textAlign: "center",
                    fontSize: 23
                  }}
                >
                  <strong>GOALS: </strong>
                  <span>
                    Work as an IT Consultant or a Software Developer in
                    Microsoft + Apple Company
                  </span>
                </Typography>
                <br />
              </span>
            </CardContent>
          </div>
        </Card>

        <br />
        <br />

        <h3 style={this.state.heading2}>
          <strong>RESEARCH INTERESTS</strong>
        </h3>
        <br />

        <h3 style={{ fontFamily: "cambria", marginLeft: 20, fontSize: 23 }}>
          <strong>
            EXPLORE THE TYPES OF MY PARTICULAR RESEARCH INTERESTS:
          </strong>
        </h3>

        <br />

        <div>
          {interests.map(interest => (
            <Card key={interest.id} style={this.state.cardStyle}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Reseach Interests"
                  image={`/images/${interest.image}`}
                  title="Image title"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: "center", fontFamily: "cambria" }}
                  >
                    <strong>{interest.name}</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{
                      textAlign: "center",
                      fontFamily: "cambria",
                      fontSize: 20,
                      color: "black"
                    }}
                  >
                    {interest.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>

        <br />
        <br />

        <h3 style={this.state.heading2}>
          <strong>HOBBIES</strong>
        </h3>
        <br />

        <h3 style={{ fontFamily: "cambria", marginLeft: 20, fontSize: 23 }}>
          <strong>
            EXPLORE THE TYPES OF MY FAVOURITE HOBBIES:
          </strong>
        </h3>

        <br />

        <div>
          {hobbies.map(hobby => (
            <Card key={hobby.id} style={this.state.cardStyle}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Reseach Interests"
                  image={`/images/${hobby.image}`}
                  title="Image title"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: "center", fontFamily: "cambria" }}
                  >
                    <strong>{hobby.name}</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{
                      textAlign: "center",
                      fontFamily: "cambria",
                      fontSize: 20,
                      color: "black"
                    }}
                  >
                    {hobby.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>

        <br/>
        <br/>

        <h3 style={this.state.heading2}>
          <strong>IT SOFTWARE LANGUAGES</strong>
        </h3>
        <br />

        <h3 style={{ fontFamily: "cambria", marginLeft: 20, fontSize: 23 }}>
          <strong>
            EXPLORE THE TYPES OF MY FAVOURITE PROGRAMMING LANGUAGES:
          </strong>
        </h3>

        <br />

        <div>
          {programming.map(program => (
            <Card key={program.id} style={this.state.cardStyle}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Reseach Interests"
                  image={`/images/${program.image}`}
                  title="Image title"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{
                      textAlign: "center",
                      fontFamily: "cambria",
                      fontSize: 20,
                      color: "black"
                    }}
                  >
                    {program.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
        <br/>


        <Footer />
      </Fragment>
    );
  }
}

export default Biography;
