import React from "react";
import AceEditor from "react-ace";

export default function CodeEditor(props) {
    return (
        <AceEditor
            value={props.value}
            mode="javascript"
            theme="xcode"
        />
    );
}