import React, { Component } from "react";
import "./css/Skills.css";
import LocalizedStrings from "react-localization";
export default class Skills extends Component {
  render() {
    let strings = new LocalizedStrings({
      en: {
        sk: "Skills"
      },
      de: {
        sk: "Fähigkeiten"
      }
    });

    return (
      <div class="con1">
        <i
          className="fa fa-arrow-left back fa-4x"
          onClick={() => {
            this.props.history.push("/");
          }}
        />

        <h2 class="page-title">{strings.sk}</h2>
        <hr class="divider-sm" />

        <div className="card">
          <h3 className="list-title">Front-End</h3>
          <hr className="ld" />
          <ul className="front-end">
            <div className="pack3">
              <li className="item">HTML</li>
              <img src="./img/icons/html.png" />
              <li className="item">CSS</li>
              <img src="./img/icons/css.png" />
              <li className="item">JavaScript</li>
              <img src="./img/icons/js.png" class="i3" />
            </div>
            <div className="pack3">
              <li className="item">jQuery</li>
              <img src="./img/icons/jquery.png" />
              <li className="item">React</li>
              <img src="./img/icons/react.png" />
              <li className="item">Bootstrap</li>
              <img src="./img/icons/bs.png" />
            </div>
          </ul>
        </div>
        <div className="card">
          <h3 className="list-title">Back-End</h3>
          <hr className="ld" />
          <ul className="back-end">
            <div className="pack3">
              <li className="item">NodeJS</li>
              <img src="./img/icons/node.png" />
              <li className="item">Express</li>
              <img src="./img/icons/express.png" />
              <li className="item">MongoDB</li>
              <img src="./img/icons/mongo.png" class="i3" />
            </div>
            <div className="pack3">
              <li className="item">Postman</li>
              <img src="./img/icons/postman.png" />
              <li className="item">Apache</li>
              <img src="./img/icons/apache.png" />
              <li className="item">Django</li>
              <img src="./img/icons/django.png" />
            </div>
          </ul>
        </div>
        <div className="card">
          <h3 className="list-title">Other</h3>
          <hr className="ld" />
          <ul className="other">
            <div className="pack3">
              <li className="item">Linux</li>
              <img src="./img/icons/linux.png" />
              <li className="item">Swift</li>
              <img src="./img/icons/swift.png" />
              <li className="item">Java</li>
              <img src="./img/icons/java.png" class="i3" />
            </div>
            <div className="pack3">
              <li className="item">Python</li>
              <img src="./img/icons/python.png" />
              <li className="item">Blender</li>
              <img src="./img/icons/blender.png" />
              <li className="item">Photoshop</li>
              <img src="./img/icons/ps.png" />
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
