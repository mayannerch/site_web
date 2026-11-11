# Mapa do Site — Charlotte Doceria (Identidade Floral Romântica)

Este documento define a arquitetura de informação, hierarquia de páginas, seções e fluxos de navegação do site da **Charlotte Doceria**.

---

## 1. Visão Geral da Arquitetura

O site é estruturado em **4 páginas principais**, integradas com botões diretos para **WhatsApp** e **Quero Delivery**:

```
                       [ CHARLOTTE DOCERIA ]
                                 │
     ┌───────────────────┬───────┴───────────┬───────────────────┐
     │                   │                   │                   │
[ 1. Início ]       [ 2. Doces ]     [ 3. Nossa História ]  [ 4. Contato ]
 (index.html)     (produtos.html)        (sobre.html)       (contato.html)
```

---

## 2. Detalhamento por Página

### 2.1 Página 1: Início (`index.html`)

* **Barra de Anúncio Superior (Topbar):** Informação de atendimento (14h às 19h), link para Quero Delivery e Instagram `@charlottedoceria_`.
* **Header Global:** Logotipo floral 'C', navegação principal e botões de Quero Delivery e WhatsApp.
* **Faixa Marquee:** Ticker animado com temática floral de rosas e doces.
* **Hero Section:** Apresentação da confeitaria com botão para WhatsApp e para o cardápio de Doces.
* **Faixa de Informações Rápidas:** Horário (14h-19h), Localização (Centro) e Especialidades doces.
* **Destaques da Doceria:** Apresentação das 3 categorias (Delícias no pote, Fatias de bolo, Sobremesas diversas) com link direto para o cardápio.
* **Resumo Institucional:** A história das duas irmãs com o destaque *"Você é nossa convidada especial!"*.
* **Feed do Instagram:** Fotos reais e link para o perfil oficial `@charlottedoceria_`.
* **CTA Final:** Chamada acolhedora com botões para WhatsApp e Quero Delivery.
* **Footer Global:** Links de navegação, categorias de doces, endereço físico e canais oficiais.

---

### 2.2 Página 2: Doces (`produtos.html`)

* **Cabeçalho Floral:** Título "Nossos Doces Artesanais" e apresentação das delícias.
* **Seletor de Categorias Interativo:** Abas com botões delicados para alternar entre:
  * ✨ Todos os Doces (13 produtos)
  * 🍯 Delícias no pote (7 produtos)
  * 🍰 Fatias de bolo (4 produtos)
  * 🍮 Sobremesas diversas (2 produtos)
* **Elementos Decorativos & Tabelas de Preços:** Quadro visual que destaca os itens e preços correspondentes de cada categoria.
* **Grid de Produtos com Preços:** Cards individuais com fotos apetitosas, preços oficiais destacados e botão de pedido no WhatsApp.
* **Bloco Informativo de Pedidos & Delivery:** Botões para pedir no WhatsApp e no Quero Delivery.

---

### 2.3 Página 3: Nossa História (`sobre.html`)

* **Apresentação Institucional:** Narrativa oficial das duas irmãs apaixonadas por doces.
* **Destaque Visual Especial:** Box em destaque com *"Você é nossa convidada especial!"*.
* **Localização no Centro:** Av. Rui Barbosa, 27 - térreo (em frente à Onofre).
* **Nossos Pilares:** Variedade, Qualidade e Proximidade.
* **Banner de Convite:** Chamada para visita com botões de contato.

---

### 2.4 Página 4: Contato (`contato.html`)

* **Canais de Atendimento (5 Cards):**
  1. WhatsApp Oficial: `(83) 99380-4545`
  2. Quero Delivery: Pedidos online pelo app parceiro
  3. Instagram Oficial: `@charlottedoceria_`
  4. Onde Estamos: Av. Rui Barbosa, 27 - térreo - Centro (em frente à Onofre) com botão de copiar endereço
  5. Horário de Atendimento: Segunda a Sábado, das 14h às 19h
* **Guia de Visita:** Informações de acesso e botão com rota para o Google Maps.
