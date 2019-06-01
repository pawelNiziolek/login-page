import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Strona</b> logowania/autoryzacji dzięki
              <span style={{ fontfamily: "monospace" }}>MERN </span>stack
            </h4>
            <p className="flow-text grey-text text-darken-2">
              Login page stworzona z użyciem autentykacji dzięki passport i JWT
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-largewaves-effect waves-light hoverable blue accent-3"
              >
                Rejestracja
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
                className="btn btn-largewaves-effects white black-text"
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
