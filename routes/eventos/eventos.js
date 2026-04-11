const express = require("express");
const router = express.Router();

// DADOS MOCK (temporário)
const eventos = [
  {
    nome: "Desafio Tecnológico",
    slug: "dtec",
    descricao: "Desafio Tecnológico"
  },
  {
    nome: "Control4Future",
    slug: "c4f",
    descricao: "Control for Future"
  }
];


// LISTA DE MEMBROS
router.get("/eventos", (req, res) => {
  res.render("eventos/index", {
    eventos
  });
});


// MEMBRO INDIVIDUAL
router.get("/eventos/:slug", (req, res) => {
  const slug = req.params.slug;

  const evento = eventos.find(e => e.slug === slug);

  if (!evento) {
    return res.status(404).send("Evento não encontrado");
  }

  res.render("eventos/evento", {
    evento
  });
});

module.exports = router;