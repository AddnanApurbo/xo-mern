const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

/** ---- Mock Data ---- **/
let QUESTIONS = require("./data/questions.json");
let KEYWORDS = require("./data/keywords.json");
let CHECKLIST = require("./data/checklist.json");

/** ---- Routes ---- **/
app.get("/health", (_, res) => res.json({ ok: true }));

app.get("/api/questions", (_, res) => res.json(QUESTIONS));
app.get("/api/keywords",  (_, res) => res.json(KEYWORDS));
app.get("/api/checklist", (_, res) => res.json(CHECKLIST));

app.post("/api/checklist/toggle", (req, res) => {
  const { id } = req.body;
  const item = CHECKLIST.find(c => c.id === id);
  if (!item) return res.status(404).json({ error: "Not found" });
  item.done = !item.done; // in-memory flip
  res.json(item);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`XO API running on http://localhost:${PORT}`);
});
