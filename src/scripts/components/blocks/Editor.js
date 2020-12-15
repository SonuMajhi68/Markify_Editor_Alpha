import React from "react";

import "./Editor.scss";

// Here stay the logic for scroll event
const horizontalScroll = (e) => {
  let bar = document.getElementsByClassName("tabs")[0];
  if (e.deltaY > 0) bar.scrollLeft += 30;
  else bar.scrollLeft -= 30;
};

export default function Editor() {
  return (
    // Over here new tab will be added and revmove

    <ul className="tabs" onWheel={(e) => horizontalScroll(e)}>
      <li className="active">some shit</li>
      <li>some shit</li>
      <li>some shit</li>
      <li>some shit</li>
      <li>some shit</li>
      <li>some shit</li>
      <li>some shit</li>
      <li className="addNew">+</li>
    </ul>
  );
}
