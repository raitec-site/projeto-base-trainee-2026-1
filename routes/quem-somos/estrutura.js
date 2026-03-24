const express = require("express");
const router = express.Router();

// DADOS MOCK (temporário)
const eixos = [
  {
    nome: "Apoio",
    slug: "apoio",
    descricao: "blábláblá..."
  },
  {
    nome: "Inovação",
    slug: "inovacao",
    descricao: "blábláblá..."
  },
  {
    nome: "Técnico",
    slug: "tecnico",
    descricao: "blábláblá..."
  }
];

const times = [
  {
    nome: "Mídias",
    slug: "midias",
    descricao: "blábláblá..."
  },
  {
    nome: "Processos",
    slug: "processos",
    descricao: "blábláblá..."
  }
];

// LISTA DE EIXOS
router.get("/estrutura", (req, res) => {
  res.render("quem-somos/estrutura", {
    eixos, times
  });
});


// EIXO OU TIME INDIVIDUAL
router.get("/estrutura/:slug", (req, res) => {
  const slug = req.params.slug;

  const eixo = eixos.find(e => e.slug === slug);
  const time = times.find(t => t.slug === slug);


  if (!eixo && !time) {
    return res.status(404).send("Eixo ou Time não encontrado");
  }

  res.render("quem-somos/eixo-time", {
    eixo, time
  });
});

module.exports = router;