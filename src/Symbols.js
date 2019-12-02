import React, { Component, Fragment } from "react";
import Sound from "react-sound";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import { Button } from "react-bootstrap";
import Footer from "./Footer.js";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Divider from "@material-ui/core/Divider";

class Symbols extends Component {
  state = {
    display: false,
    isPlayed: false,
    value: 0,
    volumeValue: 0,

    root: {
      width: 400,
      margin: "auto",
      display: "block"
    },

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
      height: 550,
      borderWidth: 2,
      borderColor: "blue",
      borderStyle: "solid"
    },

    media: {
      height: 170
    },

    card2: {
      display: "flex"
    }
  };

  handleAudio = () => {
    this.setState({ isPlayed: !this.state.isPlayed });
  };

  handleControl = x => {
    this.setState({ value: x });
  };

  handleVolume = (event, newValue) => {
    this.setState({
      volumeValue: newValue
    });
  };

  handleChange = event => {
    this.setState({ volumeValue: event.target.value });
  };

  render() {
    const symbols = [
      {
        id: 1,
        name: "National Flag",
        image: "flag.png",
        description:
          "The green represents Islam, white stripe represents religious minority religions, and the moon + white five-pointed star symbolize progress and light respectively."
      },
      {
        id: 2,
        name: "National Language",
        image: "urdu.png",
        description:
          "Urdu is the national language of Pakistan despite not being a native language or being the mother tongue of any native group in the country."
      },
      {
        id: 3,
        name: "National Bird",
        image: "bird.png",
        description:
          "Chakor or Pheasant is the national bird of Pakistan. It is a Eurasian upland game bird in the pheasant family Phasianidae, which cannot fly for a long distance."
      },
      {
        id: 4,
        name: "National Color",
        image: "color.png",
        description:
          "The national colors of Pakistan are green and white. These colors represents minorities & Muslim majortiy, respectively."
      },
      {
        id: 5,
        name: "National Reptile",
        image: "crocodile.png",
        description:
          "The National Reptile of Pakistan is an Indus crocodile or the Mugger crocodile."
      },
      {
        id: 6,
        name: "National Flower",
        image: "flower.png",
        description:
          "Jasmine is the national flower of Pakistan. It is very common in Pakistan and can be found in any garden. The attractive scent, the white jasmine symbolizes attachment and represents amiability and modesty."
      },
      {
        id: 7,
        name: "National Sport",
        image: "hockey.png",
        description:
          "The National Sport of Pakistan is Hockey and is well known among all the states of Pakistan."
      },
      {
        id: 8,
        name: "National Religion",
        image: "islam.png",
        description:
          "Islam is the state religion of Pakistan, and about 98% of Pakistanis are Muslim. It is the 2nd largest number of Muslims in the world after Indonesia."
      },
      {
        id: 9,
        name: "National Leader",
        image: "leader.png",
        description:
          "Quaid-e-Azam Muhammad Ali Jinnah is known as the Father of the Nation or the Great Leader of Pakistan. He  served as the leader of the All-India Muslim League from 1913 until Pakistan's creation on 14 August 1947, and then as Pakistan's first Governor-General until his death."
      },
      {
        id: 10,
        name: "National Fruit",
        image: "mango.png",
        description: "Mango is the National Fruit of Pakistan."
      },
      {
        id: 11,
        name: "National Mosque",
        image: "mosque.png",
        description:
          "Faisal Mosque is the national mosque of Pakistan and is named after Saudi King Faisal. It can hold 100,000 worshippers, while the surrounding porticoes and the courtyard up-to 200,000 more."
      },
      {
        id: 12,
        name: "Mother of the Nation",
        image: "motherofnation.png",
        description:
          "Fatima Ali Jinnah, the younger sister of Quaid-e-Azam Muhammad Ali Jinnah, was widely known as the Mother of Nation. She was a Pakistani dental surgeon, biographer, stateswoman, and one of the leading founders of Pakistan."
      },
      {
        id: 13,
        name: "National Mountain",
        image: "mountain.png",
        description:
          "K-2 is the national mountain of Pakistan and is the second highest mountain in the world. It is in the Karakoram Range section of the Western Himalayas between Pakistan and the People's Republic of China."
      },
      {
        id: 14,
        name: "National Poet",
        image: "poet.png",
        description:
          "Allama Mohammad Iqbal is the national poet of Pakistan. He was a poet, philosopher and politician, as well as an academic, barrister and scholar in British India who is widely regarded as having inspired the Pakistan Movement. "
      }
    ];

    return (
      <Fragment>
        <Sound
          url="/sound/anthem.mp3"
          playStatus={
            this.state.value === 0
              ? Sound.status.PLAYING
              : this.state.value === 1
              ? Sound.status.PAUSE
              : Sound.status.STOPPED
          }
          volume={this.state.volumeValue}
        />

        {/* <div style={this.state.root}>
          <Typography id="continuous-slider" gutterBottom>
            Volume
          </Typography>
          
        </div> */}

        <br />
        <br />

        <h3 style={this.state.heading}>
          <strong>NATIONAL SYMBOLS OF PAKISTAN</strong>
        </h3>

        <br />

        <Card
          className={this.state.card2}
          style={{
            backgroundColor: "#f3ebc5",
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: "red",
            width: 1400,
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
                  width: 900,
                  height: 500,
                  float: "left",
                  marginRight: 25
                }}
                image="../images/symbols/nationalanthem.png"
                title="Biography Textures"
              />
              <span>
                <Typography
                  component="h5"
                  variant="h4"
                  style={{ textAlign: "center" }}
                >
                  <strong>NATIONAL ANTHEM OF PAKISTAN</strong>
                </Typography>
                <br />
                <Typography
                  variant="subtitle1"
                  color="black"
                  style={{
                    fontFamily: "cambria",
                    textAlign: "center",
                    fontSize: 18
                  }}
                >
                  <strong>
                    The national anthem was written by famous poet Hafeez
                    Jallundhri in 1952, which was selected from 723 competing
                    songs and the prize money was Rs10,000. Pakistan's national
                    anthem is written in the Persian language and it has only a
                    single word “ka” in its national language Urdu. It was
                    officially adopted as Pakistan's national anthem in August
                    1954 and was recorded in the same year by eleven major
                    singers of Pakistan including Ahmad Rushdi, Kaukab Jahan,
                    Rasheeda Begum, Najam Ara, Naseema Shaheen, Zawar Hussain,
                    Akhtar Abbas, Ghulam Dastagir, Anwar Zaheer, and Akhtar Wasi
                    Ali.
                  </strong>
                </Typography>
                <br />
                <Typography
                  variant="subtitle1"
                  color="black"
                  style={{
                    fontFamily: "cambria",
                    textAlign: "center",
                    fontSize: 25
                  }}
                >
                  <strong>NATIONAL ANTHEM AUDIO</strong>
                  <br />
                  <span>
                    <div style={this.state.root}>
                      <Grid container spacing={2}>
                        <Grid item>
                          <VolumeDown />
                        </Grid>
                        <Grid item xs>
                          <Slider
                            value={this.state.volumeValue}
                            onChange={this.handleVolume}
                            aria-labelledby="continuous-slider"
                          />
                        </Grid>
                        <Grid item>
                          <VolumeUp />
                        </Grid>
                      </Grid>

                      <Button onClick={() => this.handleControl(0)}>
                        Play
                      </Button>
                      <Button onClick={() => this.handleControl(1)}>
                        Pause
                      </Button>
                      <Button onClick={() => this.handleControl(2)}>
                        Stop
                      </Button>
                    </div>
                  </span>
                </Typography>
              </span>
            </CardContent>
          </div>
        </Card>

        <br />
        <br />

        <Grid container spacing={1}>
          {symbols.map(symbol => (
            <Grid key={symbol.id} item xs={4} md={4}>
              <Card style={this.state.cardStyle}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Reseach Interests"
                    style={{ height: 350 }}
                    image={`/images/symbols/${symbol.image}`}
                    title="Image title"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      style={{ textAlign: "center", fontFamily: "cambria" }}
                    >
                      <strong>{symbol.name}</strong>
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
                      {symbol.description}
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

export default Symbols;
