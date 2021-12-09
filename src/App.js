import "./App.css";
import { useState } from "react";
import AddEmployee from "./components/AddEmployee";

function App() {

  const [employees, setEmployees] = useState([])

  return (
    <div className="App">
      <AddEmployee employees={employees} setEmployees={setEmployees}/>
    </div>
  );
}

export default App;
