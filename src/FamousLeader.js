import React, { Component, Fragment } from "react";
import Footer from "./Footer.js";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

class FamousLeader extends Component {
  state = {
    heading: {
      textAlign: "center",
      display: "block",
      margin: "auto",
      width: 600,
      borderWidth: 3,
      borderStyle: "solid",
      borderColor: "blue",
      backgroundColor: "#a3e5f6",
      fontFamily: "cambria",
      padding: 7
    },

    cardStyle: {
      maxWidth: 500,
      margin: "auto",
      display: "block",
      height: 650,
      borderWidth: 2,
      borderColor: "blue",
      borderStyle: "solid"
    },

    media: {
      height: 170
    }
  };

  render() {
    const bio = [
      {
        id: 1,
        name: "Indian National Congress",
        image: "indian.png",
        description:
          "In 1920, the Indian National Congress launched a movement of non-cooperation to boycott all aspects of British rule. Jinnah opposed this policy and resigned from the congress. There were by now profound differences between the congress and the Muslim League."
      },
      {
        id: 2,
        name: "Muslim League",
        image: "muslim.png",
        description:
          "In 1940, at a Muslim League session in Lahore, the first official demand was made for the partition of India and the creation of a Muslim state of Pakistan. Jinnah had always believed that Hindu-Muslim unity was possible, but reluctantly came to the view that partition was necessary to safeguard the rights of Indian Muslims."
      },
      {
        id: 3,
        name: "Independence Day",
        image: "independence.png",
        description:
          "Jinnah's insistence on this issue through negotiations with the British government resulted in the partition of India and the formation of the state of Pakistan on 14 August 1947."
      }
    ];

    return (
      <Fragment>
        <h3 style={this.state.heading}>
          <strong>
            EXPLORE AND INCREASE THE KNOWLEDGE OF OUR PAKISTAN'S FAMOUS LEADER!
          </strong>
        </h3>

        <br />
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
                image="../images/quaid.png"
                title="Demographics"
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
                  <span>Quaid-E-Azam Muhammad Ali Jinnah</span>
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
                  <strong>DATE OF BIRTH: </strong>
                  <span>25th December 1876 in Karachi Pakistan</span>
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
                  <strong>EDUCATION: </strong>
                  <span>
                    Jinnah studied at Bombay University and at Lincoln's Inn in
                    London.
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
                  <strong>SIBLINGS: </strong>
                  <span>
                    3 Brothers (Ahmad Ali Jinnah, Bunde Ali Jinnah, Rahmat Ali
                    Jinnah) and 3 Sisters (Fatima Ali Jinnah, Shireen Jinnah,
                    Maryam Bai Jinnah)
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
                  <strong>DEATH: </strong>
                  <span>Died of tuberculosis on 11th September 1948</span>
                </Typography>
              </span>
            </CardContent>
          </div>
        </Card>

        <br />
        <br />

        <Grid container>
          {bio.map(biography => (
            <Grid key={biography.id} item xs={4} md={4}>
              <Card style={this.state.cardStyle}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Reseach Interests"
                    style={{ height: 350 }}
                    image={`/images/${biography.image}`}
                    title="Image title"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      style={{ textAlign: "center", fontFamily: "cambria" }}
                    >
                      <strong>{biography.name}</strong>
                    </Typography>
                    <Divider
                      style={{
                        color: "red",
                        borderWidth: 2,
                        borderStyle: "solid",
                        borderColor: "red"
                      }}
                    />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{
                        textAlign: "center",
                        fontFamily: "cambria",
                        fontSize: 18,
                        color: "black"
                      }}
                    >
                      {biography.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Footer />
      </Fragment>
    );
  }
}

export default FamousLeader;
