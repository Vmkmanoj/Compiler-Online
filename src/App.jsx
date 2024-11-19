
import {Flex} from "antd"; 

import Codeediter from "./Components/Codeediter";

import "../src/App.css"

import Output from "./Components/output";

function App() {


  return (
    <>

   <Flex gap="middle" className="fullbox">

        <Codeediter></Codeediter>
        <Output></Output>
   
   </Flex>




    </>
  )
}

export default App
