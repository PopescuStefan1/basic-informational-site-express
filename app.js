import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact-me.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "404.html"));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`App running and listening on port ${PORT}`);
});
