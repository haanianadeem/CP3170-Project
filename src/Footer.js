import React, {Component, Fragment} from "react"; 
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


class Footer extends Component {
    state = { 
        value: 0, 

        root: {width: 500}
    };

    handleChange = event => {
        this.setState({value: event.target.value})
    }

    render(){
        return(
            <Fragment>
                <MDBFooter color="elegant-color" className="font-small pt-4 mt-4">
                    <MDBContainer fluid className="text-center text-md-left">
                        <MDBRow>
                            <MDBCol md="4">
                                <h2 className="title" style = {{fontFamily: "cambria"}}><strong>Hania Nadeem</strong></h2>
                                <p style = {{fontFamily: "cambria", fontSize: 19}}>
                                    This website allows a user to know about Hania Nadeem's Biography and explore the 
                                    cultural hearts of her country "Pakistan". 
                                </p>
                                <br/>
                                <span>
                                    <img 
                                        style = {{paddingRight: 15}}
                                        src = "/images/facebook.png"
                                        alt = "facebook.png"
                                    />
                                    <img 
                                        style = {{paddingRight: 15}}
                                        src = "/images/instagram.png"
                                        alt = "instagram.png"
                                    />
                                    <img 
                                        style = {{paddingRight: 15}}    
                                        src = "/images/youtube.png"
                                        alt = "youtube.png"
                                    />
                                    <img 
                                        src = "/images/linkedin.png"
                                        alt = "linkedin.png"
                                    />
                                </span>
                            </MDBCol>
                            <MDBCol md="4">
                                <h5 className="title" style = {{marginLeft: 40, textAlign: "center"}}>Links</h5>
                                <ul>
                                    <li className="list-unstyled" style = {{fontSize: 16, textAlign: "center"}}>
                                    <a href="/">Home</a>
                                    </li>
                                    <li className="list-unstyled" style = {{fontSize: 16, textAlign: "center"}}>
                                    <a href="/biography/">Biography</a>
                                    </li>
                                    <li className="list-unstyled" style = {{fontSize: 16, textAlign: "center"}}>
                                    <a href="/famousleader/">Famous Leaders</a>
                                    </li>
                                    <li className="list-unstyled" style = {{fontSize: 16, textAlign: "center"}}>
                                    <a href="/symbols/"> National Symbols </a>
                                    </li>
                                </ul>
                            </MDBCol>
                            <MDBCol md="4">
                                <h5 className="title" style = {{marginLeft: 40, textAlign: "center"}}>Links</h5>
                                <ul>
                                    <li className="list-unstyled" style = {{fontSize: 16, textAlign: "center"}}>
                                    <a href="/economy/">Economy</a>
                                    </li>
                                    <li className="list-unstyled" style = {{fontSize: 16, textAlign: "center"}}>
                                    <a href="/history/">History Of Pakistan</a>
                                    </li>
                                    <li className="list-unstyled" style = {{fontSize: 16, textAlign: "center"}}>
                                    <a href="/features/">Contact Us</a>
                                    </li>
                                    <li className="list-unstyled" style = {{fontSize: 16, textAlign: "center"}}>
                                    <a href="/references/"> References </a>
                                    </li>
                                </ul>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <br/>
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                            <h4 style={{fontFamily: "cambria", fontSize: "20"}}>For further assistance = Contact Us: +974-3117-1928, Email Address: haanianadeem@yahoo.com</h4>
                        </MDBContainer>
                    </div>
          </MDBFooter>
        </Fragment>
        )
    }

}


export default Footer;
