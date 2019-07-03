import "../styles/styles.sass";
import React, { Component } from "react";
import LinksComponent from "../components/nav";
import NameComponent from "../components/name";

class ContactComponent extends Component {
  render() {
    return (
      <>
        <LinksComponent />
        <section className="section-contact">
          <NameComponent />
        </section>
      </>
    );
  }
}

export default ContactComponent;
