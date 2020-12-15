import React, { useState } from "react";
import Split from "react-split";

import SideBar from "../components/SideBar";
import EditorArea from "../components/EditorArea";
import PreviewArea from "../components/PreviewArea";

import "./MainArea.scss";

export default function MainArea() {
  return (
    <div className="workspace">
      <div className="workspace_activityBar"></div>

      <Split
        gutterSize={5}
        sizes={[20, 40, 40]}
        minSize={[0, 300, 300]}
        className="split_area"
      >
        <SideBar />
        <EditorArea />
        <PreviewArea />
      </Split>
    </div>
  );
}
