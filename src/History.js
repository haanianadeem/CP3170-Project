import React, {Component, Fragment} from "react"; 
import Footer from "./Footer.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import "../node_modules/video-react/dist/video-react.css"; // import css
import { Player } from 'video-react';

class History extends Component{
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
            maxWidth: 415,
            margin: "auto",
            display: "center",
            height: 300,
            borderWidth: 2,
            borderColor: "blue",
            borderStyle: "solid"
          },

          cardStyle2: {
            maxWidth: 415,
            display: "inline-block",
            marginLeft: 15,
            height: 370,
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
                <strong>HISTORY OF PAKISTAN</strong>
              </h3>

              <br />

              <Card className={this.state.card2} style = {{backgroundColor: "#f3ebc5", borderWidth: 2, borderStyle: "solid", 
               borderColor: "red", width: 1400, display: "block", margin: "auto"}}>
                <div className={this.state.details}>
                    <CardContent className={this.state.content}>
                        <CardMedia
                            component="img"
                            alt="Biography"
                            className={this.state.cover}
                            style = {{width: 700, height: 490, float: "left", marginRight: 25}}
                            image="../images/history.png"
                            title="Biography Textures"
                        />
                        <span>
                            <Typography variant="subtitle1" color="black" style = {{fontFamily: "cambria", textAlign: "center", fontSize: 18,}}>
                                <strong>Pakistan was one of the two original successor states to British India, which was partitioned along religious lines in 1947. For almost 25 years following independence, it consisted of two separate regions, East and West Pakistan, but now it is made up only of the western sector. Both India and 
                                    Pakistan have laid claim to the Kashmir region; this territorial dispute led to war in 1949, 1965, 1971, 1999, and remains unresolved today. What is now Pakistan was in prehistoric times the Indus Valley civilization (c. 2500–1700 BC). A series of invaders—Aryans, Persians, Greeks, Arabs, Turks, and others—controlled the region 
                                    for the next several thousand years. Islam, the principal religion, was introduced in 711. In 1526, the land became part of the Mogul Empire, which ruled most of the Indian subcontinent from the 16th to the mid-18th century. By 1857, the British became the dominant power in the region. With Hindus holding most of the economic, 
                                    social, and political advantages, the Muslim minority's dissatisfaction grew, leading to the formation of the nationalist Muslim League in 1906 by Mohammed Ali Jinnah (1876–1949). The league supported Britain in the Second World War while the Hindu nationalist leaders, Nehru and Gandhi, refused. In return for the league's support 
                                    of Britain, Jinnah expected British backing for Muslim autonomy. Britain agreed to the formation of Pakistan as a separate dominion within the Commonwealth in Aug. 1947, a bitter disappointment to India's dream of a unified subcontinent. Jinnah became governor-general. The partition of Pakistan and India along religious lines resulted 
                                    in the largest migration in human history, with 17 million people fleeing across the borders in both directions to escape the accompanying sectarian violence.
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
                <strong>WATCH OUR VIDEO TO UNDERSTAND THE BIOGRAPHY DIFFERENCES</strong>
            </h3>

            <br/>

            <div style = {{width: 1100, margin: "auto", display: "block", borderWidth: 3, borderColor: "red", borderStyle: "dotted"}}>
            <Player
                playsInline
                poster="/images/background3.png"
                src="/sound/history.mp4"
            />
            </div>

            <br/>
            <br/>

                <Footer/>
           </Fragment>
        )
    }
}

export default History; 
