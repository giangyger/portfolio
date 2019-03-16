import React, { Component } from "react";
import "./css/About.css";
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="top-element">
          <h2 class="page-title">About Me</h2>
          <hr class="divider-sm" />
          <p class="para">
            I'm a Full Stack Web/App Developer based in Zurich, Switzerland. I
            develop Web-Applications with HTML, CSS, JavaScript, Bootstrap,
            jQuery, React, NodeJS, MongoDB, Django and Mobile App Development
            for iOS and Android using Swift and Java.
          </p>
          <p class="para">
            At 11 years old i started coding by simply following Youtube
            tutorials e.g about how to clone Flappy Birds. This was the first
            app I wrote. I did it using Objective C in Xcode on my mother's
            laptop. It was really satisfying to see it working on my own iPod
            Touch 4th generation which was running iOS 5. A bit later I really
            started coding on my own by watching Java courses online and reading
            books about it. After I knew the core principles of programming well
            enough I started trying new languages and new fields of programming.
          </p>
          <p class="para">
            I now have 4 years of programing experience. I have made Desktop
            Applications with Java, published my own Mobile Apps in the Play
            Store, built many Websites and Web Applications with frameworks like
            React and even done some Machine Learning/AI stuff like building
            simple neural networks with python.
          </p>
        </div>
      </div>
    );
  }
}
