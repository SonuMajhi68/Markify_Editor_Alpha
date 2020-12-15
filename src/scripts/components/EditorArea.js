import React, { useState } from "react";
import { Controlled as ControlEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/markdown/markdown";

import Editor from "../components/blocks/Editor";

import "./EditorArea.scss";

export default function EditorArea() {
  const [mark, setMark] = useState("");
  return (
    <div className="workspace_codeEditor">
      <div
        className="workspace_codeEditor_tabs"
        onScroll={() => console.log("hello")}
      >
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
  );
}
