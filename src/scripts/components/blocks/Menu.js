import React from "react";

import "./Menu.scss";

export default function Menu() {
  function myFunction(elem) {
    let men = document.getElementsByClassName("submenu");
    for (let i = 0; i < men.length; i++) {
      let openDropdown = men[i];
      if (openDropdown != elem)
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
    }

    elem.classList.toggle("show");

    window.onclick = (event) => {
      if (event.target !== elem.parentElement) {
        if (elem.classList.contains("show")) elem.classList.remove("show");
      }
    };
  }
  return (
    <ul className="mainmenu">
      <li
        className="menu"
        onClick={() =>
          myFunction(
            document.getElementsByClassName("menu")[0].firstElementChild
          )
        }
      >
        File
        <ul className="submenu">
          <li>New File</li>
          <li>Open File</li>
          <li>Open Folder</li>
          <li>Save</li>
          <li>Save As</li>
          <li>Save All</li>
          <li>Exit</li>
        </ul>
      </li>
      <li
        className="menu"
        onClick={() =>
          myFunction(
            document.getElementsByClassName("menu")[1].firstElementChild
          )
        }
      >
        Edit
        <ul className="submenu">
          <li>Undo</li>
          <li>Redo</li>
          <li>Cut</li>
          <li>Copy</li>
          <li>Paste</li>
          <li>Find</li>
          <li>Repalce</li>
        </ul>
      </li>
      <li
        className="menu"
        onClick={() =>
          myFunction(
            document.getElementsByClassName("menu")[2].firstElementChild
          )
        }
      >
        View
        <ul className="submenu">
          <li>Fullscreen</li>
          <li>Zen Mode</li>
          <li>Show Activity Bar</li>
          <li>Show Side Bar</li>
          <li>Show Preview Bar</li>
          <li>Show Status Bar</li>
        </ul>
      </li>
      <li
        className="menu"
        onClick={() =>
          myFunction(
            document.getElementsByClassName("menu")[3].firstElementChild
          )
        }
      >
        Help
        <ul className="submenu">
          <li>Welcome</li>
          <li>Guide</li>
          <li>Shortcut</li>
          <li>About</li>
        </ul>
      </li>
    </ul>
  );
}
