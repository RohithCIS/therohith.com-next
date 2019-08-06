import "../styles/components/name.sass";
import React, { Component } from "react";
import Link from "next/link";

class NameComponent extends Component {
  render() {
    return (
      <Link href="/">
        <span className="name-span">
          rohith
          <br />
          BALAJI
        </span>
      </Link>
    );
  }
}

export default NameComponent;
