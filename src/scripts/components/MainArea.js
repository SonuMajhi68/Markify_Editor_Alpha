import React from "react";

import Editor from "./blocks/Editor";
import Menu from "./blocks/Menu";

import "./MainArea.scss";
import { ResizeableR, ResizeableL } from "../Utility/Resizeable";

export default function MainArea() {
  return (
    <div className="workspace">
      <div className="workspace_activityBar"></div>
      <div className="workspace_sideBar">
        <div
          className="workspace_sideBar_resizable"
          onMouseDown={() =>
            ResizeableR(
              document.getElementsByClassName("workspace_sideBar_resizable")[0]
            )
          }
        ></div>
      </div>
      <div className="workspace_codeEditor">
        <div className="workspace_codeEditor_tabs">
          <Editor />
        </div>
        <div className="workspace_codeEditor_code"></div>
      </div>
      <div className="workspace_preview">
        <div
          className="workspace_preview_resizable"
          onMouseDown={() =>
            ResizeableL(
              document.getElementsByClassName("workspace_preview_resizable")[0]
            )
          }
        ></div>
      </div>
    </div>
  );
}
