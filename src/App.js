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
  const [muhasebeInfo, setMuhasebeInfo] = useState([]);
  const [analizInfo, setAnalizInfo] = useState([]);
  const [yazilimInfo, setYazilimInfo] = useState([]);
  const [yonetimInfo, setYonetimInfo] = useState([]);

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
        setMuhasebeInfo={setMuhasebeInfo}
        setAnalizInfo={setAnalizInfo}
        setYazilimInfo={setYazilimInfo}
        setYonetimInfo={setYonetimInfo}
      />
      {showGraphs && (
        <Graphs
          maleInfo={maleInfo}
          femaleInfo={femaleInfo}
          destekInfo={destekInfo}
          muhasebeInfo={muhasebeInfo}
          analizInfo={analizInfo}
          yazilimInfo={yazilimInfo}
          yonetimInfo={yonetimInfo}
        />
      )}
    </div>
  );
}

export default App;
