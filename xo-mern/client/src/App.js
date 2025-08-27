import { useEffect, useState } from "react";

function App() {
  const [health, setHealth] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/health")
      .then(res => res.json())
      .then(setHealth)
      .catch(console.error);
  }, []);

   useEffect(() => {
    fetch("http://localhost:5000/time")
      .then(res => res.json())
      .then(setTime)
      .catch(console.error);
  }, []);

  useEffect(() => {
  fetch("http://localhost:5000/echo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ msg: "hi" })
  })
    .then(r => r.json())
    .then(data => console.log("echo:", data))
    .catch(console.error);
}, []);


  return (
    <div>
      <h1>XO Frontend</h1>
      <pre>{health ? JSON.stringify(health, null, 2) : "Loading..."}</pre>
      <pre>{time ? JSON.stringify(time, null, 2) : "Loading..."}</pre>

    </div>
  );
}

export default App;
