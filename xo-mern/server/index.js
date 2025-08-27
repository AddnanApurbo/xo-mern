const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ ok: true, msg: "Hello XO" });
});

app.get("/time", (_req, res) => {
  res.json({ now: new Date().toISOString() });
});


app.listen(5000, () => console.log("API running on http://localhost:5000"));
