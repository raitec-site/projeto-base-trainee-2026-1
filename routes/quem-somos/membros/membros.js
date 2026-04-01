const express = require("express");
const router = express.Router();

// DADOS MOCK (temporário)
const membros = [
  {
    nome: "Larissa dos Santos Holanda",
    slug: "larissa",
    eixo: "Técnico",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Davi Jesse Honorato de Oliveira",
    slug: "jesse",
    eixo: "Inovação",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Lucas de Oliveira Sobral",
    slug: "lucas",
    eixo: "Técnico",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "João Vitor Marques Falcão",
    slug: "falcão",
    eixo: "Técnico",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Osvaldo Medeiros Cavalcante Neto",
    slug: "osvaldo",
    eixo: "Técnico",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Davi Maurício Guedes Moreira",
    slug: "maurício",
    eixo: "Técnico",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Lucas Martins Menezes",
    slug: "lucas",
    eixo: "Técnico",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Davi Sousa Trévia Magalhães",
    slug: "trevia",
    eixo: "Técnico",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Gabriel Gonzaga Sá Barreto",
    slug: "gabriel",
    eixo: "Técnico",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Matheus Rocha Gomes da Silva",
    slug: "matheus rocha",
    eixo: "Técnico",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Paulo Ricardo Jucá Santiago",
    slug: "paulo ricardo",
    eixo: "Técnico",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Maria Paula Mesquita",
    slug: "maria paula",
    eixo: "Técnico",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Iago de Farias Gomes",
    slug: "iago",
    eixo: "Técnico",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Wagner Silva da Costa Filho",
    slug: "wagner",
    eixo: "Técnico",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Laiza Edwiges Rocha da Silva",
    slug: "laiza",
    eixo: "Técnico",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Amanda Kelly Caetano da Silva",
    slug: "amanda",
    eixo: "Apoio",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Luan Maciel dos Santos",
    slug: "luan",
    eixo: "Apoio",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Bruno Costa Ferreira",
    slug: "bruno",
    eixo: "Apoio",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "João Matheus Pereira da Silva",
    slug: "joão matheus",
    eixo: "Apoio",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Rafael Martins Guimaraes Vieira",
    slug: "rafael",
    eixo: "Apoio",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Savlio Carvalho Pontes",
    slug: "savlio",
    eixo: "Apoio",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Matheus Andrade Maia",
    slug: "matheus maia",
    eixo: "Inovação",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Vitor Nogueira de Sousa",
    slug: "vitor",
    eixo: "Inovação",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Sophya Evelyn de Sousa Ferreira Silva",
    slug: "sophya",
    eixo: "Inovação",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Penelope Aghata Liberato de Oliveira",
    slug: "penelope",
    eixo: "Inovação",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Joinale Mendes da Rocha",
    slug: "joinale",
    eixo: "Inovação",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Levi Rocha de Santana Guimares",
    slug: "levi",
    eixo: "Apoio",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "David Baima Monte",
    slug: "david",
    eixo: "Inovação",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Leticia Romero Ciconini Gomes da Silva",
    slug: "leticia",
    eixo: "Apoio",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Gabriel Mapurunga de Carvalho",
    slug: "gabriel",
    eixo: "Inovação",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Aquiles de Oliveira Ferreira",
    slug: "aquiles",
    eixo: "Inovação",
    time: "Mídias",
    descricao: "blábláblá..."
  },
  {
    nome: "Fernando Caio Ribeiro Moura",
    slug: "fernando",
    eixo: "zzz",
    time: "zzz",
    descricao: "blábláblá..."
  },
  {
    nome: "Geovanna Angelino de Sousa",
    slug: "geovanna",
    eixo: "Inovação",
    time: "Processos",
    descricao: "blábláblá..."
  },
  {
    nome: "Camila De Oliveira Silva",
    slug: "camila",
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