import { Editor } from "@monaco-editor/react";
import { Flex, Layout, Select,Button } from "antd";
import { useRef, useState } from "react";


const { Header } = Layout;

function Codeediter() {
  const [langage, setLangage] = useState("javascript");

  const editerRef = useRef(null)

  const handleChange = (value) => {
    setLangage(value);
  };

  const value = (value, event)=>{

        editerRef.current = value

  }

  const CodeRun= ()=>{
    alert(editerRef.current.getValue());
  }

  const HeaderStyle = {
    color: "white",
    textAlign: "center",
    fontSize: "24px",
    backgroundColor: "#333",
    padding: "10px",
  };

  return (
    <>

    <Flex horizontal="true" style={{}}>
      <Layout style={{ backgroundColor: "gray",  margin:20}}>
        <Header style={HeaderStyle}>Code Editor</Header>
        <Select
          style={{ width: 200, margin: "20px" ,backgroundColor:"gray"}}
          onChange={handleChange}
          defaultValue="javascript"
          options={[
            { value: "javascript", label: "JAVASCRIPT" },
            { value: "java", label: "JAVA" },
            { value: "python", label: "PYTHON" },
            { value: "php", label: "PHP" },
          ]}
        />
      </Layout>

      <Layout style={{padding:10}}>
        <Editor height="100vh" width="100vh" onChange={value}  language={langage} theme="vs-dark" defaultValue="// some comment"/>
      </Layout>

      <Button onClick={CodeRun}>Run code</Button>

      </Flex>
    </>
  );
}

export default Codeediter;
