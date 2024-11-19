import { Col, Flex, Row } from "antd";
import excuteCode from "./Api";
import { useState } from "react";


function Output({ code, langage }) {
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);

  console.log(code);


  
  const CodeRun = async () => {

    

    if (!langage) {
      setError("Please select a language.");
      return;
    }

    setError(null); // Reset errors before the API call
    setOutput("Running..."); // Temporary placeholder for UX

    try {
      const result = await excuteCode(code, langage);

    //   console.log(code)

    //   console.log(result)

      if (result.stdout) {
        setOutput(result.stdout); // Display standard output
      } else if (result.stderr) {
        setOutput(`Error: ${result.stderr}`); // Display standard error
      } else {
        setOutput("No output received.");
      }
    } catch (err) {
      setError("An error occurred while executing the code.");
      setOutput(null);
    }
  };

  return (
    <Flex vertical="true">
    <Row
      style={{
        height: "800px",
        width: "700px",
        backgroundColor: "#1c2730",
        padding: "20px",
        border: "",
        overflow: "auto",
      }}
    ><Col>
    <button
        onClick={CodeRun}
        style={{
          backgroundColor: "#007acc",
          color: "white",
          height:"30px",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Run Code
      </button></Col>
        
      <Col>
      <div style={{ color: "white", marginBottom: "20px" }}>
        <h3>Output:</h3>
        {output && <pre style={{ color: "#00ff00" }}>{output}</pre>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div></Col>
      
      
    </Row>
    </Flex>
  );
}



export default Output ;

