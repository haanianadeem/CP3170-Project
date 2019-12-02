import React, { Component, Fragment } from "react";
import "./App.css";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import Divider from "@material-ui/core/Divider";
import { Navbar, Nav, NavDropdown, Button, Carousel } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LinkIcon from "@material-ui/icons/Link";

import Home from "./Home";
import Biography from "./Biography";
import FamousLeader from "./FamousLeader";
import Culture from "./Culture";
import Demographics from "./Demographics";
import Economy from "./Economy";
import Landmarks from "./Landmarks";
import Events from "./Events";
import History from "./History";
import Symbols from "./Symbols";
import Holidays from "./Holidays";
import Features from "./Features";
import References from "./References";

import "./index.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class App extends Component {
  state = {
    value: 0,

    root: { width: 500 },

    imageStyle: {
      textAlign: "center",
      display: "block",
      margin: "auto",
      width: 260,
      height: 260,
      marginTop: 30
    },

    status: false,

    button: {
      fontSize: 15,
      margin: "auto",
      width: 250,
      display: "block",
      color: "black"
    },

    button2: {
      fontSize: 15,
      margin: "auto",
      width: 250,
      display: "block",
      color: "white"
    },

    style2: {
      fontFamily: "cambria",
      fontSize: 20,
      color: "white",
      borderWidth: 2,
      borderColor: "blue",
      borderStyle: "solid",
      marginRight: 10
    },

    style4: {
      fontFamily: "cambria",
      fontSize: 20,
      color: "lightBlue",
      borderWidth: 2,
      borderColor: "red",
      borderStyle: "solid",
      marginRight: 10
    },

    style3: {
      fontFamily: "cambria",
      textAlign: "center",
      width: 215,
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: "lightBlue",
      marginBottom: 10
    },

    showFlag: 0,
    expanded: false,
    nodeId: false,

    root2: {
      height: 216,
      flexGrow: 1,
      maxWidth: 400
    },

    flag: true
  };

  handleStatus = () => {
    this.setState({ status: !this.state.status });
  };

  handleChange = index => {
    this.setState({ showFlag: index });
  };

  handleTheme = () => {
    this.setState({ flag: !this.state.flag });
  };

  render() {
    const drawer = (
      <div
        style={
          this.state.flag
            ? { backgroundColor: "#c4def6" }
            : { backgroundColor: "#8ebeeb" }
        }
      >
        <div style={{ width: 250, textAlign: "center" }}>
          <IconButton onClick={this.handleStatus}>
            <p style={this.state.flag ? { color: "red" } : { color: "black" }}>
              HANIA'S PORTRAIT
            </p>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider />

        <List>
          <ListItem
            button
            component={Link}
            to="/"
            style={{ fontSize: 25, fontFamily: "cambria" }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </List>

        <List>
          <ListItem
            button
            component={Link}
            to="/biography/"
            style={{ fontSize: 25, fontFamily: "cambria" }}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Biography" />
          </ListItem>
        </List>

        <List>
          <ListItem
            button
            component={Link}
            to="/famousleader/"
            style={{ fontSize: 25, fontFamily: "cambria" }}
          >
            <ListItemIcon>
              <ExploreIcon />
            </ListItemIcon>
            <ListItemText primary="Explore Pakistan" />
          </ListItem>
        </List>

        <List>
          <ListItem
            button
            component={Link}
            to="/references/"
            style={{ fontSize: 25, fontFamily: "cambria" }}
          >
            <ListItemIcon>
              <LinkIcon />
            </ListItemIcon>
            <ListItemText primary="References" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <Fragment>
        <Router>
          <div>
            <Navbar
              style={
                this.state.flag
                  ? { backgroundColor: "#332a2a" }
                  : { backgroundColor: "#032538" }
              }
              variant="dark"
            >
              <br />
              <Navbar.Brand>
                <IconButton
                  color="inherit"
                  style={{
                    borderWidth: 2,
                    borderStyle: "solid",
                    borderColor: "black"
                  }}
                  onClick={this.handleStatus}
                >
                  <MenuIcon />
                </IconButton>
              </Navbar.Brand>

              <Nav className="mr-auto">
                <Drawer open={this.state.status}>{drawer}</Drawer>

                <Nav.Link
                  style={
                    this.state.flag ? this.state.style2 : this.state.style4
                  }
                  as={Link}
                  to="/"
                >
                  <strong>Home</strong>
                </Nav.Link>

                <Nav.Link
                  style={
                    this.state.flag ? this.state.style2 : this.state.style4
                  }
                  as={Link}
                  to="/biography/"
                >
                  <strong>Biography</strong>
                </Nav.Link>

                <NavDropdown
                  style={
                    this.state.flag ? this.state.style2 : this.state.style4
                  }
                  as={Link}
                  to="/"
                  title="Explore Pakistan"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/famousleader/"
                    style={this.state.style3}
                  >
                    Biography of Famous Leader
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/culture/"
                    style={this.state.style3}
                  >
                    Culture
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/demographics/"
                    style={this.state.style3}
                  >
                    Demographics
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/economy/"
                    style={this.state.style3}
                  >
                    Economy
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/landmarks/"
                    style={this.state.style3}
                  >
                    Famous Landmarks
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/history/"
                    style={this.state.style3}
                  >
                    History
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/events/"
                    style={this.state.style3}
                  >
                    Important Events
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/symbols/"
                    style={this.state.style3}
                  >
                    National Symbols
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/holidays/"
                    style={this.state.style3}
                  >
                    National Holidays
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/features/"
                    style={this.state.style3}
                  >
                    Natural Features
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  style={
                    this.state.flag ? this.state.style2 : this.state.style4
                  }
                  as={Link}
                  to="/references/"
                >
                  <strong>References</strong>
                </Nav.Link>
              </Nav>
            </Navbar>

            <div
              style={{
                borderColor: "black",
                borderWidth: 2,
                borderStyle: "solid",
                height: 460
              }}

              className="bg"
            >
              <div>
                <img
                  src="/images/logo2.png"
                  alt="This is the Logo"
                  style={this.state.imageStyle}
                />
              </div>

              <br />

              <span>
                <Button style={
                    this.state.flag ? this.state.button : this.state.button2
                  } as={Link} to="/">
                  <strong>GET STARTED</strong>
                </Button>

                <br />

                <Button onClick={this.handleTheme} style={
                    this.state.flag ? this.state.button : this.state.button2
                  }>
                  <strong>CHANGE NAVBAR THEME</strong>
                </Button>
              </span>
            </div>
          </div>
          <br />
          <br />

          <Carousel
            style={{
              margin: "auto",
              borderWidth: 3,
              borderStyle: "solid",
              borderColor: "black",
              width: 2000,
              height: 700
            }}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carousel-6.png"
                alt="First slide"
                style={{ width: 700, height: 700 }}
              />
              <Carousel.Caption>
                <strong>
                  <h3
                    style={{
                      fontFamily: "cambria",
                      fontSize: 50,
                      color: "white"
                    }}
                  >
                    GET A CHANCE TO EXPLORE MY BELOVED COUNTRY PAKISTAN!
                  </h3>
                </strong>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carousel-1.png"
                alt="Third slide"
                style={{ width: 700, height: 700 }}
              />
              <Carousel.Caption>
                <strong>
                  <h3
                    style={{
                      fontFamily: "cambria",
                      fontSize: 50,
                      color: "white"
                    }}
                  >
                    VISIT THE AMAZING AND NATURAL TOURISM SITES OF PAKISTAN!
                  </h3>
                </strong>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carousel-4.png"
                alt="Third slide"
                style={{ width: 700, height: 700 }}
              />
              <Carousel.Caption>
                <strong>
                  <h3
                    style={{
                      fontFamily: "cambria",
                      fontSize: 50,
                      color: "white"
                    }}
                  >
                    CAPTURE THE FAMOUS LANDMARKS OF PAKISTAN IN YOUR CAMERA OR
                    EYES!
                  </h3>
                </strong>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carousel-2.png"
                alt="Third slide"
                style={{ width: 700, height: 700 }}
              />
              <Carousel.Caption>
                <strong>
                  <h3
                    style={{
                      fontFamily: "cambria",
                      fontSize: 50,
                      color: "white"
                    }}
                  >
                    VISIT THE AMAZING AND NATURAL TOURISM SITES OF PAKISTAN!
                  </h3>
                </strong>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carousel-5.png"
                alt="Third slide"
                style={{ width: 700, height: 700 }}
              />
              <Carousel.Caption>
                <strong>
                  <h3
                    style={{
                      fontFamily: "cambria",
                      fontSize: 50,
                      color: "white"
                    }}
                  >
                    FILL YOUR STOMACH WITH OUR DELICIOUS AND MOUTH WATERING
                    DISHES!
                  </h3>
                </strong>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carousel-3.png"
                alt="Third slide"
                style={{ width: 700, height: 700 }}
              />
              <Carousel.Caption>
                <strong>
                  <h3
                    style={{
                      fontFamily: "cambria",
                      fontSize: 50,
                      color: "white"
                    }}
                  >
                    VISIT THE AMAZING AND NATURAL TOURISM SITES OF PAKISTAN!
                  </h3>
                </strong>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carousel-7.png"
                alt="Third slide"
                style={{ width: 700, height: 700 }}
              />
              <Carousel.Caption>
                <strong>
                  <h3
                    style={{
                      fontFamily: "cambria",
                      fontSize: 50,
                      color: "white"
                    }}
                  >
                    BUY AND FILL YOUR HANDS WITH BEAUTIFUL AND COLORFUL BANGLES
                    OF PAKISTAN!
                  </h3>
                </strong>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <br />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/biography/" component={Biography} />
            <Route path="/famousleader/" component={FamousLeader} />
            <Route path="/culture/" component={Culture} />
            <Route path="/demographics/" component={Demographics} />
            <Route path="/economy/" component={Economy} />
            <Route path="/landmarks/" component={Landmarks} />
            <Route path="/history/" component={History} />
            <Route path="/events/" component={Events} />
            <Route path="/symbols/" component={Symbols} />
            <Route path="/holidays/" component={Holidays} />
            <Route path="/features/" component={Features} />
            <Route path="/references/" component={References} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
