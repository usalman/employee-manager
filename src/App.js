import "./App.css";
import { useState } from "react";
import AddEmployee from "./components/AddEmployee";
import Graphs from "./components/Graphs";

function App() {
  const [employees, setEmployees] = useState([]);
  const [showGraphs, setShowGraphs] = useState(false);
  const [maleInfo, setMaleInfo] = useState([]);
  const [femaleInfo, setFemaleInfo] = useState([]);
  const [destekInfo, setDestekInfo] = useState([]);

  console.log(destekInfo);
  return (
    <div className="App">
      <AddEmployee
        employees={employees}
        setEmployees={setEmployees}
        showGraphs={showGraphs}
        setShowGraphs={setShowGraphs}
        setMaleInfo={setMaleInfo}
        setFemaleInfo={setFemaleInfo}
        setDestekInfo={setDestekInfo}
      />
      {showGraphs && (
        <Graphs
          maleInfo={maleInfo}
          femaleInfo={femaleInfo}
          destekInfo={destekInfo}
        />
      )}
    </div>
  );
}

export default App;
