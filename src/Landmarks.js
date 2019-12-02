import React, {Component, Fragment} from "react"; 
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Footer from "./Footer.js";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import "../node_modules/video-react/dist/video-react.css"; // import css
import { Player } from 'video-react';


class Landmarks extends Component{
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
            height: 400,
            borderWidth: 2,
            borderColor: "blue",
            borderStyle: "solid",
            backgroundColor: "#f3ebc5"
          },
      
          media: {
            height: 170
          }, 
      
          root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
          },

          gridList: {
            flexWrap: 'nowrap',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
          },

          titleBar: {
            background:
              'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
          },

    };


    render(){
        const landmarks = [
            {
              id: 1,
              name: "Shalimar Gardens",
              image: "shalimar.png",
              description: 
              "The Shalimar Gardens is the possession of a noble, Pakistani family, a governance not difficult to guess at all, considering the magnificence of this beautiful site. It was completed in 1641 by the famous Mughal Emperor Shah Jahan in Lahore. The quaint pavilions, porticoed audience halls and marble basins found along the edges of the pools complete a peaceful, dream-like and refreshing corner in the city of Lahore.",
              featured: true
            },
            {
                id: 2,
                name: "Faisal Mosque",
                image: "faisal.png",
                description: 
                "The Faisal Mosque stands as a unique worship symbol in the heart of Islamabad Pakistan. The construction took place in 1976 and was completed within 10 years. The mosque is named after Faisal bin Abdul-Aziz, the Saudi king who suggested the idea of a national Pakistani mosque, and largely financed its construction. The 5,000-square-meter prayer hall is an eight-sided, concrete structure, inspired by the traditional tents of Bedouins, with a capacity for 100,000 worshippers. It’s surrounded by four 88-metre-high minarets in perfect one-to-one ratio with the base. ",
                featured: true
              },
              {
                id: 3,
                name: "Pakistan Monument",
                image: "pakistanMonument.png",
                description: 
                "The Pakistan Monument was inaugurated in Islamabad on 23 March 2007 as a national monument embodying the country’s history. For its design, architect Arif Masood drew inspiration from the figure of a blossoming flower to represent the four provinces and three territories into which Pakistan is subdivided. The structure consists of four bigger ‘petals’ (the provinces), alternated with three smaller ones (the territories), built in granite and decorated with murals on the inner sides.",
                featured: true
              },
              {
                id: 4,
                name: "Mazar-E-Quaid",
                image: "quaid.png",
                description: 
                "A beautiful mausoleum in Karachi, Pakistan’s largest city and Jinnah’s hometown, celebrates Muhammah Ali Jinnah's memory and is home to his tomb, as well as those of his sister and Pakistan’s first prime minister. The mausoleum’s bold design impresses with its striking yet iconic simplicity: a nearly cubic base, with an extension of 75 square meters, topped by a large dome, both clad with splendid white marble. Jinnah’s tomb lies on an elevated platform rising in the middle of the stunning surrounding park, with beautiful moans and a set of 15 successive fountains that lead the eye towards the mausoleum.",
                featured: true
              },
              {
                id: 5,
                name: "Minar-E-Pakistan",
                image: "minar.png",
                description: 
                "On 23 March 1940, the All-India Muslim League passed a resolution that represented the decisive step towards the foundation of Pakistan. Twenty years later, on the site in Lahore where that historical event had taken place, construction work began on a commemorative monument, the Minar-e-Pakistan, which was completed eight years later. The Minar-e-Pakistan is a 62-meter-high minaret rich in symbols standing for the history of Pakistan. The tower is laid on an elevated base, in the shape of a five-pointed star, which comprises of four platforms.",
                featured: true
              },
              {
                id: 6,
                name: "Wazir-E-Mosque",
                image: "wazir khan.png",
                description: 
                "The Wazir Khan Mosque in Old Lahore can be reached by passing through the Delhi Gate. The magnificent mosque, with four minarets of about 33 meters each and five turnip-shaped domes, is built entirely with small bricks and was named after the governor who ordered its construction in 1634. It is best known for its incredible mosaics made from myriads of brightly colored glazed tiles. This mosque is also famous for having been the first to include a 22-shop bazaar in its original planning, still today a unique feature among mosques worldwide.",
                featured: true
              },
              {
                id: 7,
                name: "Derawar Fort",
                image: "derawar.png",
                description: 
                "A visit to the Derawar Fort requires a three to four-hour long trip with a four-wheel vehicle, but those with a soft spot for military structures won’t regret the journey. Found in the middle of nowhere, miles into the Cholistan Desert, the awe-inspiring Derawar Fort, built in 1733, dominates the landscape, and is characterized by a unique ensemble of 40 massive, largely intact bastions set all along the four walls. The ramparts rise about 30 meters above the ground, and the fort has an impressive circumference of 1.5 kilometers. ",
                featured: true
              },
              {
                id: 8,
                name: "Hiran Minar",
                image: "hiranMinar.png",
                description: 
                "In 1606, when Mughal Emperor Jahangir’s pet deer died, he had a minaret built to commemorate it. The Hiran Minar (Deer Tower) is situated in the Pakistani city of Sheikhupura, which briefly enjoyed the status of a popular hunting ground in the early 1600s. A rare celebration of the love of man for animals, the Hiran Minar is an attractive sight that certainly deserves to be seen.",
                featured: true
              },
              {
                id: 9,
                name: "Lahore Fort",
                image: "lahoreFort.png",
                description: 
                "The origins of the Lahore Fort, a stronghold in Old Lahore, are so ancient that it’s impossible to establish precisely when the fort was first constructed. It is known, however, that in the second half of the 16th century, the original mud-brick structure was demolished and rebuilt with burnt bricks. A journey through Lahore Fort is in fact a journey through Pakistan’s past, and is for this reason recommended to anyone visiting the country.",
                featured: true
              },
              {
                id: 10,
                name: "Badshahi Mosque",
                image: "badshahiMosque.png",
                description: 
                "The majestic Badshahi Mosque in Lahore is one of the most stunningly beautiful sacred sites for Muslims. Built in 1673, this mosque was the world’s largest for over 300 years until the Faisal Mosque was completed in 1986. Its huge courtyard, which stretches over an area of 26,000 square meters, remains the biggest in the world, and can host up to 95,000 worshippers. The mosque’s external walls are clad with red sandstone panels, painstakingly sculptured with beautiful, lotiform motifs and embellished with marble inlays. As per tradition, the mosque has four minarets and three domes, the central one bigger than the other two. ",
                featured: true
              }
          ];



        return(
           <Fragment>
               <h3 style={this.state.heading}>
                    <strong>FAMOUS AND UNIQUE LANDMARKS OF PAKISTAN - YOU MUST VISIT THEM</strong>
                </h3>

                <br />


               <div className={this.state.root}>
                    <GridList cols={2.5} style={this.state.gridList}>
                        {landmarks.map(tile => (
                        <GridListTile
                            key={tile.id}
                            style = {{height: 500}}
                        >
                            <img src={`/images/landmarks/${tile.image}`} alt={tile.name} />
                            <GridListTileBar
                            title={tile.name}
                            style={{
                              root: this.state.titleBar,
                              title: this.state.title,
                              textAlign: "center",
                              fontSize: 50
                            }}
                            actionIcon={
                                <IconButton aria-label={`star ${tile.name}`} style = {{color: "red"}}>
                                    <StarBorderIcon />
                                </IconButton>
                            }
                            />
                        </GridListTile>
                        ))}
                    </GridList>
                </div>

            <br/>
            <br/>

            <h3 style={this.state.heading}>
                <strong>GET A CHANGE TO INCREASE YOUR KNOWLEDGE ABOUT THESE FAMOUS LANDMARKS</strong>
            </h3>

            <br/>

            <Grid container spacing={1}>
                        {landmarks.map(landmark => (
                            <Grid key={landmark.id} item xs={4} md={4}>
                            <Card style={this.state.cardStyle}>
                            <CardActionArea>
                                <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h3"
                                    style={{ textAlign: "center", fontFamily: "cambria" }}
                                >
                                    <strong>{landmark.name}</strong>
                                </Typography>
                                <Divider style = {{color: "red", borderWidth: 2, borderStyle: "solid", borderColor: "red"}}/>
                                <br/>
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
                                    {landmark.description}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <br/>

            <h3 style={this.state.heading}>
                <strong>WATCH THE VIDEO TO VIEW THE BEAUTIFUL SITES OF PAKISTAN</strong>
            </h3>

            <br/>

            <div style = {{width: 1100, margin: "auto", display: "block", borderWidth: 3, borderColor: "red", borderStyle: "dotted"}}>
              <Player
                playsInline
                poster="/images/background4.png"
                src="/sound/pakistan.mp4"
              />
            </div>

            <br/>
            <br/>


            <Footer/>

           </Fragment>
        )
    }
}

export default Landmarks; 
