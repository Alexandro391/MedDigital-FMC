# 🏥 FMC — Caderneta Digital de Estágios

**Plataforma Integrada · Faculdade de Medicina de Campos · Semestre 2026.1**

Sistema web PWA para controle de estágios hospitalares, sem necessidade de download.

---

## 🚀 Deploy no GitHub Pages

1. Faça upload de todos os arquivos na raiz do repositório `alexandro391.github.io`
2. Vá em **Settings → Pages → Source: Deploy from branch → main / root**
3. Acesse: `https://alexandro391.github.io`

---

## 📁 Estrutura de Arquivos

```
/
├── index.html          ← Portal principal (3 cards de acesso)
├── aluno.html          ← Área do Aluno (login, dashboard, registro, histórico)
├── preceptor.html      ← Área do Preceptor (token dinâmico, presenças)
├── coordenacao.html    ← Painel da Coordenação (dashboard completo)
├── css/
│   └── style.css       ← Design system completo (Dark Medical theme)
├── js/
│   └── app.js          ← Lógica global + Firebase + fallback localStorage
└── pwa/
    ├── manifest.json   ← PWA manifest (ícone, nome, cores)
    └── sw.js           ← Service Worker (cache offline)
```

---

## 🔑 Credenciais de Demonstração

| Perfil | Acesso |
|--------|--------|
| **Aluno** | RA: `220610` · Nome: `Alexandro Macabu de Lima` · 5º Período |
| **Aluno 2** | RA: `220611` · Nome: `Bruna Souza Ferreira` · 6º Período |
| **Preceptor** | CRM: `CRM123456` · Qualquer nome · Selecione o hospital |
| **Coordenação** | Senha: `123456` |

---

## 🔥 Firebase

Configuração já inserida em `js/app.js`:

```js
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCTpK-m1xjzs27MJ0827GRpBrUaih_4wSg",
  authDomain: "caderneta-fmc.firebaseapp.com",
  projectId: "caderneta-fmc",
  storageBucket: "caderneta-fmc.firebasestorage.app",
  messagingSenderId: "739844114033",
  appId: "1:739844114033:web:bcc7234c924d0b13217dd0"
};
```

### Coleções no Firestore (criar manualmente ou auto-criadas):
- `students` — alunos
- `preceptors` — preceptores
- `shifts` — plantões
- `tokens` — tokens ativos
- `settings` — configurações (senha coord)

> **Enquanto o Firestore não estiver configurado**, o sistema usa `localStorage` automaticamente como fallback.

---

## 📱 Instalação como App (PWA)

**Android (Chrome):** Menu → *Adicionar à tela inicial*  
**iPhone (Safari):** Botão compartilhar → *Adicionar à Tela de Início*

---

## ✨ Funcionalidades

### Aluno
- Login por RA + Nome + Período
- Dashboard com barra de progresso (20 plantões meta)
- Grade visual de 20 dots (plantões concluídos com ✓)
- Registro de plantão com token do preceptor
- Histórico cronológico completo

### Preceptor
- Login por CRM + Nome + Hospital
- Token dinâmico de 4 caracteres (expira em 5 min)
- Countdown visual com barra de tempo
- Lista de presenças validadas
- Cadastro de novo preceptor

### Coordenação
- Login por PIN de 6 dígitos (keypad virtual)
- **Dashboard:** totais, ranking de progresso, status do semestre, hospitais ativos, distribuição por especialidade
- **Alunos:** tabela completa com busca, filtros por período e status, barra de progresso individual
- **Plantões:** histórico completo filtrável por busca e hospital
- **Alertas:** crítico (baixo desempenho), sucesso (concluídos), atenção (sem registro)
- **Novo Aluno:** cadastro com RA, nome, período, e-mail
- **Configurações:** alterar senha, excluir dados, reset

---

## 🎨 Design

- **Paleta:** Dark mode médico (`#070d0a` fundo, `#3aab85` acento verde-teal)
- **Fontes:** Bebas Neue (títulos) + Rajdhani (dados)
- **Responsivo:** Mobile-first, funciona em celular, tablet e desktop
- **Animações:** fade-in staggered, hover glow, transições suaves

---

*FBPN · Fundação Benedito Pereira Nunes · Sistema Caderneta Digital v2.0*
