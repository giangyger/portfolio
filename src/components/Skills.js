import React, { Component } from "react";
import "./css/Skills.css";
export default class Skills extends Component {
  render() {
    return (
      <div class="top-element">
        <h2 class="page-title">Skills</h2>
        <hr class="divider-sm" />

        <div className="card">
          <h3 className="list-title">Front-End</h3>
          <hr className="ld" />
          <ul className="front-end">
            <li className="item">HTML</li>
            <li className="item">CSS</li>
            <li className="item">JavaScript</li>
            <li className="item">jQuery</li>
            <li className="item">React</li>
            <li className="item">Bootstrap</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="list-title">Back-End</h3>
          <hr className="ld" />
          <ul className="back-end">
            <li className="item">NodeJS</li>
            <li className="item">Express</li>
            <li className="item">MongoDB</li>
            <li className="item">Postman</li>
            <li className="item">Apache</li>
            <li className="item">Django</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="list-title">Other</h3>
          <hr className="ld" />
          <ul className="other">
            <li className="item">Linux</li>
            <li className="item">Swift</li>
            <li className="item">Java</li>
            <li className="item">Python</li>
            <li className="item">Blender</li>
            <li className="item">Photoshop</li>
          </ul>
        </div>
      </div>
    );
  }
}
