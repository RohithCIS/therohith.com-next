import "../styles/styles.sass";
import React, { Component } from "react";
import LinksComponent from "../components/nav";
import NameComponent from "../components/name";
import FooterComponent from "../components/footer";

class ContactComponent extends Component {
  state = { name: "", email: "", message: "" };

  handleFormChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

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
        <section className="section-contact">
          <NameComponent />
          <div className="contact-form">
            <form>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <input
                type="email"
                placeholder="E-Mail"
                name="email"
                autoComplete="email"
              />
              <textarea rows="5" placeholder="Message" name="message" />
              <div>
                <button type="submit">Send</button>
              </div>
            </form>
            <div className="large-btn-flex">
              <div
                className="large-btn"
                onClick={() => {
                  this.handleLink("tel:+918110960609");
                }}
              >
                <i className="fas fa-phone" />
              </div>
              <div
                className="large-btn"
                onClick={() => {
                  this.handleLink("mailto:contact@therohith.com");
                }}
              >
                <i className="fas fa-envelope" />
              </div>
            </div>
          </div>
          <FooterComponent />
        </section>
      </>
    );
  }
}

export default ContactComponent;
