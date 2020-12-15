import React from "react";

import "./Editor.scss";

export default function Editor() {
  return (
    // Over here new tab will be added and revmove

    <ul className="tabs">
      <li className="active">some shit</li>
      <li>some shit</li>
      <li>some shit</li>
      <li>some shit</li>
      <li>some shit</li>
      <li className="addNew">+</li>
    </ul>
  );
}
