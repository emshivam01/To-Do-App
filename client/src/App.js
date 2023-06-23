import "./App.css";
import AddTodo from "./Components/AddTodo";
import Body from "./Components/Body";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className="bg-[#121212] h-screen">
      <Navbar />
      <Body />
      <AddTodo />
    </div>
  );
}

export default App;
