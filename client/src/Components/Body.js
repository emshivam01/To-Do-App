import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

// Inside the Body component

const Body = ({ newTodo, setNewTodo }) => {
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:4000/getTodos");
      setTodos(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, [newTodo]);

  return (
    <div className="flex flex-wrap justify-center md:justify-start lg:justify-items-start flex-auto mx-5 md:mx-28 my-10">
      {todos.map((todo) => {
        return (
          <Card
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            title={todo.title}
            key={todo._id}
            id={todo._id}
            tasks={todo.tasks}
            fetchTodos={fetchTodos}
          />
        );
      })}
    </div>
  );
};

export default Body;
