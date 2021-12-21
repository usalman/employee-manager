import "./App.css";
import { useState } from "react";
import AddEmployee from "./components/AddEmployee";
import Graphs from "./components/Graphs";

function App() {
  const [employees, setEmployees] = useState([]);
  const [graphView, setGraphView] = useState(false);

  return (
    <div className="App">
      <AddEmployee
        employees={employees}
        setEmployees={setEmployees}
        graphView={graphView}
        setGraphView={setGraphView}
      />
      {graphView && <Graphs employees={employees} />}
    </div>
  );
}

export default App;
