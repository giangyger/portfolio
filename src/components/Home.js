import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import LocalizedStrings from "react-localization";

export default function Home(props) {
  let strings = new LocalizedStrings({
    en: {
      h2: "I'm a Full Stack Web/App Developer.",
      sub: "Go To My Portfolio",
      mg: "My Skills",
      c: "Contact",
      am: "About Me"
    },
    de: {
      h2: "Ich bin ein Full Stack Web/App-Entwickler.",
      p: "Zum Portfolio",
      sk: "Fähigkeiten",
      c: "Kontakt",
      am: "Über mich"
    }
  });
  if (window.outerWidth <= 750) {
    return (
      <div>
        <div class="header">
          <div id="a">
            <h3 class="main-header">"Gian Gyger"</h3>
          </div>
          <h2 class="secondary-header">{strings.h2}</h2>
          <Link class="btn" to="/portfolio" style={{ textDecoration: "none" }}>
            {strings.p}
          </Link>

          <hr class="divider" />
          <a class="btn-blue" href="https://github.com/giangyger">
            GitHub
          </a>
          <Link class="btn-blue" to="/skills">
            {strings.sk}
          </Link>
          <Link class="btn-blue" to="/contact">
            {strings.c}
          </Link>
          <Link class="btn-blue" to="/about">
            {strings.am}
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
          <h2 class="secondary-header">{strings.h2}</h2>
          <Link class="btn" to="/portfolio" style={{ textDecoration: "none" }}>
            {strings.p}
          </Link>

          <hr class="divider" />
          <a class="btn-blue" href="https://github.com/giangyger">
            GitHub
          </a>
          <Link class="btn-blue" to="/skills">
            {strings.sk}
          </Link>
          <Link class="btn-blue" to="/contact">
            {strings.c}
          </Link>
          <Link class="btn-blue" to="/about">
            {strings.am}
          </Link>
        </div>
      </div>
    );
  }
}
