import "../styles/components/nav.sass";
import React, { Component } from "react";
import Link from "next/link";

class LinksComponent extends Component {
  render() {
    return (
      <div className="side-nav">
        <div>
          <a target="_blank" href="https://github.com/rohithcis">
            <i className="fab fa-github" />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://www.linkedin.com/in/rohithbalaji/">
            <i className="fab fa-linkedin" />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://www.facebook.com/RohithCIS">
            <i className="fab fa-facebook" />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://twitter.com/lordrohith">
            <i className="fab fa-twitter" />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://www.instagram.com/rohith.cis/">
            <i className="fab fa-instagram" />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://www.quora.com/profile/Rohith-Balaji">
            <i className="fab fa-quora" />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://steamcommunity.com/id/rohithcis">
            <i className="fab fa-steam" />
          </a>
        </div>
      </div>
    );
  }
}

export default LinksComponent;
