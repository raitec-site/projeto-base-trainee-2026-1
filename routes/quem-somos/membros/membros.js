const express = require("express");
const router = express.Router();

// DADOS MOCK (temporário)
const membros = [
  {
    nome: "Larissa",
    slug: "larissa",
    eixo: "Técnico",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Jessé",
    slug: "jesse",
    eixo: "Inovação",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Laiza",
    slug: "laiza",
    eixo: "Técnico",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Camila",
    slug: "Camila",
    eixo: "Apoio",
    time: "Mídias",
    descricao: "blábláblá..."
  }
];


// LISTA DE MEMBROS
router.get("/membros", (req, res) => {
  res.render("quem-somos/membros/index", {
    membros
  });
});


// MEMBRO INDIVIDUAL
router.get("/membros/:slug", (req, res) => {
  const slug = req.params.slug;

  const membro = membros.find(m => m.slug === slug);

  if (!membro) {
    return res.status(404).send("Membro não encontrado");
  }

  res.render("quem-somos/membros/membro", {
    membro
  });
});

module.exports = router;