import "../styles/styles.sass";
import React, { Component } from "react";
import LinksComponent from "../components/nav";
import NameComponent from "../components/name";
import FooterComponent from "../components/footer";

class ContactComponent extends Component {
  handleLink = () => {
    console.log("Init");
  };

  componentDidMount() {
    this.handleLink = () => {
      history.back();
    };
  }

  render() {
    return (
      <>
        <LinksComponent />
        <section className="section-about">
          <NameComponent />
          <div>
            <p>
              I am an Electronics Engineer by qualification and a Computer
              Engineer by profession. I like to work with all things digital and
              love learning new stuff constantly. Automating things is a hobby
              and I find AI / Machine Learning intriguing too.
            </p>
            <p>
              I have quite a lot of experience in Web and Native software
              development and I continuously experiment with the latest
              technologies as well.
            </p>
            <p>
              Video games are a good pass time for me. Stories are best told in
              a video game than in any other format. I'd rather play the movie
              than watch it. My all time favourite is Halo and I mostly prefer
              first person shooter and real time strategy games to any other.
              Favourite RTS is Age of Empires 2.
            </p>
            <p>
              Most important of all, I am an open-source enthusiast, I love
              everything open-source. Linux is my OS of choice, VS Code, my
              editor of choice. Do check out my blog.
            </p>
            <p>Contact me if you'd like to interest me in any way.</p>
            <br />
            <a
              onClick={() => {
                this.handleLink();
              }}
            >
              <i className="fas fa-arrow-left" /> Back
            </a>
          </div>
          <FooterComponent />
        </section>
      </>
    );
  }
}

export default ContactComponent;
