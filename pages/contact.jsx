import "../styles/styles.sass";
import React, { Component } from "react";
import { sendMail } from "../middleware/mailer";
import LinksComponent from "../components/nav";
import NameComponent from "../components/name";
import FooterComponent from "../components/footer";

class ContactComponent extends Component {
  state = { name: "", email: "", message: "", showMessage: false };

  handleFormChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    sendMail(this.state, done => {
      this.setState({ name: "", email: "", message: "", showMessage: true });
      console.log(done);
    });
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
    const { name, email, message, showMessage } = this.state;

    return (
      <>
        <LinksComponent />
        <section className="section-contact">
          <NameComponent />
          <div className="contact-form">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={name}
                onChange={this.handleFormChange}
              />
              <input
                type="email"
                placeholder="E-Mail"
                name="email"
                autoComplete="email"
                value={email}
                onChange={this.handleFormChange}
              />
              <textarea
                rows="5"
                placeholder="Message"
                name="message"
                value={message}
                onChange={this.handleFormChange}
              />
              {this.state.showMessage && (
                <span style={{ color: "#000" }}>Message Sent!</span>
              )}
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
