import React, { Component } from "react";
import "./css/Contact.css";
export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleName = e => {
    this.setState({ ...this.state, name: e.target.value });
  };
  handleMail = e => {
    this.setState({ ...this.state, email: e.target.value });
  };
  handleMessage = e => {
    this.setState({ ...this.state, message: e.target.value });
  };
  render() {
    return (
      <div className="contact">
        <h2 class="page-title">Contact</h2>
        <hr class="divider-sm" />
        <form action="">
          <label htmlFor="" className="label">
            Name:
          </label>
          <input
            className="input"
            type="text"
            value={this.state.name}
            onChange={this.handleName.bind(this)}
          />
          <label htmlFor="" className="label">
            Email:
          </label>
          <input
            className="input"
            type="email"
            value={this.state.email}
            onChange={this.handleMail.bind(this)}
          />
          <label htmlFor="" className="label">
            Message:
          </label>
          <textarea
            className="area"
            type="text"
            value={this.state.message}
            onChange={this.handleMessage.bind(this)}
          />
          <input type="submit" name="" id="submit" value="Send Message" />
        </form>
      </div>
    );
  }
}
