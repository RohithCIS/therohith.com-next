import "../styles/styles.sass";
import React, { Component } from "react";
import Link from "next/link";
import LinksComponent from "../components/nav";
import NameComponent from "../components/name";
import FooterComponent from "../components/footer";

class HomeComponent extends Component {
  handleLink = url => {
    console.log(url);
  };

  componentDidMount() {
    this.handleLink = url => {
      window.open(url, "_blank");
    };
  }

  render() {
    return (
      <>
        <LinksComponent />
        <section className="section-intro">
          <NameComponent />

          <div className="circle-nav-container">
            <div className="circle-nav">
              <svg width="240" height="240" xmlns="http://www.w3.org/2400/svg">
                <g>
                  <title>Resume</title>
                  <text x="0" y="110" fill="#fff" className="circle-text">
                    Resume
                  </text>
                  <line
                    x1="0"
                    y1="120"
                    x2="150"
                    y2="120"
                    className="circle-line"
                  />
                  <line
                    x1="150"
                    y1="120"
                    x2="200"
                    y2="170"
                    className="circle-line"
                  />
                  <circle
                    className="circle-highlight"
                    r="100"
                    cy="260"
                    cx="220"
                    strokeWidth="40"
                    stroke="rgb(233, 30, 99)"
                    fill="none"
                  />
                </g>
              </svg>
              <svg
                width="240"
                height="240"
                xmlns="http://www.w3.org/2400/svg"
                onClick={() => {
                  this.handleLink("https://blog.therohith.com");
                }}
              >
                <g>
                  <title>Blog</title>
                  <text x="170" y="150" fill="#fff" className="circle-text">
                    Blog
                  </text>
                  <line
                    x1="120"
                    y1="160"
                    x2="240"
                    y2="160"
                    className="circle-line"
                  />
                  <line
                    x1="60"
                    y1="200"
                    x2="120"
                    y2="160"
                    className="circle-line"
                  />
                  <circle
                    className="circle_animation"
                    r="100"
                    cy="260"
                    cx="-30"
                    strokeWidth="20"
                    stroke="#fff"
                    fill="none"
                  />
                </g>
              </svg>
            </div>
            <div className="circle-nav">
              <svg width="240" height="240" xmlns="http://www.w3.org/2400/svg">
                <g>
                  <title>About</title>
                  <text x="20" y="130" fill="#fff" className="circle-text">
                    About
                  </text>
                  <line
                    x1="20"
                    y1="140"
                    x2="140"
                    y2="140"
                    className="circle-line"
                  />
                  <line
                    x1="180"
                    y1="110"
                    x2="140"
                    y2="140"
                    className="circle-line"
                  />
                  <circle
                    className="circle_animation"
                    r="100"
                    cy="10"
                    cx="220"
                    strokeWidth="20"
                    stroke="#fff"
                    fill="none"
                  />
                </g>
              </svg>
              <Link href="/contact">
                <svg
                  width="240"
                  height="240"
                  xmlns="http://www.w3.org/2400/svg"
                >
                  <g>
                    <title>Contact</title>
                    <text x="110" y="110" fill="#fff" className="circle-text">
                      Contact
                    </text>
                    <line
                      x1="100"
                      y1="120"
                      x2="240"
                      y2="120"
                      className="circle-line"
                    />
                    <line
                      x1="100"
                      y1="120"
                      x2="40"
                      y2="70"
                      className="circle-line"
                    />
                    <circle
                      className="circle_animation"
                      r="100"
                      cy="10"
                      cx="-30"
                      strokeWidth="20"
                      stroke="#fff"
                      fill="none"
                    />
                  </g>
                </svg>
              </Link>
            </div>
          </div>
          <FooterComponent />
        </section>
      </>
    );
  }
}

export default HomeComponent;
