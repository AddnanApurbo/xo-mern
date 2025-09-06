import { useEffect, useState } from "react";

export default function SEO() {
  const [keywords, setKeywords] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/keywords")
    .then(r => r.json())
    .then(setKeywords);
    fetch("/api/checklist")
    .then(r => r.json())
    .then(setItems);
  }, []);

  const toggle = async (id) => {
    const r = await fetch("/api/checklist/toggle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });
    const updated = await r.json();
    setItems(prev => prev.map(i => i.id === updated.id ? updated : i));
  };

  return (
    <div>
      <h1>SEO Tools</h1>

      <h2>Keyword Ideas</h2>
      <table border="1" cellPadding="4">
        <thead><tr><th>Term</th><th>Volume</th><th>Difficulty</th></tr></thead>
        <tbody>
          {keywords.map(k => (
            <tr key={k.id}><td>{k.term}</td><td>{k.volume}</td><td>{k.difficulty}</td></tr>
          ))}
        </tbody>
      </table>

      <h2 style={{marginTop:"1rem"}}>On-page Checklist</h2>
      <ul>
        {items.map(i => (
          <li key={i.id}>
            <label>
              <input type="checkbox" checked={i.done} onChange={()=>toggle(i.id)}/>
              {i.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
