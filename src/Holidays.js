import React, { Component, Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Footer from "./Footer.js";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

class Holidays extends Component {
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
      height: 530,
      borderWidth: 2,
      borderColor: "blue",
      borderStyle: "solid"
    },

    media: {
      height: 170
    }
  };

  render() {
    const holidays = [
      {
        id: 1,
        name: "Kashmir Solidarity Day",
        image: "kashmir.png",
        date: "5th February",
        description:
          "It focuses on showing Pakistan's support and unity with the people of Indian-occupied Kashmir, and their ongoing freedom struggle, and to pay homage to Kashmiri martyrs who lost their lives fighting for Kashmir's freedom."
      },
      {
        id: 2,
        name: "Labour Day",
        image: "labour.PNG",
        date: "1st May",
        description:
          "This day constitutes a yearly national tribute to the contributions workers have made to the strength, prosperity, and well-being of our country."
      },
      {
        id: 3,
        name: "Defence Day",
        image: "defence.png",
        date: "6th September",
        description:
          "This day is celebrated on the memory of martyred people who gave sacrifices of their life for the defense of the country: Pakistan - India War II was fought in 1965."
      },
      {
        id: 4,
        name: "Independence Day",
        image: "independence.png",
        date: "14th August",
        description:
          "Pakistan's Independence Day, which is annually held on August 14, celebrates the country's independence from the British rule on that date in 1947. This day is an occasion to promote patriotism and national unity."
      },
      {
        id: 5,
        name: "Eid-Ul-Fitr",
        image: "eid1.png",
        date: "Depends Upon Islamic Calendar",
        description:
          "Also known as Festival of Breaking the Fast, and is a religious holiday celebrated by Muslims worldwide that marks the end of Ramadan."
      },
      {
        id: 6,
        name: "Eid-Ul-Adha",
        image: "eid2.png",
        date: "Depends Upon Islamic Calendar",
        description:
          "An Islamic festival to commemorate the willingness of Hazrat Ibrahim (AS) to follow Allah's (God's) command to sacrifice his son. Muslims around the world observe this event and sacrifice animals."
      },
      {
        id: 7,
        name: "Pakistan Day",
        image: "pakistanday.png",
        date: "23rd March",
        description:
          "It is a national holiday in Pakistan commemorating the Lahore Resolution passed on 23 March 1940, and the adoption of the first constitution of Pakistan during the transition of the Dominion of Pakistan to the Islamic Republic of Pakistan on 23 March 1956."
      },
      {
        id: 8,
        name: "Quaid-E-Azam's Birthday",
        image: "quaid25.png",
        date: "25th December",
        description:
          "This national holiday commemorates the birthday of Muhammad Ali Jinnah, who was a notable politician, founder of Pakistan and Pakistan's first Governor-General. "
      },
      {
        id: 9,
        name: "Ashura",
        image: "ashura.png",
        date: "Depends Upon Islamic Calendar",
        description:
          "This is a period of mourning when the Shia Muslim community commemorates the martyrdom of Imam Hussain, the son of Hazrat Ali (RA) and the grandson of Prophet Muhammad (PBUH)."
      }
    ];

    return (
      <Fragment>
        <h3 style={this.state.heading}>
          <strong>NATIONAL HOLIDAYS OF PAKISTAN</strong>
        </h3>

        <br />
        <Grid container spacing={1}>
          {holidays.map(holiday => (
            <Grid key={holiday.id} item xs={4} md={4}>
              <Card style={this.state.cardStyle}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Reseach Interests"
                    style={{ height: 260 }}
                    image={`/images/holidays/${holiday.image}`}
                    title="Image title"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      style={{ textAlign: "center", fontFamily: "cambria" }}
                    >
                      <strong>{holiday.name}</strong>
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
                        fontSize: 15,
                        color: "black"
                      }}
                    >
                      <strong>{holiday.date}</strong>
                    </Typography>
                    <br />
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
                      {holiday.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <br />

        <Footer />
      </Fragment>
    );
  }
}

export default Holidays;
