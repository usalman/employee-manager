import "./App.css";
import { useState } from "react";
import AddEmployee from "./components/AddEmployee";
import Graphs from "./components/Graphs";

function App() {
  const [employees, setEmployees] = useState([]);

  return (
    <div className="App">
      <AddEmployee
        employees={employees}
        setEmployees={setEmployees}
      
      />
      
        <Graphs
         employees={employees}
        />
      
    </div>
  );
}

export default App;
