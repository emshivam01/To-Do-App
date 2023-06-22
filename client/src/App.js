import "./App.css";
import AddTodo from "./Components/AddTodo";
import Body from "./Components/Body";
import { Navbar } from "./Components/Navbar";
import AddTodoForm from "./Components/Testing";

function App() {
  return (
    <div className="bg-[#121212] h-screen">
      <Navbar />
      <Body />
      <AddTodo />
      <AddTodoForm />
    </div>
  );
}

export default App;
