import React, {Component, Fragment} from "react"; 

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Footer from "./Footer.js";
import CardActionArea from "@material-ui/core/CardActionArea";
import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";


class Economy extends Component{
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
            display: "center",
            height: 350,
            borderWidth: 2,
            borderColor: "blue",
            borderStyle: "solid"
          },

          cardStyle2: {
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
          }

    };

    render(){
        const industries = [
            {
              id: 1,
              name: "Textile Industry",
              image: "textile.png",
              description: 
              "The textile sector in Pakistan contributes 57% to the country's exports. The textile industry is the second largest employment sector in Pakistan."
            },
            {
                id: 2,
                name: "Sports Industry",
                image: "sports.png",
                description: 
                "The city of Sialkot has been a centre of excellence for the production of sports goods for more than 100 years. The products are like cricket bats, hockey sticks, polo sticks etc."
              },

              {
                id: 3,
                name: "Sugar Industry",
                image: "sugar.png",
                description: 
                "The sugar industry is the country's second largest agriculture-based business after textiles. Sugarcane in Pakistan is grown on approximately 1.2 million hectares. "
              },

              {
                id: 4,
                name: "Cement Industry",
                image: "cement.gif",
                description: 
                "The cement industry of Pakistan has come a long way since 1947. Immediately after Partition, the annual production of cement in the country was 300,000 tons per year & capacity was 470,000 tons per annum."
              },

              {
                id: 5,
                name: "Fertilizer Industry",
                image: "fertilizer.png",
                description: 
                "There are six major producers of fertilizers which include Fauji Fertilizer, Engro Fertilizer Company, Dawood Hercules, and Fatima Fertilizers."
              }  
          ];

        return(
            <Fragment>
               <h3 style={this.state.heading}>
                <strong>TRADING PARTNERS OF PAKISTAN</strong>
              </h3>

              <br />

              <Card className={this.state.card2} style = {{backgroundColor: "#f3ebc5", borderWidth: 2, borderStyle: "solid", 
               borderColor: "red", width: 1200, display: "block", margin: "auto"}}>
                <div className={this.state.details}>
                    <CardContent className={this.state.content}>
                        <CardMedia
                            component="img"
                            alt="Biography"
                            className={this.state.cover}
                            style = {{width: 700, height: 450, float: "left", marginRight: 25}}
                            image="../images/trading.png"
                            title="Biography Textures"
                        />
                        <span>
                            <Typography component="h5" variant="h4" style = {{textAlign: "center"}}>
                                <strong>PAKISTAN'S TOP TRADING TRADERS: </strong>
                            </Typography>
                            <br/>
                            <Typography variant="subtitle1" color="black" style = {{fontFamily: "cambria", textAlign: "center", fontSize: 18,}}>
                                <strong>> United States: US$3.8 billion (16% of total Pakistani exports)<br/>
                                        > China: $1.8 billion (7.7%)<br/>
                                        > United Kingdom: $1.7 billion (7.3%)<br/>
                                        > Afghanistan: $1.4 billion (5.7%)<br/>
                                        > Germany: $1.3 billion (5.5%)<br/>
                                        > United Arab Emirates: $996 million (4.2%)<br/>
                                        > Netherlands: $941.6 million (4%)<br/>
                                        > Spain: $922.8 million (3.9%)<br/>
                                        > Bangladesh: $787.6 million (3.3%)<br/>
                                        > Italy: $776.5 million (3.3%)<br/>
                                        > Belgium: $668 million (2.8%)
                                </strong>
                            </Typography>
                            <br/>
                        </span>
                    
                    </CardContent>
                </div>   
            </Card>

            <br/>
            <br/>

            <h3 style={this.state.heading}>
                <strong>CURRENCY OF PAKISTAN</strong>
            </h3>

            <br />

            <h3 style={{ fontFamily: "cambria", margin: "auto", display: "block", fontSize: 20, textAlign: "center", width: 700 }}>
                  <strong>
                  The Pakistani Rupee abbreviated as PKR, is the official currency of Pakistan since 1948. The coins and notes are issued and controlled by the central bank, namely State Bank of Pakistan. 
                  </strong>
            </h3>

            <br/>

            <div>
                <Card style={this.state.cardStyle}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Reseach Interests"
                      image={`/images/currency.png`}
                      title="Image title"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        style={{ textAlign: "center", fontFamily: "cambria" }}
                      >
                        <strong>Pakistani Rupees</strong>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </div>

            <br/>
            <br/>

            <h3 style={this.state.heading}>
                <strong>MAIN INDUSTRIES OF PAKISTAN</strong>
            </h3>

            <br />

            <Grid container spacing={1}>
                        {industries.map(i => (
                            <Grid key={i.id} item xs={4} md={4}>
                            <Card style={this.state.cardStyle2}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Reseach Interests"
                                style = {{height: 350}}
                                image={`/images/industries/${i.image}`}
                                title="Image title"
                                />
                                <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h3"
                                    style={{ textAlign: "center", fontFamily: "cambria" }}
                                >
                                    <strong>{i.name}</strong>
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
                                    {i.description}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Footer />

            </Fragment>
        )
    }
}

export default Economy; 
