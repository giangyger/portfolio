import React, { Component } from "react";
import "./css/About.css";
import LocalizedStrings from "react-localization";

export default class About extends Component {
  render() {
    let strings = new LocalizedStrings({
      en: {
        p1:
          "I'm a Full Stack Web/App Developer based in Zurich, Switzerland. Idevelop Web-Applications with HTML, CSS, JavaScript, Bootstrap, jQuery, React, NodeJS, MongoDB, Django and Mobile App Developmentfor iOS and Android using Swift and Java.",
        p2:
          "At 11 years old i started coding by simply following Youtubetutorials e.g about how to clone Flappy Birds. This was the firstapp I wrote. I did it using Objective C in Xcode on my mother'slaptop. It was really satisfying to see it working on my own iPod Touch 4th generation which was running iOS 5. A bit later I really started coding on my own by watching Java courses online and readingbooks about it. After I knew the core principles of programming wellenough I started trying new languages and new fields of programming.",
        p3:
          "I now have 4 years of programing experience. I have made Desktop Applications with Java, published my own Mobile Apps in the PlayStore, built many Websites and Web Applications with frameworks like React and even done some Machine Learning/AI stuff like buildingsimple neural networks with python.",
        am: "About Me"
      },
      de: {
        p1:
          "Ich bin ein Full Stack Web/App-Entwickler von Zürich. Ich entwlickle Web-Applikationen mit HTML, CSS Javascipt, Bootstrap, jQuery, React, NodeJS, MongoDB, Django und Mobile Apps für iOS und Android mit Swift und Java",
        p2:
          "Mit 11 Jahren fing ich mit dem Programmieren an. Ich schrieb iPhone-Apps, indem ich den Code aus Youtube-Tutorials kopierte. Die erste App, die ich so schrieb war Flappy Birds. Ich benutzte Objective C und es war ein tolles Gefühl, die App auf meinem eigenen iPod laufen zu sehen. Wenig später fing ich mit dem richtigen Programmiern an, indem ich Online-Tutorials schaute und Bücher las. Nachdem ich die Grundlagen der Programmierung kannte, begann ich, neue Sprachen zu lernen und neue Gebiete der Programmierung zu entdecken.",
        p3:
          "Ich habe nun 4 Jahre Programmiererfahrung. Bereits habe ich Despktopanwendungen mit Java geschrieben, meine eigenen Apps im PlayStore veröffentlicht, viele Webseiten und Web Apps mit Frameworks wie React geschrieben, und mich sogar ein wenig mit Machine Learning befasst, wie man eigene Neuronale Netzwerke entwickelt.",
        am: "Über mich"
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
        <div class="con atop">
          <h2 class="page-title">{strings.am}</h2>
          <hr class="divider-sm" />

          <p class="para">{strings.p1}</p>
          <img className="portrait" src="./img/portrait.jpg" />
          <p class="para  para1">{strings.p2}</p>
          <p class="para">{strings.p3}</p>
        </div>
      </div>
    );
  }
}
