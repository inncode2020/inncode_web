import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", password: "" };
  }
  handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <input type="text" name="userName" onChange={this.handleInput} />
        <br />
        <input type="password" name="password" onChange={this.handleInput} />
        <br />
        {this.state.userName}
        <br />
        {this.state.password}
      </div>
    );
  }
}

export default Login;
