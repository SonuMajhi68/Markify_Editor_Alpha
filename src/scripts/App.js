import React from "react";

import TitleBar from "./components/TitleBar";
import MainArea from "./layouts/MainArea";
import StatusBar from "./components/StatusBar";

import "../scripts/Abstract/BaseStyle.scss";

export default function App() {
  return (
    <div>
      <TitleBar />
      <MainArea />
      <StatusBar />
    </div>
  );
}
