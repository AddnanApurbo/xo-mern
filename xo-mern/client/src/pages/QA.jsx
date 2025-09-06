import { useEffect, useState } from "react";

export default function QA() {
  const [qs, setQs] = useState([]);

  useEffect(() => {
    fetch("/api/questions")
      .then(r => r.json())
      .then(setQs);
  }, []);

  return (
    <div>
      <h1>Q&A (MERN + DSA)</h1>
      {qs.map(q => (
        <details key={q.id} style={{ margin: "0.5rem 0" }}>
          <summary><b>{q.topic}</b> — {q.prompt}</summary>
          <p>{q.answer}</p>
        </details>
      ))}
    </div>
  );
}
