import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
export default function Home(props) {
  if (window.outerWidth <= 750) {
    return (
      <div>
        <div class="header">
          <div id="a">
            <h3 class="main-header">"Gian Gyger"</h3>
          </div>
          <h2 class="secondary-header">I'm a Full Stack Web/ App Developer.</h2>
          <Link class="btn" to="/portfolio" style={{ textDecoration: "none" }}>
            Go To My Portfolio
          </Link>

          <hr class="divider" />
          <a class="btn-blue" href="https://github.com/giangyger">
            GitHub
          </a>
          <Link class="btn-blue" to="/skills">
            My Skills
          </Link>
          <Link class="btn-blue" to="/contact">
            Contact
          </Link>
          <Link class="btn-blue" to="/about">
            About Me
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div class="header">
          <div id="a">
            <h3 class="main-header">{'{ "Gian Gyger" }'}</h3>
          </div>
          <h2 class="secondary-header">I'm a Full Stack Web/App Developer.</h2>
          <Link class="btn" to="/portfolio" style={{ textDecoration: "none" }}>
            Go To My Portfolio
          </Link>

          <hr class="divider" />
          <a class="btn-blue" href="https://github.com/giangyger">
            GitHub
          </a>
          <Link class="btn-blue" to="/skills">
            My Skills
          </Link>
          <Link class="btn-blue" to="/contact">
            Contact
          </Link>
          <Link class="btn-blue" to="/about">
            About Me
          </Link>
        </div>
      </div>
    );
  }
}
