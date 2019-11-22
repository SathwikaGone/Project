import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Image, Button } from 'react-bootstrap';
import '../CSSfiles/Home.css';
class Home extends Component{
    render(){
        return(
            <Grid>
                <Jumbotron>
                    <h2>Welcome</h2>
                    <p>Home page</p>
                </Jumbotron>
                <Link to="/about">
                    <Button bsStyle="primary">press</Button>
                </Link>
            </Grid>
        );

    }
}
export default Home;