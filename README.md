# The Dog Club

**The Dog Club** é um portal comercial interativo e dinâmico desenvolvido para a divulgação de serviços de creche recreativa (**Daycare**) e hotelaria de cães (**Boarding**), oferecendo ferramentas de agendamento online e uma experiência fluida baseada em micro-animações premium.

---

## 👥 Funcionalidades para o Usuário

O portal do **The Dog Club** aproxima tutores e o clube através de uma interface rica de agendamento e interações:

### 💼 Fluxo de Negócio e Recursos
- **Apresentação de Creche & Hotel (Daycare & Boarding):** Páginas interativas detalhando as atividades, rotina diária de socialização, estrutura do hotel e regras de convivência para cães.
- **Agendamento Online (Book Online):** Módulo para reserva e agendamento de horários para avaliação comportamental, diárias de creche ou pernoites de hotelaria.
- **Inscrição Cadastral (Application):** Formulário completo para envio de dados do cão (idade, raça, vacinação) e perfil comportamental antes da aceitação no clube.
- **Teste de Variações de Layouts (A/B Testing):** Interface de visualização que integra 5 versões experimentais de Landing Pages (`home-v1` a `home-v5`), permitindo a alternância rápida e análise dinâmica através da rota do seletor de layout (`layout-selector`).
- **Animações Fluidas:** Transições de páginas e efeitos visuais imersivos utilizando a biblioteca `framer-motion`.

---

## 🚀 Tecnologias Utilizadas

O portal foi construído utilizando as ferramentas de ponta de desenvolvimento web:

- **Frontend & Roteamento:** [Next.js](https://nextjs.org/) (App Router) v15.1.0 e React 19.
- **Estilização:** [TailwindCSS v4](https://tailwindcss.com/) (Mobile-first).
- **Animações:** [Framer Motion](https://www.framer.com/motion/) para transições de páginas e efeitos visuais interativos.
- **Utilitários de Layout:** Clsx, Tailwind-merge e Lucide React (iconografia).
- **Formatador:** Biome (v1.9.4) para formatação e lint do código.

---

## 📋 Pré-requisitos

Para executar o portal localmente, certifique-se de possuir instalado:

- **Node.js:** Versão v18.0.0 ou superior.
- **NPM:** Gerenciador de pacotes incluso no Node.js.

---

## 🛠️ Instruções de Inicialização

Siga os comandos abaixo para rodar e compilar a aplicação em seu ambiente local:

### 1. Instalar as dependências do projeto
```bash
npm install
```

### 2. Inicializar o Servidor de Desenvolvimento
```bash
npm run dev
```
O portal estará operando localmente no endereço [http://localhost:3000](http://localhost:3000).

### 3. Compilar para Produção
```bash
npm run build
```

### 4. Iniciar Servidor de Produção
```bash
npm run start
```

---

## 📁 Estrutura de Diretórios

A estrutura interna do repositório está organizada da seguinte maneira:

```text
the-dog-club/
├── public/                 # Recursos gráficos públicos e mídias
│   └── systech-logo.svg    # Logotipo oficial de desenvolvimento
├── src/
│   ├── app/                # Estrutura de rotas (App Router)
│   │   ├── application/    # Página com formulário de inscrição de pets
│   │   ├── boarding/       # Detalhamento do serviço de hotelaria canina
│   │   ├── book-online/    # Página de agendamento online de serviços
│   │   ├── contact/        # Formulário de contato institucional
│   │   ├── daycare/        # Detalhamento do serviço de creche recreativa
│   │   ├── home-v1/        # Homepage Modelo V1
│   │   ├── home-v2/        # Homepage Modelo V2
│   │   ├── home-v3/        # Homepage Modelo V3
│   │   ├── home-v4/        # Homepage Modelo V4
│   │   ├── home-v5/        # Homepage Modelo V5
│   │   ├── layout-selector/# Seletor interativo para alternar as Homepages
│   │   ├── globals.css     # Estilização global da aplicação
│   │   ├── layout.jsx      # Layout geral do portal (Header, Footer)
│   │   └── page.jsx        # Ponto de entrada padrão
│   └── components/         # Componentes de interface reutilizáveis
├── biome.json              # Configurações do formatador/linter Biome
├── next.config.mjs         # Configurações do Next.js
└── README.md               # Documentação técnica e comercial
```

---

## 📝 Regras de Desenvolvimento

1. **JavaScript Estrito:** Todo o projeto deve ser mantido estritamente em JavaScript (`.js`/`.jsx`). O uso de TypeScript não é suportado no repositório.
2. **Mobile-first:** A visualização em dispositivos móveis é prioritária. Todos os botões e itens clicáveis de agendamento devem conter a classe `cursor-pointer`.
3. **Animações Fluidas:** Transições de cards e modais devem utilizar transições leves do `framer-motion` para evitar perdas de desempenho e manter uma experiência premium.

---

<br />

<div align="center" style="display: flex; align-items: center; justify-content: center; gap: 4px; margin-top: 24px;">
  <span>Desenvolvido por </span>
  <a href="https://systechdev.com.br" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 4px; color: #FFB800; font-weight: 600; text-decoration: none;">
    <img src="public/systech-logo.svg" alt="Systech" width="16" height="16" style="display: inline-block;" />
    Systech
  </a>
</div>
