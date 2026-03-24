# RAITec Site
---

# Estrutura do Projeto

```bash
raitec-site/
│
├── middlewares/             # Funções intermediárias (ex: autenticação)
│   └── auth.js
│
├── models/                  # Estrutura de dados (futuro banco)
│   └── noticia.js
│
├── node_modules/            # Dependências do projeto (NÃO sobe para o GitHub)
│
├── public/                  # Arquivos estáticos
│   ├── css/
│   ├── js/
│   └── images/
│
├── routes/                  # Rotas da aplicação
│   ├── admin/
│   │   ├── auth.js
│   │   ├── dashboard.js
│   │   └── noticias.js
│   │
│   ├── contato/
│   │   └── contato.js
│   │
│   ├── quem-somos/
│   │   ├── sobre.js
│   │   ├── estrutura.js
│   │   └── membros.js
│   │
│   ├── noticias/
│   │   └── noticias.js
│   │
│   ├── projetos/
│   │   └── projetos.js
│   │
│   ├── eventos/
│   │   └── eventos.js
│   │
│   └── raipedia/
│       └── raipedia.js
│
├── services/                # Integrações externas (ex: Firebase)
│   └── firebase.js
│
├── views/                   # Templates EJS (frontend)
│   ├── index.ejs
│
│   ├── admin/
│   ├── contato/
│   ├── quem-somos/
│   ├── noticias/
│   ├── projetos/
│   ├── eventos/
│   ├── raipedia/
│   │
│   └── partials/            # Componentes reutilizáveis
│       ├── header.ejs
│       └── footer.ejs
│
├── .gitignore               # Arquivos ignorados pelo Git
├── index.js                 # Servidor principal
├── package-lock.json
└── package.json
```

---

# Importante sobre Git

### NÃO sobe para o GitHub:

* `node_modules/` → muito pesado e desnecessário
* arquivos sensíveis (ex: chaves do Firebase)

###  O `.gitignore` serve para:

Evitar que arquivos desnecessários ou sensíveis sejam enviados para o repositório.

Exemplo de `.gitignore`:

```bash
node_modules/
.env
firebase-key.json
```

---

# Organização do Projeto

* **routes/** → controla as rotas (backend)
* **views/** → páginas EJS (frontend)
* **public/** → CSS, JS e imagens
* **middlewares/** → lógica intermediária (ex: autenticação)
* **services/** → integrações externas (Firebase)
* **models/** → estrutura de dados (futuro)

---

# 🚀 Como rodar o projeto

## 🔹 1. Clonar o repositório

```bash
git clone https://github.com/raitec-site/Backend
```

---

## 🔹 2. Entrar na pasta do projeto

```bash
cd raitec-site
```

---

## 🔹 3. Instalar as dependências

```bash
npm install
```

Isso vai recriar a pasta `node_modules`

---

##  4. Rodar o servidor

```bash
node index.js
```

ou (recomendado):

```bash
npx nodemon index.js
```

---

## 5. Acessar no navegador

```bash
http://localhost:3000
```

---

# Rotas principais

```bash
/                     → Página inicial
/contato              → Contato

/estrutura            → Estrutura
/membros              → Lista de membros
/membros/:slug        → Membro individual

/noticias             → Lista de notícias
/noticias/:slug       → Notícia individual

/projetos             → Lista de projetos
/projetos/:slug       → Projeto individual

/admin/login          → Login admin
/admin/dashboard      → Painel admin
```

---

# Tecnologias utilizadas

* Node.js
* Express
* EJS
* (Futuro) Firebase

---

# Status do Projeto

✔ Estrutura completa
✔ Rotas organizadas
✔ Pronto para integração com banco de dados
✔ Preparado para painel administrativo

---

# Observação

Após clonar o projeto, sempre execute:

```bash
npm install
```

Caso contrário, o projeto não irá rodar.

---

# Desenvolvido por
Time de Mídias RAITec
