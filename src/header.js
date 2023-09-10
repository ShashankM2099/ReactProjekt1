import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <header>
        <h1>{props.title}</h1>
        <nav>
          {props.navItems.map((items) => {
            return (
              <Link to={items} key={items}>
                {items}
              </Link>
            );
          })}
        </nav>
      </header>
    </div>
  );
}
