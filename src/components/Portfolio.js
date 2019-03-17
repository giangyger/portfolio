import React, { Component } from "react";
import "./css/Portfolio.css";
import LocalizedStrings from "react-localization";

export default class Portfolio extends Component {
  render() {
    let strings = new LocalizedStrings({
      en: {
        h2: "Projects"
      },
      de: {
        h2: "Projekte"
      }
    });
    return (
      <div>
        <i
          className="fa fa-arrow-left back fa-4x"
          onClick={() => {
            this.props.history.push("/");
          }}
        />
        <div class="top-element">
          <h2 class="page-title">{strings.h2}</h2>
          <hr class="divider-sm" />
          <div className="images">
            <div className="imgbox" id="i1" />

            <div className="imgbox" id="i2" />
          </div>
        </div>
      </div>
    );
  }
}
