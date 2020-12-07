import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/markdown/markdown";
import { Controlled as ControlEditor } from "react-codemirror2";

import Editor from "./blocks/Editor";

import "./MainArea.scss";
import { ResizeableR, ResizeableL } from "../Utility/Resizeable";

export default function MainArea() {
  const [mark, setMark] = useState("");

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
        <div className="workspace_codeEditor_code">
          <ControlEditor
            className="codemirror-wrapper"
            onBeforeChange={(editor, data, value) => setMark(value)}
            value={mark}
            options={{
              lineWrapping: true,
              lint: true,
              mode: "markdown",
              theme: "material",
              lineNumbers: true,
            }}
          />
        </div>
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
