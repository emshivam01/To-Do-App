import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Body = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getTodos");
        setTodos(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {todos.length > 0 && console.log(todos[1], "18")}
      {todos.map((todo) => {
        return (
          <Card
            title={todo.title}
            key={todo._id}
            id={todo._id}
            tasks={todo.tasks}
          />
        );
      })}
    </>
  );
};

export default Body;
