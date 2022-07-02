import React, { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState(false);
  const [list, setList] = useState([]);

  const handleClick = () => {
    setState(true);
  };

  useEffect(() => {
    if (state) {
      fetch(`https://jsonplaceholder.typicode.com/photos/1`)
        .then((res) => res.json())
        .then((data) => setList(data));
    }
  }, [state]);

  return (
    <div>
      <h1>Data fetching practice</h1>
      <button onClick={handleClick}>CLICK HERE!</button>
      {state && (
        <div>
          <h2>{list.title}</h2>
          <img alt="test-img" src={list.url} />
        </div>
      )}
    </div>
  );
}

export default App;
