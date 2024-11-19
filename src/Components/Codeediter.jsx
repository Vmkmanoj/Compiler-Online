import { Editor } from "@monaco-editor/react";
import { Layout, Select, Button, Row, Col } from "antd";
import { useRef, useState } from "react";
import { CODE_SNIPPETS } from "./language";

const { Header } = Layout;

const codeSnip = Object.entries(CODE_SNIPPETS);

function CodeEditor() {
  const [langage, setLangage] = useState("javascript");
  const [editorValue, setEditorValue] = useState(CODE_SNIPPETS.python); // Initial value
  const editorRef = useRef(null);

  const handleChange = (value) => {
    setLangage(value);
    setEditorValue(CODE_SNIPPETS[value]); // Update editor content based on selected language
  };

  const handleEditorChange = (value) => {
    setEditorValue(value); // Update state with the current editor content
  };

  const handleEditorMount = (editor) => {
    editorRef.current = editor;
  };

  const CodeRun = () => {
    alert(editorRef.current?.getValue());
  };

  const HeaderStyle = {
    color: "white",
    textAlign: "center",
    fontSize: "24px",
    backgroundColor: "#333",
    padding: "10px",
  };

  return (
    <>
      <Row>
        <Col span={6} style={{ backgroundColor: "black", padding: "20px" }}>
          <Header style={HeaderStyle}>Code Editor</Header>
          <Select
            style={{ width: "100%", marginTop: "20px", backgroundColor: "gray" }}
            onChange={handleChange}
            defaultValue="javascript"
            options={codeSnip.map(([key]) => ({ value: key, label: key }))}
          />
          <Button style={{ marginTop: "20px" }} onClick={CodeRun}>
            Run Code
          </Button>
        </Col>
        <Col span={18}>
          <Editor
            height="100vh"
            width="100%"
            language={langage}
            theme="vs-dark"
            defaultLanguage={`//This is ${langage}`}
            value={editorValue} // Bind the editor content
            onChange={handleEditorChange}
            onMount={handleEditorMount}
          />
        </Col>
      </Row>
    </>
  );
}

export default CodeEditor;
