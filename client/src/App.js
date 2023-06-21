import "./App.css";
import AddTodo from "./Components/AddTodo";
import Card from "./Components/Card";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className="bg-[#121212] h-screen">
      <Navbar />
      <Card />
      <Card />
      <AddTodo />
    </div>
  );
}

export default App;
