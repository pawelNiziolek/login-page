import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Projekt</b> w budowie{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> login page
            </h4>
            <p className="flow-text grey-text text-darken-1">
              ... give me a time ...
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Zarejestruj się
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large  waves-light hoverable waves-effect white black-text"
              >
                Zaloguj się
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
