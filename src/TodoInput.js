import React, { useState } from "react";

function TodoInput() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList(list.concat(input));
    setInput("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={input}
          onChange={handleChange}
          autoFocus
        />
        <input type="button" value="저장" />
        {list.length ? (
          <ul>
            {list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        ) : null}
      </form>
    </div>
  );
}

export default TodoInput;
