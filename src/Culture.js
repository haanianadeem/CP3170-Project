import React, {Component, Fragment} from "react"; 
import Footer from "./Footer.js";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Divider from '@material-ui/core/Divider';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";




class Culture extends Component{
    state = {
        heading: {
            textAlign: "center",
            display: "block",
            margin: "auto",
            width: 800,
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
        const music = [
            {
              id: 1,
              name: "Alghoza",
              image: "alghoza.png",
              description: 
              "The alghoza originated in Sindh, but its popularity has spread all over Pakistan. This instrument consists of a pair of flutes of nearly the same length and width with 6 holes. One flute is used for a continuous drone, while the other is played to produce a melody."
            },
            {
                id: 2,
                name: "Bansuri",
                image: "bansuri.png",
                description: 
                "The bansuri, or flute, is one of the most primitive instruments of Pakistan. It is played by holding it horizontally against the lips. It has six holes, which are closed and opened with the finger-pads in accordance with the melodic phrases."
            },
            {
                id: 3,
                name: "Dhol",
                image: "dhol.png",
                description: 
                "The Dhol or drum, which means lover in some regional languages, is a rhythm instrument enjoying wide popularity in both town and countryside. It is used for communication over long distances for community announcements."
            },
            {
                id: 4,
                name: "Ghara",
                image: "rubab.png",
                description: 
                "The Ghara of Punjab (dilu or changer in Sindh, mangay in NWFP, and noot in Kashmir) is actually a baked clay pitcher normally used for storing drinking water. Used to produce a fast rhythm, it is one of the most primitive percussion instruments known."
            },
            {
              id: 5,
              name: "Harmonium",
              image: "harmonium.png",
              description: 
              "The harmonium is a keyboard instrument. Thin metal tongues vibrate to a steady current of air produced by pumping the bellows. The harmonium has a three-octave keyboard. In Pakistan, the harmonium is very popular as an accompaniment to solo singing and Qawwali singing."
            },

            {
              id: 6,
              name: "Rubab",
              image: "rubab.png",
              description: 
              "The Rubab is a plucked string lute with frets on the upper end of the fingerboard. Its hollow body is made of wood, and the sound chamber is covered with goat skin. The melody is played upon strings made of gut, beneath which are a number of resonating metallic strings called tarab."
            },

            {
              id: 7,
              name: "Sarangi",
              image: "sarangi.png",
              description: 
              "The sarangi is a classical bow instrument made of wood, 65 to 70 centimeters in height, with about three dozen strings of gut, steel and brass. It is played with a horsehair bow held in the right hand."
            },

              {
              id: 8,
              name: "Sitar",
              image: "sitar.png",
              description: 
              "Playing this complex instrument demands great skill and ability. It consists of a hollow wooden fingerboard almost four feet long and three to four inches wide, called dand. This is attached to a half-round ball called tunba (gourd)."
            },
            {
              id: 9,
              name: "Tabla",
              image: "tabla.png",
              description: 
              "The tabla is a set of twin drums. While occasionally played solo, it is an indispensible accompaniment for all types of music in Pakistan. The drum played by the right hand is the main drum, called the the dayan, while the one played by the left hand is known as thebayan or dugga/duggi."
            },
          ];

          const art = [
            {
              id: 1,
              name: "Truck Art",
              image: "truck_art.png",
            },
            {
              id: 2,
              name: "Famous Painting",
              image: "painting.png",
            },
            {
              id: 3,
              name: "Famous Painting",
              image: "art2.png",
            },

            {
              id: 4,
              name: "Famous Painting",
              image: "art3.png",
            },
            {
              id: 5,
              name: "Drawing",
              image: "art4.png",
            },

          ];

          const dance = [
            {
              id: 1,
              name: "Bhagra",
              image: "bhagra.png",
              description: 
              "This is the most popular dance in Pakistan and across northern India. It has had a major impact on Lollywood too, where songs and dances in films have Bhangra moves."
            },
            {
              id: 2,
              name: "Jhumar",
              image: "jhumar.png",
              description: 
              "Jhumar is a folk dance native to Balochistan. This type of dance is mainly conducted by males in the region. It is slower and more rhythmic in form. "
            },

            {
              id: 3,
              name: "Jhumro",
              image: "jhumra.png",
              description: 
              "This is simply a mind-blowing dance performed by ladies from small towns in Sindh. Jhumro is a dance where sticks are used. "
            },
            {
              id: 4,
              name: "Luddi",
              image: "luddi.png",
              description: 
              "Luddi is historically a folk step. The moves for Luddi include using the legs, lower and upper body and the head. It is a common practice of dance attributed with wedding festivities throughout Pakistan."
            },
            {
              id: 5,
              name: "Sammi",
              image: "sammi.png",
              description: 
              "Sammi is a traditional form of dance. It originates across the tribal belt of Punjab, particularly in the Sandalbar area of the Potohar region. Men usually perform the Sammi dance during conventional Punjabi parties."
            }

          ];

          const food = [
            {
              id: 1,
              name: "Halwa Puri",
              image: "halwapuri.png",
              description: 
              "Halwa Puri is a special type of breakfast food type in Pakistan. It is normally originated from Punjab but it is famous all over the world for the very good taste and for it’s eye catching color."
            },
            {
              id: 2,
              name: "Biryani",
              image: "biryani.png",
              description: 
              "Biryani is essentially a South Indian dish yet it turned into a crushing hit in Pakistan for individuals here are wild about it. It is produced from rice and meat of any sort. "
            },
            {
              id: 3,
              name: "Haleem",
              image: "haleem.png",
              description: 
              "This types of food, Haleem and Hareesa, involve many of food ingredients like lentils, rice, meat or maze, but the amalgam of this kind of product, is tasty in the form of Haleem or hareesa."
            },
            {
              id: 4,
              name: "Chicken Karahi",
              image: "karahi.png",
              description: 
              "Karahi is a system where the meat is cooked with vegetables and served in its own particular container. Jalfrezi is meat blend singed with tomatoes, egg, and chilies."
            },
            {
              id: 5,
              name: "Seekh Kabab & Naan",
              image: "seekhkabab.png",
              description: 
              "Naan Kebabs are not really dishes but are kind of essential adds to a Pakistani dining table. The kebab, is made from minced meat and naan with flour dough and there is a very wide variety of kebabs in Pakistan like Tikka Kabab."
            },
            {
              id: 6,
              name: "Chicken Sajji",
              image: "sajji.png",
              description: 
              "Seeji or Saji and Dumpakht are two very special Baluchi cuisine food types that have become very famous all over the country. This food type is made out after skewing a whole lamb that sure makes it unique and very scrumptious for all."
            },
            {
              id: 7,
              name: "Lassi",
              image: "lassi.png",
              description: 
              "This well known drink might be appreciated sweet or salty. Pakistanis normally drink lassi sweet for breakfast, or salty for lunch or supper. "
            },
            {
              id: 8,
              name: "Gulaab Jamun",
              image: "gulaab.png",
              description: 
              "Gulab jamun is a milk-solid-based sweet or dessert from the Indian subcontinent, popular in India, Nepal, Pakistan, the Maldives, and Bangladesh, as well as Myanmar."
            }
          ];

          const crafts = [
            {
              id: 1,
              name: "Blue Pottery",
              image: "bluePottery.png",
              description: 
              "Blue pottery is a microcosm of the Sufi mausoleums dotting Multan and Sindh. It’s blue color inspired by the heavenly color preferred by Sufi masters. "
            },
            {
              id: 2,
              name: "Carpets",
              image: "carpet.png",
              description: 
              "It’s a communal craft which sustains an entire community. Some carpets are weaved for years: Translating Persian art and Ottoman miniature painting into silk rugs."
            },
            {
              id: 3,
              name: "Embroidery",
              image: "embroidery.png",
              description: 
              "Embroidery has been the staple of women in Pakistan, it is often the only canvas available to a woman to exhibit her creativity and imagination."
            },
            {
              id: 4,
              name: "Camel Lamps",
              image: "lamps.png",
              description: 
              "Camel lamps are a small piece of desert crafted from dried camel skin in deserts of Cholistan and Multan. "
            },
            {
              id: 5,
              name: "Marble Carving",
              image: "marble.png",
              description: 
              "The Marble carvings done in northern Pakistan can leave Michelangelo stunned. Virtuoso craftsmen work with porcelain marble pieces to create decorative items and art."
            },
            {
              id: 6,
              name: "Wood Carving",
              image: "wood.png",
              description: 
              "Wood Carving was inspired by the elaborate Mughal architecture; brave artisans working in small cities are still creating furniture pieces fit for a king in places."
            }
          ];

          const jewellery = [
            {
              id: 1,
              name: "Earrings",
              image: "earrings.png",
            },
            {
              id: 2,
              name: "Anklets",
              image: "anklet.png",
            },
            {
              id: 3,
              name: "Bangles",
              image: "bangle.png",
            },
            {
              id: 4,
              name: "Bangles",
              image: "bangles.png",
            },
            {
              id: 5,
              name: "Jewellery",
              image: "jewellery.png",
            },
          ];

        return(
            <Fragment>
              <h3 style={this.state.heading}>
                    <strong>EXPLORE THE UNIQUE AND CULTURAL ART OF PAKISTAN</strong>
              </h3>

              <br/>

              <h3 style={{ fontFamily: "cambria", margin: "auto", display: "block", fontSize: 20, textAlign: "center" }}>
                <strong>
                  Truck Art and Painting is a popular form of regional decoration in South Asia, with Pakistani and Indian trucks featuring elaborate floral patterns and calligraphy. Pakistani decorated trucks servicing Afghanistan came to be known as jingle trucks by American troops and contractors. 
                </strong>
              </h3>

              <br/>

              <div className={this.state.root}>
                    <GridList cols={2.5} style={this.state.gridList}>
                        {art.map(arts => (
                        <GridListTile
                            key={arts.id}
                            style = {{height: 500}}
                        >
                            <img src={`/images/art/${arts.image}`} alt={arts.name} />
                            <GridListTileBar
                            title= {arts.name}
                            style={{
                              root: this.state.titleBar,
                              title: this.state.title,
                              textAlign: "center",
                              fontSize: "60px"
                            }}
                            actionIcon={
                                <IconButton aria-label={`star ${arts.name}`} style = {{color: "red"}}>
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
                <br/>

                <h3 style={this.state.heading}>
                    <strong>UNIQUE AND HANDMADE JEWELLERY ITEMS</strong>
                </h3>

                <br/>

                <h3 style={{ fontFamily: "cambria", margin: "auto", display: "block", fontSize: 20, textAlign: "center" }}>
                  <strong>
                    Handmade jewellery and unique decoration with gems is an art in Pakistan. It beautifies and mesmerizes the eyes of the people when they wear it on special occasions. 
                  </strong>
                </h3>

                <br/>

                <div className={this.state.root}>
                    <GridList cols={2.5} style={this.state.gridList}>
                        {jewellery.map(jewel => (
                        <GridListTile
                            key={jewel.id}
                            style = {{height: 500}}
                        >
                            <img src={`/images/crafts/${jewel.image}`} alt={jewel.name} />
                            <GridListTileBar
                            title= {jewel.name}
                            style={{
                              root: this.state.titleBar,
                              title: this.state.title,
                              textAlign: "center",
                              fontSize: 60
                            }}
                            actionIcon={
                                <IconButton aria-label={`star ${jewel.name}`} style = {{color: "red"}}>
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
                    <strong>THE WORLD OF MUSICAL INSTRUMENTS</strong>
                </h3>

                <br/>


                <Grid container spacing={1}>
                        {music.map(m => (
                            <Grid key={m.id} item  xs={4} md={4}>
                            <Card style={this.state.cardStyle}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Reseach Interests"
                                style = {{height: 350}}
                                image={`/images/music/${m.image}`}
                                title="Image title"
                                />
                                <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h3"
                                    style={{ textAlign: "center", fontFamily: "cambria" }}
                                >
                                    <strong>{m.name}</strong>
                                </Typography>
                                <Divider style = {{color: "red", borderWidth: 2, borderStyle: "solid", borderColor: "red"}}/>
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
                                    {m.description}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <br/>
            <br/>
            <br/>

            <h3 style={this.state.heading}>
                    <strong>THE WORLD OF DANCE IN PAKISTAN</strong>
                </h3>

                <br/>


                <Grid container spacing={1}>
                        {dance.map(m => (
                            <Grid key={m.id} item  xs={4} md={4}>
                            <Card style={this.state.cardStyle}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Reseach Interests"
                                style = {{height: 350}}
                                image={`/images/dance/${m.image}`}
                                title="Image title"
                                />
                                <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h3"
                                    style={{ textAlign: "center", fontFamily: "cambria" }}
                                >
                                    <strong>{m.name}</strong>
                                </Typography>
                                <Divider style = {{color: "red", borderWidth: 2, borderStyle: "solid", borderColor: "red"}}/>
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
                                    {m.description}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <br/>
            <br/>
            <br/>

                <h3 style={this.state.heading}>
                    <strong>EXOTIC AND MOUTH WATERING CUISINES AND FOOD DISHES</strong>
                </h3>

                <br/>

                <Grid container spacing={1}>
                        {food.map(f => (
                            <Grid key={f.id} item  xs={4} md={4}>
                            <Card style={this.state.cardStyle}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Reseach Interests"
                                style = {{height: 350}}
                                image={`/images/food/${f.image}`}
                                title="Image title"
                                />
                                <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h3"
                                    style={{ textAlign: "center", fontFamily: "cambria" }}
                                >
                                    <strong>{f.name}</strong>
                                </Typography>
                                <Divider style = {{color: "red", borderWidth: 2, borderStyle: "solid", borderColor: "red"}}/>
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
                                    {f.description}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <br/>
            <br/>
            <br/>

                <h3 style={this.state.heading}>
                    <strong>UNIQUE CRAFTS AND POTTERY OF PAKISTAN</strong>
                </h3>

                <br/>

                <Grid container spacing={1}>
                        {crafts.map(craft => (
                            <Grid key={craft.id} item  xs={4} md={4}>
                            <Card style={this.state.cardStyle}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Reseach Interests"
                                style = {{height: 350}}
                                image={`/images/crafts/${craft.image}`}
                                title="Image title"
                                />
                                <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h3"
                                    style={{ textAlign: "center", fontFamily: "cambria" }}
                                >
                                    <strong>{craft.name}</strong>
                                </Typography>
                                <Divider style = {{color: "red", borderWidth: 2, borderStyle: "solid", borderColor: "red"}}/>
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
                                    {craft.description}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <br/>
            <br/>
            <br/>

              <Footer/>

              

            </Fragment>
        )
    }
}

export default Culture; 
