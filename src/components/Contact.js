import React, { Component } from "react";
import "./css/Contact.css";
import LocalizedStrings from "react-localization";

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
    let strings = new LocalizedStrings({
      en: {
        sub: "Send Message",
        c: "Contact",
        m: "Message:",
        em: "Or via Email: "
      },
      de: {
        sub: "Senden",
        c: "Kontakt",
        m: "Nachricht:",
        em: "Oder per Email: "
      }
    });

    return (
      <div className="">
        <i
          className="fa fa-arrow-left back fa-4x"
          onClick={() => {
            this.props.history.push("/");
          }}
        />
        <div className="contact">
          <h2 class="page-title">{strings.c}</h2>
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
              {strings.m}
            </label>
            <textarea
              className="area"
              type="text"
              value={this.state.message}
              onChange={this.handleMessage.bind(this)}
            />
            <input type="submit" name="" id="submit" value={strings.sub} />
          </form>
          <div
            style={{
              textAlign: "center",
              fontWeight: "400",
              fontSize: "20px",
              color: "#333s"
            }}
          >
            {strings.em}
            <a
              style={{ color: "rgb(88, 90, 120)" }}
              href="mailto:gian.gyger@gmail.com"
            >
              gian.gyger@gmail.com
            </a>
          </div>
        </div>
      </div>
    );
  }
}
