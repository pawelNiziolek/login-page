import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
  };
  render() {
    const { errors, email, password } = this.state;
    return (
      <div className="container">
        <div className="row" style={{ marginTop: "4rem" }}>
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i>Wróć do
              strony głównej
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Zaloguj się</b>
              </h4>
              <p className="grey-text text-darken-1">
                Nie posiadasz konta? <Link to="/register">Zarejestruj się</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  type="email"
                  onChange={this.onChange}
                  value={email}
                  id="email"
                  error={errors.email}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  type="password"
                  onChange={this.onChange}
                  value={password}
                  id="password"
                  error={errors.password}
                />
                <label htmlFor="password">Hasło</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Zaloguj się
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
