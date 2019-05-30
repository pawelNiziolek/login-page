import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log(newUser);
  };

  render() {
    const { errors, name, email, password, password2 } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i>Wróć do
              strony glównej
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Zarejestruj się </b>poniżej
              </h4>
              <p className="grey-text text-darken-1">
                Posiadasz już konto? <Link to="/login">Zaloguj się</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  type="text"
                  onChange={this.onChange}
                  value={name}
                  id="name"
                  error={errors.name}
                />
                <label htmlFor="name">Imię</label>
              </div>
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
              <div className="input-field col s12">
                <input
                  type="password"
                  onChange={this.onChange}
                  value={password2}
                  id="password2"
                  error={errors.password2}
                />
                <label htmlFor="password2">Powtórz hasło</label>
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
                  Zarejestruj się
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
