# THE DOG CLUB — Documento Completo de Conteúdo para Refatoração

> Este documento contém **todo o conteúdo textual, estrutural, de navegação, SEO e regras de negócio** do site https://www.thedogclub.co.nz, mapeado página a página. Use este arquivo como fonte de verdade para reproduzir e refatorar o site.

---

## 1. IDENTIDADE DA MARCA

- **Nome:** The Dog Club
- **Slogan / Tagline:** *(não declarado explicitamente, mas recorrente nos textos)* "Play and Stay" / "Safety is our #1 Priority"
- **Tipo de negócio:** Doggie Daycare & Dog Boarding (creche e hospedagem para cães)
- **Posicionamento:** Um dos estabelecimentos de daycare e boarding para cães mais consolidados de Auckland. Ambiente seguro, divertido, com foco em socialização e estimulação física e mental.
- **Público-alvo:** Tutores de cães em Auckland que precisam de cuidados durante o dia ou hospedagem.

---

## 2. INFORMAÇÕES DE CONTATO E LOCALIZAÇÃO

| Campo              | Valor                                                |
|--------------------|------------------------------------------------------|
| **Endereço**       | 62b Morrin Road, St Johns, Auckland                 |
| **E-mail**         | admin@thedogclub.co.nz                              |
| **Telefone**       | 09-574 5125                                         |
| **Facebook**       | https://www.facebook.com/thedogclubnz               |
| **Instagram**      | https://www.instagram.com/thedogclubnz/             |
| **Sistema de reservas (Members)** | https://us.revelationpets.com/newbooking/widget/token/n8wiitttpn |
| **Agendamento (1 cão)**  | https://thedogclub.youcanbook.me/             |
| **Agendamento (2 cães)** | https://thedogclub2.youcanbook.me/           |

---

## 3. HORÁRIOS DE FUNCIONAMENTO

### Horário do Clube (Club Hours)

| Dia                         | Abertura | Fechamento |
|-----------------------------|----------|------------|
| Segunda a Sexta             | 7h00     | 18h30      |
| Fins de semana e Feriados   | 8h00     | 16h30      |

> ⚠️ **Regra:** Cães devem ser entregues na recepção até **9h30** em todos os dias.

### Horários da Recepção (Check-in / Check-out)

| Período                      | Check-in      | Check-out      |
|------------------------------|---------------|----------------|
| Segunda a Sexta              | 7h00 – 9h30   | 15h00 – 18h30  |
| Fins de semana e Feriados    | 8h00 – 9h30   | 15h00 – 16h30  |

---

## 4. ESTRUTURA DE NAVEGAÇÃO (MENU)

```
Header (fixo em todas as páginas):
├── [Botão CTA] Book a Tour → /book-online
├── Logo (The Dog Club) → /
├── Services (dropdown)
│   ├── Boarding → /boarding
│   └── Daycare → /daycare
├── About (dropdown)
│   └── Contact → /contact
└── Members Log In → https://us.revelationpets.com/newbooking/widget/token/n8wiitttpn

CTAs recorrentes no Hero de todas as páginas:
├── [Book a Tour] → /book-online
└── [Join the Club] → /application
```

---

## 5. FOOTER (Rodapé — igual em todas as páginas)

**Conteúdo do footer:**

```
Club hours:  Monday to Friday:   7am - 6:30pm
Weekends and Public Holidays:   8am - 4:30pm
Dogs must be checked into reception by 9:30am

Address: 62b Morrin Road, St Johns, Auckland
Email: admin@thedogclub.co.nz
Phone: 09-574 5125

Ícones sociais:
  - Facebook → https://www.facebook.com/thedogclubnz
  - Instagram → https://www.instagram.com/thedogclubnz/
```

---

## 6. PÁGINAS — CONTEÚDO DETALHADO

---

### 6.1 PÁGINA: HOME (`/`)

**Meta SEO:**
- **Title:** Dog Daycare and Dog Boarding in Central Auckland | The Dog Club
- **Meta Description:** Located in St Johns, Auckland, The Dog Club is a Doggie Daycare and Boarding facility featuring both indoor and outdoor play areas for puppies and dogs of all sizes.
- **OG Image:** https://static.wixstatic.com/media/c844cd_413ab93cd67e4eb2a75ceb3afc5cf3de~mv2.jpg

---

#### Seção Hero

- **Título principal (H1):** welcome to THE DOG CLUB
- **CTA 1:** Book a Tour → `/book-online`
- **CTA 2:** Join the Club → `/application`

---

#### Seção de Horários de Recepção

```
Our reception opening hours are:

Check in:
  Monday to Friday:         7am - 9:30am
  Weekends and Public Holidays:  8am - 9:30am

Check out:
  Monday to Friday:         3pm - 6:30pm
  Weekends and Public Holidays:  3pm - 4:30pm
```

---

#### Seção de Serviços (Cards)

**Card 1 — Doggy Daycare**
- **Título:** Doggy Daycare
- **Link:** `/daycare`
- **Texto:** Our large indoor and outdoor premises boasts a state-of-the-art pure rubber floor, essential for dog safety. All dogs have access to the outside area - perfect for water play in the hotter months!
- **CTA:** Learn more → `/daycare`

**Card 2 — Dog Boarding**
- **Título:** Dog Boarding
- **Link:** `/boarding`
- **Texto:** During the day your dog will spend their time in our daycare playing with their friends. At night, a member of our team will be on-site to ensure all dogs are cared for and well settled in.
- **CTA:** Learn more → `/boarding`

---

#### Seção de Diferenciais — "Safety is our #1 Priority"

| Ícone | Diferencial          | Descrição                                                                                           |
|-------|----------------------|-----------------------------------------------------------------------------------------------------|
| 🧹    | Clean Environment    | We have a strict cleaning schedule to ensure our facilities are clean and sanitary.                |
| 🐾    | Behaviour Screening  | Every club member is screened by our team to ensure they're a good fit for group play.             |
| 💉    | Vaccine Required     | Every member must be up to date on vaccines and show proof before enrollment.                      |
| 👀    | Supervised Play      | Hands on supervision whether your dog is playing with their friends during the day or resting at night. |

---

#### Seção de Galeria de Fotos

*(4 imagens de cães no espaço do clube — sem legendas, uso decorativo/emocional)*

---

#### Seção Descritiva (Texto institucional longo)

> "The key to The Dog Club is exercise and play - a sitting service we are not. A happy dog is one that has been physically and mentally stimulated, just like people. Our dogs go home at the end of a club day, tired and content after a full day of chasing balls and bubbles, playing with their friends, splashing in the paddling pool and lastly, the firm favourite; cardboard box demolition party."

---

#### Seção CTA Final

- **Título:** Ready to join?
- **Subtítulo:** Complete our application form below to get started
- **Botão:** JOIN THE CLUB → `/application`

---

### 6.2 PÁGINA: DAYCARE (`/daycare`)

**Meta SEO:**
- **Title:** Puppy and Doggy Daycare in Auckland - The Dog Club
- **Meta Description:** If You Spend Your Days Away from Home, Let Your Dog Play at Our Doggie Daycare. Located in St Johns, Auckland, our large premises feature indoor and outdoor play areas for puppies and dogs of all sizes.

---

#### Seção Hero

- **Título:** DAYCARE
- **CTA:** Join the Club → `/application`

---

#### Texto de apresentação

> We are one of Auckland's most established doggie daycare and boarding facilities exclusively for dogs! Our team has created a safe and fun environment where dogs come to be socialized while being mentally and physically stimulated.
>
> To enquire about our availability or to enrol your pup in our daycare, please fill our application form below to book an assessment day.

---

#### Tabela de Preços — Daycare

| Plano                                       | 1 Cão  | 2 Cães |
|---------------------------------------------|--------|--------|
| Casual Half Day                             | $37    | $70    |
| Casual Full Day                             | $50    | $87    |
| 5x Full Day Pass — Expira em 3 meses        | $240   | $390   |
| 10x Full Day Pass — Expira em 5 semanas     | $400   | $685   |
| 10x Full Day Pass — Expira em 12 semanas    | $430   | $715   |
| 10x Full Day Pass — Expira em 6 meses       | $450   | $740   |

---

#### Seção "Joining The Dog Club"

**Título:** Joining The Dog Club

> The daycare environment is quite simply not for all dogs. Dogs all have their own personalities, and some personalities and temperaments are simply better suited than others to the large group environment of daycare.
>
> Please complete our application form and we will be in contact with you to book an assessment day. Assessment days are full-day trials allowing us to monitor your dog's body language and interaction with other dogs. We pride ourselves on taking the time to ease your dog into the club environment. It's about making sure we're the right fit for each other.
>
> The assessment day is charged at our casual full day rate of $50.

**CTAs:**
- Book a Tour → `/book-online`
- Join us → `/application`

---

### 6.3 PÁGINA: BOARDING (`/boarding`)

**Meta SEO:**
- **Title:** Dog Boarding Auckland | Dog Boarding Kennels NZ | The Dog Club
- **Meta Description:** Quality short and long-term boarding and kennels for dogs in Auckland. Play and Stay in our exclusive boarding rooms, only for members of The Dog Club. Come and take a look today!

---

#### Seção Hero

- **Tagline:** Play and Stay in our exclusive boarding rooms, only for members of The Dog Club.

---

#### Tabela de Preços — Boarding

| Plano                  | Preço por noite |
|------------------------|-----------------|
| 1 Cão                  | $60             |
| 2 Cães compartilhando  | $95             |
| 3 Cães compartilhando  | $120            |

---

#### Regras e Condições do Boarding

1. O preço é referente a um período de **24 horas**.
2. Cães devem ser entregues na recepção antes das **9h30** e retirados na manhã seguinte antes das **9h30**.
3. Retiradas após 9h30 serão cobradas com as tarifas regulares de **daycare**.
4. Para reservas em **feriados**, aplica-se uma **sobretaxa de 10%** sobre o valor total.
5. Os tutores devem trazer a **comida do próprio cão** suficiente para o período da estadia.
6. Para **primeira estadia maior que 1 semana**, é obrigatório um **trial de 2 noites** antes da reserva principal.
7. O cão deve ser **membro do Dog Club** para fazer reservas de boarding. Para se tornar membro: `/application`.

---

#### Texto descritivo do serviço

> During the day your dog will spend their time in our daycare playing with their friends. At night, a member of our team stays overnight to ensure all dogs are cared for and well settled in.

**CTAs:**
- Book a tour → `/book-online`
- Join the Club → `/application`

---

### 6.4 PÁGINA: APPLICATION / JOIN THE CLUB (`/application`)

**Meta SEO:**
- **Title:** Join the club | The Dog Club

---

#### Conteúdo

**Título (H1):** Join the Dog Club

> The first step to becoming a Dog Club member is booking an assessment day for your pup.
>
> Assessment days are full-day trials allowing us to monitor your dog's body language and interaction with other dogs. We pride ourselves on taking the time to ease your dog into the club environment.

**CTAs de agendamento:**
- 1 dog assessment → https://thedogclub.youcanbook.me/
- 2 dog assessment → https://thedogclub2.youcanbook.me/

---

### 6.5 PÁGINA: CONTACT (`/contact`)

**Meta SEO:**
- **Title:** Contact | The Dog Club
- **Meta Description:** Ready To Join The Dog Club? Contact Us Now To Learn More About Our Doggie Daycare And Boarding Services

---

#### Conteúdo

**Título (H1):** Contact Us

- Formulário de contato simples (campos não especificados na fonte, provavelmente: Nome, E-mail, Mensagem)
- Mensagem de sucesso pós-envio: *"Thank you for your message! A member of our team will be in contact with you shortly"*
- Botão: **Submit**

---

## 7. IMAGENS USADAS NO SITE

> URLs das imagens originais hospedadas no Wix CDN. Use como referência visual ou substitua por imagens equivalentes.

| Uso                        | URL                                                                                                                                                                         |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OG Image / Hero principal  | https://static.wixstatic.com/media/c844cd_413ab93cd67e4eb2a75ceb3afc5cf3de~mv2.jpg                                                                                        |
| Logo (ícone cão)           | https://static.wixstatic.com/media/c844cd_d49e99dd301e4679974e1f26f0ab757c~mv2.png                                                                                        |
| Hero Home (blur bg)        | https://static.wixstatic.com/media/c844cd_0e5dc2441e974a24a8a7f29656a0ea41~mv2.jpg                                                                                        |
| Card Daycare               | https://static.wixstatic.com/media/c844cd_6d8b2d8563c74e01bd19219b52fa06a3~mv2.jpg                                                                                        |
| Card Boarding              | https://static.wixstatic.com/media/c844cd_b86ffdb1a21543f080b3075ce50bcee7~mv2.jpeg                                                                                       |
| Hero Boarding (blur bg)    | https://static.wixstatic.com/media/c844cd_d45a20cf021a43c8b00a17b908b6754a~mv2.jpg                                                                                        |
| Galeria 1                  | https://static.wixstatic.com/media/c844cd_8b7f951024e4457f9b52e7bf41b53f4d~mv2.jpg                                                                                        |
| Galeria 2                  | https://static.wixstatic.com/media/c844cd_efdd650d274d4775ac652e50f8a6db08~mv2.jpg                                                                                        |
| Galeria 3                  | https://static.wixstatic.com/media/c844cd_4b509a99c5d4405db7c382f8be1287d2~mv2.jpg                                                                                        |
| Galeria 4                  | https://static.wixstatic.com/media/c844cd_db316b95c9ae47bba0a9f5f852cc2a99~mv2.jpg                                                                                        |
| Ícone Clean Environment    | https://static.wixstatic.com/media/c844cd_1d7eee59604a4ac3b16418e88d26e753~mv2.png                                                                                        |
| Ícone Behaviour Screening  | https://static.wixstatic.com/media/c844cd_28cc000072a94f8391cf936383477145~mv2.png                                                                                        |
| Ícone Supervised Play      | https://static.wixstatic.com/media/c844cd_3c08e8b4a2ce45999504c8a5f3422e8b~mv2.png                                                                                        |
| Ícone Vaccine Required     | https://static.wixstatic.com/media/c844cd_86286f143b014a8ab20c137f0f0588b3~mv2.png                                                                                        |
| Ícone daycare 1 cão        | https://static.wixstatic.com/media/c844cd_013508565a8e4e659fb39d3052bc72dc~mv2.png                                                                                        |
| Ícone daycare 2 cães       | https://static.wixstatic.com/media/c844cd_0569bf6e6eb34419b6dfe0da8513c6b4~mv2.png                                                                                        |

---

## 8. ROTAS DO SITE

| Rota            | Página                           |
|-----------------|----------------------------------|
| `/`             | Home                             |
| `/daycare`      | Daycare (preços + info)          |
| `/boarding`     | Boarding (preços + regras)       |
| `/contact`      | Formulário de contato            |
| `/application`  | Formulário para virar membro     |
| `/book-online`  | Agendamento de tour (externo?)   |

---

## 9. INTEGRAÇÕES EXTERNAS

| Serviço              | URL / Token                                                          | Uso                          |
|----------------------|----------------------------------------------------------------------|------------------------------|
| Revelation Pets      | https://us.revelationpets.com/newbooking/widget/token/n8wiitttpn    | Portal de login dos membros  |
| YouCanBook.me (1 cão)| https://thedogclub.youcanbook.me/                                   | Agendamento de assessment    |
| YouCanBook.me (2 cães)| https://thedogclub2.youcanbook.me/                                 | Agendamento de assessment    |

---

## 10. REGRAS DE NEGÓCIO RESUMIDAS

1. **Para usar o daycare:** o cão precisa passar por um **Assessment Day** (dia de avaliação) antes de se tornar membro. Custo: $50 (tarifa casual full day).
2. **Para usar o boarding:** o cão **precisa ser membro** do clube (já ter feito o assessment).
3. **Check-in:** sempre antes das **9h30**, todos os dias.
4. **Primeira estadia longa no boarding (>1 semana):** trial de 2 noites obrigatório.
5. **Feriados:** sobretaxa de **10%** sobre o valor total da reserva de boarding.
6. **Alimentação no boarding:** tutores trazem a comida do próprio cão.
7. **Vacinas:** todos os membros devem estar com vacinas em dia e apresentar comprovante no cadastro.
8. **Supervisão:** equipe presente no local 24h durante estadias de boarding.

---

*Documento gerado com base em scraping completo realizado em maio de 2026.*
*Site original: https://www.thedogclub.co.nz — Plataforma: Wix*
