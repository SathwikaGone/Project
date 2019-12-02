import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../CSSfiles/Home.css';




class Footer extends Component {
    render() {
      return (
              
        <div className="foote">
          <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <h4>Welcome to footer</h4>
                    <h4>copied</h4>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h4>Welcome to footer</h4>
                    <h4>copied</h4>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h4>Welcome to footer</h4>
                    <h4>copied</h4>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h4>Welcome to footer</h4>
                    <h4>copied</h4>
                </div>
            </div>
          </div>
        </div>


      );
    }
}
export default Footer;