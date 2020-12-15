import React from "react";

import Menu from "./blocks/Menu";

import "./TitleBar.scss";

export default function TitleBar() {
  return (
    // Here hold the title bar

    <div className="titlebar">
      <div className="titlebar_title">Markify</div>
      <div className="titlebar_menu">
        <Menu />
      </div>
      <div className="titlebar_window-control">
        <div id="minimize">
          <span>-</span>
        </div>
        <div id="maximize">
          <span>+</span>
        </div>
        <div id="close">
          <span>&times;</span>
        </div>
      </div>
    </div>
  );
}
