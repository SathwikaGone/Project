import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import NavBars from '../Basic/NavBars'; 

class Registration extends Component {
    render() {
      return (
            <div>
                     <NavBars></NavBars>

                <Form>
                    <Form.Row>
                        <Form.col>
                            <label> Email</label>
                            <input type='text'>Sathwika</input>
                        </Form.col>
                    </Form.Row>
                </Form>
               
            </div>  
      );
    }
  }

 
export default Registration;


