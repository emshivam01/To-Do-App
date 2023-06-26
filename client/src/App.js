import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import Body from "./Components/Body";
import { Navbar } from "./Components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  const [newTodo, setNewTodo] = useState(1);

  return (
    <div className="bg-[#121212] h-screen ">
      <Navbar />
      <Body newTodo={newTodo} setNewTodo={setNewTodo} />
      <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} />

      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#213555",
          },
        }}
      />
    </div>
  );
}

export default App;
