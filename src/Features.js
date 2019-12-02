import React, { Component, Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Footer from "./Footer.js";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

class Features extends Component {
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
      height: 590,
      borderWidth: 2,
      borderColor: "blue",
      borderStyle: "solid"
    },

    media: {
      height: 170
    }
  };

  render() {
    const forests = [
      {
        id: 1,
        name: "Alpine Forests",
        image: "alpine.png",
        description:
          "These forests are found on the mountains of Gilgit-Balistan. In the region of high mountains, they cannot grow properly due to heavy snow. They normally have upward branches to attain more sunlight and grow upto 4000 metres."
      },
      {
        id: 2,
        name: "Tropical Thorn Forests",
        image: "tropicalthorn.png",
        description:
          "They are mostly widespread in the Punjab plains but also occupy small areas in southern Sindh and western Balochistan. They are mainly used for grazing purposes, watershed protection and fuelwood. The usual height is 6-9 m."
      },
      {
        id: 3,
        name: "Sub-Tropical Scrub Forests",
        image: "subtropical.png",
        description:
          "These forests are found in Gujrat, Margalla Hills, Attock & Malakand. They grow upto a height of 1500-5000 feet. They consist of branchy trees forming a canopy if complete closure or scattered trees with a shrub growth."
      },
      {
        id: 4,
        name: "Mangrove Forests",
        image: "mangrove.png",
        description:
          "These forests are slat tolerant bush type trees which grow in inter-tidal zones of tropical and subtropical areas, river deltas and along the coasts. It is estimated that some are 129,000 hectors spreaded in Indus delta and over 3,000 hectors in Gwadar bay areas."
      },
      {
        id: 5,
        name: "Riverain Forests",
        image: "riverain.png",
        description:
          "These forests occur in the province of Sindh along both banks of the Indus River. They provide Shishum and Babul, two valuable species which are used for making furniture. Their existence is havily dependant on the intensity, duration, and frequency of river water flow. "
      },
      {
        id: 6,
        name: "Irrigated Forests",
        image: "irrigated.png",
        description:
          "These are man made forests. They include plantation along roads, in parks and along railway lines. Their main function is to protect the soil and to prevent it from eroding. They are an important source of timber and firewood."
      },
      {
        id: 7,
        name: "Himalayan Dry Temperature Forests",
        image: "himalayan.png",
        description:
          "These are open evergreen forest with open scrub undergrowth. This type occurs on the inner ranges throughout their length and are mainly represented in the north-west. They have main species which consists of dry zone deodar and (Quercus ilex)."
      },
      {
        id: 8,
        name: "Littoral and Swamp Forests",
        image: "swamp.png",
        description:
          "These are more or less gregarious forests of low height which occur in the Arabian sea around the coast of Karachi and Pasni in Balochistan. The main species is Avicennia marina (99%). According to latest estimates, these forest cover an area of 207,000 ha."
      }
    ];

    const rivers = [
      {
        id: 1,
        name: "Chenab River",
        image: "chenab.png",
        description:
          "The Chenab River flows through Jammu and Kashmir. It is then joined by the Jhelum River at Trimmu, a flood control mechanism near Jhang and on moving further it merges with the Sutlej near Uch Sharif in Pakistan. Chenab River is nearly 960 kilometres long."
      },
      {
        id: 2,
        name: "Indus Valley River",
        image: "indus.png",
        description:
          "The Indus river is the 21st largest and longest river in Pakistan, originating from the Himalayan region. With a total length of 3,180 kilometres, it is also Pakistan's lifeline. It fulfils the water requirements of Pakistan and is the main support for agriculture."
      },
      {
        id: 3,
        name: "Jhelum River",
        image: "jhelum.png",
        description:
          "River Jhelum is nearly 774 kilometres long and is the tributary of River Chenab. It originates from the south-eastern part of Kashmir valley and flows through Srinagar before entering Pakistan. River Jhelum also has many dams and barrages constructed on it. "
      },
      {
        id: 4,
        name: "Ravi River",
        image: "ravi.png",
        description:
          "River Ravi, like many other rivers of the region, originates in the Himalayas. After it flows through south-west region of Indian Punjab, it moves along the Indo-Pak border and enters Pakistan and merges with Chenab. River Ravi is nearly 720 kilometres long."
      },
      {
        id: 5,
        name: "Sutlej River",
        image: "sutlej.png",
        description:
          "Sutlej flows through the historic crossroad region of Punjab in northern India and Pakistan. It is located north of the Vindhya Range, south of the Hindu Kush segment of the Himalayas, and east of the Central Sulaiman Range in Pakistan. Some 550 kilometres long, Sutlej is also called as the Red River."
      }
    ];

    const deserts = [
      {
        id: 1,
        name: "Cholistan Desert",
        image: "cholistan.png",
        description:
          "Cholistan Desert is 30km from Bahawalpur and extends over an area of 16,000 km². The dry bed of Hakra river lies across this area. The Desert is home to the famous Derawar Fort which was built by the nawabs of Bahawalpur in 1733. "
      },
      {
        id: 2,
        name: "Indus Valley Desert",
        image: "indusvalley.png",
        description:
          "The Indus Valley Desert is a desert ecoregion of northern Pakistan. The Indus Valley desert covers an area of 19,500 square kilometers (7,500 square miles) lying between the Chenab and Indus rivers. "
      },
      {
        id: 3,
        name: "Kharan Desert",
        image: "kharan.png",
        description:
          "The Kharan Desert is located in the province of Balochistan, Pakistan. Pakistan’s second nuclear tests were performed in this desert."
      },
      {
        id: 4,
        name: "Thar Desert",
        image: "thar.png",
        description:
          "The Thar Desert, which spreads from Pakistan into India, is the world’s 18th largest desert. In Pakistan, the desert extends over southeastern part of Punjab, and eastern part of Sindh. About 23 species of lizard and 25 species of snakes are found here."
      }
    ];

    const mountains = [
      {
        id: 1,
        name: "Broad Peak",
        image: "broadpeak.png",
        description:
          "Broad Peak is a Himalayan mountain on the border of Pakistan and China, the 12th highest mountain in the world at 8,047 metres (26,401 ft) above sea level. It is located in the Karakoram mountain range about 8 kilometres (5.0 mi) from K2."
      },
      {
        id: 2,
        name: "Gasherbum I",
        image: "gasherbum.png",
        description:
          "Also known as Hidden Peak, is the 11th highest mountain in the world at 8,080 metres (26,510 ft) above sea level. It is located in Gilgit–Baltistan region of Pakistan. Gasherbrum I is part of the Gasherbrum massif, located in the Karakoram region of the Himalaya."
      },
      {
        id: 3,
        name: "Gasherbum II",
        image: "gasherbumII.png",
        description:
          "It is the 13th highest mountain in the world at 8,035 metres (26,362 ft) above sea level. It is the third-highest peak of the Gasherbrum massif, and is located in the Karakoram, on the border between Gilgit–Baltistan, Pakistan, and Xinjiang, China."
      },
      {
        id: 4,
        name: "K-2",
        image: "K2.png",
        description:
          "K-2 stands at 8,611 metres (28,251 ft) above sea level, and is the second highest mountain in the world, after Mount Everest at 8,848 metres (29,029 ft). It is located on the China–Pakistan border between Baltistan in the Gilgit-Baltistan region of northern Pakistan & China."
      },
      {
        id: 5,
        name: "Nanga Parbat",
        image: "nangaparbat.png",
        description:
          "It is the ninth highest mountain in the world at 8,126 metres (26,660 ft) above sea level. Located in the Diamer District of Pakistan’s Gilgit Baltistan region, Nanga Parbat is the western anchor of the Himalayas."
      }
    ];

    return (
      <Fragment>
        <h3 style={this.state.heading}>
          <strong>FORESTS OF PAKISTAN</strong>
        </h3>

        <br />

        <Grid container spacing={1}>
          {forests.map(forest => (
            <Grid key={forest.id} item xs={4} md={4}>
              <Card style={this.state.cardStyle}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Reseach Interests"
                    style={{ height: 350 }}
                    image={`/images/forests/${forest.image}`}
                    title="Image title"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      style={{ textAlign: "center", fontFamily: "cambria" }}
                    >
                      <strong>{forest.name}</strong>
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
                      {forest.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <br />
        <br />

        <h3 style={this.state.heading}>
          <strong>RIVERS OF PAKISTAN</strong>
        </h3>

        <br />

        <Grid container spacing={1}>
          {rivers.map(river => (
            <Grid key={river.id} item xs={4} md={4}>
              <Card style={this.state.cardStyle}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Reseach Interests"
                    style={{ height: 350 }}
                    image={`/images/Rivers/${river.image}`}
                    title="Image title"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      style={{ textAlign: "center", fontFamily: "cambria" }}
                    >
                      <strong>{river.name}</strong>
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
                      {river.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <br />
        <br />

        <h3 style={this.state.heading}>
          <strong>DESERTS OF PAKISTAN</strong>
        </h3>

        <br />

        <Grid container spacing={1}>
          {deserts.map(desert => (
            <Grid key={desert.id} item xs={4} md={4}>
              <Card style={this.state.cardStyle}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Reseach Interests"
                    style={{ height: 350 }}
                    image={`/images/deserts/${desert.image}`}
                    title="Image title"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      style={{ textAlign: "center", fontFamily: "cambria" }}
                    >
                      <strong>{desert.name}</strong>
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
                      {desert.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <br />
        <br />

        <h3 style={this.state.heading}>
          <strong>MOUNTAINS OF PAKISTAN</strong>
        </h3>

        <br />

        <Grid container spacing={1}>
          {mountains.map(mountain => (
            <Grid key={mountain.id} item xs={4} md={4}>
              <Card style={this.state.cardStyle}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Reseach Interests"
                    style={{ height: 350 }}
                    image={`/images/mountains/${mountain.image}`}
                    title="Image title"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      style={{ textAlign: "center", fontFamily: "cambria" }}
                    >
                      <strong>{mountain.name}</strong>
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
                      {mountain.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <br />
        <br />

        <Footer />
      </Fragment>
    );
  }
}

export default Features;
