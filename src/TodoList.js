import React, { useState, useEffect } from "react";
import axios from "axios";

function TodoList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setList(res.data))
      .catch(function (err) {
        console.log(err);
      })
      .then(function () {
        console.log("되따");
      });
  }, []);

  return (
    <div>
      <ul>
        {list.map((item) => (
          <>
            <input type="checkbox" checked={item.completed} />
            <li key={item.id}>{item.title}</li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
