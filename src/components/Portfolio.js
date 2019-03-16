import React, { Component } from "react";
import "./css/Portfolio.css";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <div class="top-element">
          <h2 class="page-title">Projects</h2>
          <hr class="divider-sm" />
          <div className="images">
            <div className="imgbox" id="i1">
              <img src="img/2.jpg" alt="" />
            </div>

            <div className="imgbox" id="i2">
              <img src="img/1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
