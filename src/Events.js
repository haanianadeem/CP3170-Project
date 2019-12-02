import React, {Component, Fragment} from "react"; 
import Footer from "./Footer.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

class Events extends Component{
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
            height: 450,
            borderWidth: 2,
            borderColor: "blue",
            borderStyle: "solid"
          },
      
          media: {
            height: 170
          }
    };

    render(){
        return(
            <Fragment>
                <h3 style={this.state.heading}>
                    <strong>
                        EXPLORE THE LATEST IMPORTANT EVENTS OF PAKISTAN!
                    </strong>
                </h3>

                <br/>

                <Card className={this.state.card2} style = {{backgroundColor: "#f3ebc5", borderWidth: 2, borderStyle: "solid", 
               borderColor: "red", width: 1400, display: "block", margin: "auto"}}>
                <div className={this.state.details}>
                    <CardContent className={this.state.content}>
                        <CardMedia
                            component="img"
                            alt="Biography"
                            className={this.state.cover}
                            style = {{width: 700, height: 490, float: "left", marginRight: 25}}
                            image="../images/chinaAgreement.png"
                            title="Biography Textures"
                        />
                        <span>
                            <Typography component="h5" variant="h4" style = {{fontFamily: "cambria", textAlign: "center", fontSize: 25}}>
                                <strong>PAKISTAN SIGNS AN AGREEMENT WITH CHINA</strong>
                            </Typography>
                            <br/>
                            <Typography variant="subtitle1" color="black" style = {{fontFamily: "cambria", textAlign: "center", fontSize: 18,}}>
                                <strong>In April 2015, The president of China has flown into Islamabad to finalise a multi-billion dollar investment programme that Pakistan is banking on to fix crippling electricity shortages and transform global trade routes.
                                    President Xi Jinping’s two-day trip has been dubbed a “fate-changing visit”, given the importance of the series of agreements he is expected to sign that are intended to turn Pakistan into a crucial trade route for China. 
                                    The huge sums being offered dwarf the billions spent over the last decade by the US in its attempts to stabilise a fragile nuclear power and enlist its support for the war against the Taliban in neighbouring Afghanistan.
                                    Pakistani officials claim the total investment comes to $45bn (£30bn), with the bulk of it going on efforts to double the country’s current electricity output.
                                </strong>
                            </Typography>
                            <br/>>
                        </span>
                    
                    </CardContent>
                </div>   
            </Card>

            <br/>
            <br/>

            <Card className={this.state.card2} style = {{backgroundColor: "#f3ebc5", borderWidth: 2, borderStyle: "solid", 
               borderColor: "red", width: 1400, display: "block", margin: "auto"}}>
                <div className={this.state.details}>
                    <CardContent className={this.state.content}>
                        <CardMedia
                            component="img"
                            alt="Biography"
                            className={this.state.cover}
                            style = {{width: 700, height: 490, float: "left", marginRight: 25}}
                            image="../images/imranKhan.png"
                            title="Biography Textures"
                        />
                        <span>
                            <Typography component="h5" variant="h4" style = {{fontFamily: "cambria", textAlign: "center", fontSize: 25}}>
                                <strong>IMRAN KHAN BECOMES THE PRIME MINISTER OF PAKISTAN</strong>
                            </Typography>
                            <br/>
                            <Typography variant="subtitle1" color="black" style = {{fontFamily: "cambria", textAlign: "center", fontSize: 18,}}>
                                <strong>
                                On 18th August 2018, Pakistan's parliament has elected Imran Khan as prime minister after his party swept the general election last month, vowing to bring an era of accountability and prosperity to the South Asian country.
                                Members of the National Assembly voted in the capital, Islamabad, on Friday for Khan to be leader of the house, making him Pakistan's head of state.
                                Khan secured 176 votes on Friday, beating  Shehbaz Sharif, president of the Pakistan Muslim League-Nawaz (PML-N) party, who got 96.
                                Khan will take the oath on Saturday, form a cabinet and assume control of the government in the coming days.
                                </strong>
                            </Typography>
                            <br/>
                        </span>
                    
                    </CardContent>
                </div>   
            </Card>


                <Footer/>
            </Fragment>

        )
    }
}

export default Events; 
