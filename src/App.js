import "./App.css";
import { useState } from "react";
import AddEmployee from "./components/AddEmployee";
import Graphs from "./components/Graphs";

function App() {

  const [employees, setEmployees] = useState([])
  const [showGraphs, setShowGraphs] = useState(false)

  return (
    <div className="App">
      <AddEmployee employees={employees} setEmployees={setEmployees} showGraphs={showGraphs} setShowGraphs={setShowGraphs}/>
      {
        showGraphs && <Graphs />
      }
    </div>
  );
}

export default App;
