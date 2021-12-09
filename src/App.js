import "./App.css";
import { useState } from "react";
import AddEmployee from "./components/AddEmployee";
import Graphs from "./components/Graphs";

function App() {
  const [employees, setEmployees] = useState([]);
  const [showGraphs, setShowGraphs] = useState(false);
  const [maleInfo, setMaleInfo] = useState([]);
  const [femaleInfo, setFemaleInfo] = useState([]);

  return (
    <div className="App">
      <AddEmployee
        employees={employees}
        setEmployees={setEmployees}
        showGraphs={showGraphs}
        setShowGraphs={setShowGraphs}
        setMaleInfo={setMaleInfo}
        setFemaleInfo={setFemaleInfo}
      />
      {showGraphs && <Graphs maleInfo={maleInfo} femaleInfo={femaleInfo} />}
    </div>
  );
}

export default App;
