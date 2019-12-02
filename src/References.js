import React, {Component, Fragment} from "react"; 
import Footer from "./Footer.js";

class References extends Component{
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
          }
    };

    render(){
        return(
           <Fragment>
               <h3 style={this.state.heading}>
                    <strong>
                        OUR WEBSITE'S REFERENCES FOR ALL CONTENTS
                    </strong>
                </h3>

                <br/>
                <br/>

                <h3 style={{ fontFamily: "cambria", margin: "auto", display: "block", fontSize: 20, textAlign: "center", width: 1700, borderWidth: 2, borderStyle: "solid", borderColor: "blue", padding: 10 }}>
                    <strong>
                        All About/Forestry. (2019, November 29). Retrieved from Pakissan: https://pakissan.com/english/allabout/forestory/forests.of.new.pakistan.shtml <br/> <br/>
                        China President. (2019, December 01). Retrieved from Support The Guardian: https://www.theguardian.com/world/2015/apr/20/china-president-xi-jinping-pakistan-land-corridor-agreement <br/><br/>
                        Deserts. (2019, November 29). Retrieved from Pakistan Tourism Development: https://www.mtholyoke.edu/~mirza20s/classweb/wp-website/balochistan.html <br/><br/>
                        Forests of Pakistan. (2019, November 29). Retrieved from SlideShare: https://www.slideshare.net/RoyalKing3/forests-of-pakistan-importance-types-causes-and-effects-92558506 <br/><br/>
                        Geography: The rivers of Pakistan. (2009, September 26). Retrieved from Dawn: https://www.dawn.com/news/884890/geography-the-rivers-of-pakistan <br/><br/>
                        Handicrafts of Pakistan. (2019, November 30). Retrieved from Vceela: https://www.vceela.com/blog/our-blog-1/post/handicrafts-of-pakistan-4 <br/><br/>
                        History. (2019, December 01). Retrieved from BBC: http://www.bbc.co.uk/history/historic_figures/jinnah_mohammad_ali.shtml <br/><br/>
                        Imran Khan Confirm as Pakistan Minister. (2018, August 17). Retrieved from BBC News: https://www.bbc.com/news/world-asia-45219455 <br/><br/>
                        List of mountains in Pakistan. (2019, November 29). Retrieved from Wikipedia: https://en.wikipedia.org/wiki/List_of_mountains_in_Pakistan <br/><br/>
                        Main Industries in Pakistan. (2019, November 30). Retrieved from Beyond The Horizon: http://beyondthehorizon.com.pk/main-industries-in-pakistan/ <br/><br/>
                        Music Instruments of Pakistan. (2019, November 30). Retrieved from Travel & Culture: https://www.travel-culture.com/pakistan/music/instruments.shtml <br/><br/>
                        National Symbols of Pakistan. (2019, November 29). Retrieved from Wikipedia : https://en.wikipedia.org/wiki/National_symbols_of_Pakistan <br/><br/>
                        Pakistan. (2019, December 01). Retrieved from InfoPlease: https://www.infoplease.com/world/countries/pakistan <br/><br/>
                        Pakistan. (2019, December 01). Retrieved from Wikipedia: https://en.wikipedia.org/wiki/Pakistan <br/><br/>
                        Pakistan Current Local Time. (2019, December 01). Retrieved from TimeTemperature.com: https://www.timetemperature.com/asia/pakistan_time_zone.shtml <br/><br/>
                        Pakistan Insider. (2019, November 29). Retrieved from Insider: https://insider.pk/entertainment/photos-entertainment/28-symbols-of-pakistan/ <br/><br/>
                        Pakistan's Top Trading Partners. (2019, December 01). Retrieved from World's Top Exports: http://www.worldstopexports.com/pakistans-top-import-partners/ <br/><br/>
                        The 10 Most Beautiful Places You Should See. (2019, November 30). Retrieved from Culture Trip: https://theculturetrip.com/asia/pakistan/articles/pakistan-s-10-most-beautiful-places-you-should-see/ <br/><br/>
                        The Borders of Pakistan. (2019, December 01). Retrieved from Travel: https://travel.jumia.com/blog/pk/the-borders-of-pakistan-1450 <br/><br/>
                        The National Anthem of Pakistan. (2019, November 30). Retrieved from Dawn : https://www.dawn.com/news/651435 <br/><br/>
                        Top 10 Traditional Pakistani Dishes. (2019, November 30). Retrieved from Travelling: https://www.wefindyougo.com/top-10-traditional-pakistani-dishes/
                    </strong>
                </h3>




            <Footer/>

           </Fragment>

        )
    }
}

export default References; 
