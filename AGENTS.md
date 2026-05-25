# The Dog Club — Agent Rules (Gemini CLI)

## Sobre o projeto
Sistema The Dog Club. Uma SPA completa para creche e hospedagem de cães em Auckland, desenvolvida com foco em segurança, confiança e modernidade dentro do ecossistema Systech.

## Stack & Regras Absolutas
- **Framework:** Next.js (App Router)
- **UI:** React + TailwindCSS v4 + Lucide Icons
- **Language:** **ESTRITAMENTE JSX.** Proibido o uso de TypeScript (.ts/.tsx).
- **Design System:** Proibido cores hardcoded. Usar tokens definidos no `src/app/globals.css` via Tailwind v4 (`brand`, `surface`, `background`, etc.).
- **Copywriting:** Proibido Lorem Ipsum. Textos baseados no documento `the-dog-club-content.md`.
- **Responsividade:** Mobile-first obrigatório em todos os componentes.

## Estrutura do projeto
```
src/
├── app/          → rotas e pages (App Router)
├── components/   → componentes React reutilizáveis (BasePage, Button, Card, Input, Header, Footer)
├── hooks/        → custom hooks
└── utils/        → funções utilitárias puras
```

## Protocolo de Trabalho (Obrigatório)
1. **Análise Prévia:** Leia os arquivos afetados e mapeie impactos antes de sugerir ou escrever código.
2. **Código Integral:** Nunca envie trechos parciais ou omissões. O output deve estar 100% pronto para Copy/Paste.
3. **Sem TypeScript:** Se identificar arquivos `.ts`, reporte como erro técnico.
4. **Clean Code:** Funções pequenas, Arrow Functions obrigatórias e DRY.

## Componentes Injetados (Padrão Systech)
- `Button`: Botão com variantes (primary, secondary, outline, ghost) e estados de loading.
- `Card`: Container para seções e itens com hover states.
- `Input` / `Textarea`: Campos de formulário com estados de focus e erro.
- `BasePage`: Layout base unificado com Header e Footer integrados.

## Design Guardrails Aplicados
- Sistema de Papéis de Cor (Brand: #0077B6).
- Contraste WCAG AA (mínimo 4.5:1).
- Grid de 4px via Tailwind v4.
- Escala Tipográfica de 4 níveis.

## SEO & Metadata
Toda `page.jsx` deve conter o objeto `metadata` configurado com títulos e descrições contextuais.
