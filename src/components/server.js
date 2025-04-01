const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const filePath = "./data/publications.json";

// pegar dados do JSON
app.get("/api/publications", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao ler o arquivo." });
    }
    res.json(JSON.parse(data));
  });
});

// salvar alterações no JSON
app.post("/api/publications", (req, res) => {
  fs.writeFile(filePath, JSON.stringify(req.body, null, 2), "utf8", (err) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao salvar os dados." });
    }
    res.json({ message: "Dados salvos com sucesso!" });
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
