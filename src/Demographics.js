import React, {Component, Fragment} from "react"; 
import Footer from "./Footer.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";

class Demographics extends Component{
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
      
          cardStyle: {
            maxWidth: 400,
            display: "inline-block",
            marginLeft: 15,
            height: 550,
            borderWidth: 2,
            borderColor: "blue",
            borderStyle: "solid"
          },
      
          media: {
            height: 170
          }
    };

    render(){
        const interests = [
            {
              id: 1,
              name: "Pakistan and China",
              image: "pakchina.png",
              description: "The Karakoram Highway, also known as the Eighth Wonder of the World, lies on the border between Pakistan and China. The border is 523 kilometers long and is situated in the northeast of Pakistan."
            },
            {
              id: 2,
              name: "Pakistan and India",
              image: "pakindia.png",
              description: "On August 17, 1947 the 2,912 kilometers long border between Pakistan and India on the west was made official. One of the significant places for both countries on the border is Wagah."
            },
            {
              id: 3,
              name: "Pakistan and the Arabian Sea",
              image: "pakarabia.png",
              description:
                "The coastline of the Arabian Sea which covers 1,046-kilometres lies on the south of Pakistan. The Indus River and its tributaries flow into the Arabian Sea serving as an instrumental route between Pakistan and other countries for conducting trade."
            },
            {
              id: 4,
              name: "Pakistan and Iran",
              image: "pakiran.png",
              description:
                "The border between Pakistan and Iran is located on the west side, and is known as the Pakistan-Iran Barrier. It is 909 kilometers long and a 700 km concrete wall that is, three feet wide and 10 feet high has been built to stop the flow of illegal border crossings."
            },
            {
              id: 5,
              name: "Pakistan and Afghanistan",
              image: "pakafghan.png",
              description:
                "The border between Pakistan and Afghanistan formally known as the Durand Line is located on the west of Pakistan. The border is 2,430 kilometers long, and was established inNovember 1893 after an agreement between Afghanistan and the British Empire."
            }
          ];


        return(
            <Fragment>
                <h3 style={this.state.heading}>
                    <strong>
                        EXPLORE THE DEMOGRAPHICAL INFORMATION OF PAKISTAN!
                    </strong>
                </h3>

                <br/>

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
                image="../images/map.gif"
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
                  <strong>POPULATION: </strong>
                  <span>218,369,650</span>
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
                  <strong>LANGUAGES: </strong>
                  <span>Punjabi, Pashto, Sindhi, Saraiki, Urdu (more than 10 million speakers for these five languages)</span>
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
                  <strong>PROVINCES: </strong>
                  <span>
                    Four main provinces of Pakistan (Sindh, Punjab, Balochistan, NWFP)
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
                  <strong>RELIGIOUS GROUPS:  </strong>
                  <span>Shia, Sunni, Ale-Hadis, Deobandi</span>
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
                  <strong>TIME ZONES:  </strong>
                  <span>Pakistan observes UTC + 5 Standard Time Year Round</span>
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
                  <strong>COUNTRY SIZE: </strong>
                  <span>
                    33rd largest country, spanning 881,913 square kilometres (340,509 square miles)
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
          <strong>BORDERS OF PAKISTAN</strong>
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
                      fontSize: 18,
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


                <Footer/>

            </Fragment>

        )
    }
}

export default Demographics; 
