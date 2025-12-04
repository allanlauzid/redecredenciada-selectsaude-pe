# redecredenciada-selectsaude-pe

<div align="center">

Consulta interativa da rede credenciada da Select Saúde PE.<br>Convertida do PDF original para um PWA com filtros, busca dinâmica e modo escuro.<br><br>

![Badge](https://img.shields.io/badge/Built%20with-Vibe%20Coding-794ef0?style=for-the-badge\&logo=google\&logoColor=white)<br><br><i>Projeto desenvolvido através de fluxos acelerados por IA (Vibe Coding com LLMs)</i>

</div>

Disponível em:
🔗 GitHub Pages: https://allanlauzid.github.io/redecredenciada-selectsaude-pe/

🔗 Netlify: https://selectsaude-pe.netlify.app/

---

# 🏥 Rede Credenciada – Select Saúde Premium (PWA)

Ferramenta criada para consultar a **rede credenciada da Select Saúde Premium**, convertendo um **PDF bruto disponibilizado por um corretor** em um **site responsivo, interativo e instalável como PWA** (PDF anexado como `rede-credenciada-PE-2025-09-30.pdf`).
O projeto demonstra como Vibe Coding pode transformar materiais estáticos em aplicações úteis no dia a dia.

> ⚠️ Projeto pessoal para estudo e portfólio, sem vínculo oficial com a operadora.

---

## 🧩 Visão Geral do Projeto

O PDF original foi transformado em uma **tabela interativa** com filtros, busca global, visual limpo e suporte a instalação como aplicativo (PWA), funcionando bem em desktop e celular.

---

## ✨ Funcionalidades principais

- 🔍 **Busca global flutuante**  
  Um campo de busca que aparece como botão redondo. Ao clicar, ele se expande e permite pesquisar em toda a tabela.

- 🎯 **Filtros por coluna**  
  Cada coluna da segunda linha de cabeçalho ganha um `<select>` com valores únicos daquela coluna, atualizados dinamicamente conforme os filtros são aplicados.

- 📱 **Responsivo**  
  Layout adaptado para:
  - Desktop com tabela grande e área de rolagem dedicada;
  - Celular com reorganização de cabeçalho e rolagem mais natural.

- 🌙 **Modo Escuro**  
  Alternância entre tema claro e escuro, usando variáveis CSS e salvando a preferência do usuário.

- 📦 **PWA (instalável)**  
  Com manifest e service worker configurados, o site pode ser instalado na tela inicial do celular ou como app no desktop.

- 🧾 **Atualização simples dos dados**  
  Para atualizar a rede credenciada, basta **substituir o CSV** na pasta `data/` mantendo os mesmos nomes de coluna.

---

## 🔄 Do PDF ao Site: Etapas do Fluxo

### 1. PDF enviado pelo corretor

<i>Documento extenso e difícil de navegar, contendo toda a rede credenciada.</i>

### 2. Conversão para CSV

<i>Extração e limpeza dos dados para `data/rede_credenciada.csv`, com conferência manual.</i>

### 3. Prototipagem com Vibe Coding

<i>Construção rápida do site usando HTML, CSS e JS, com apoio de IA para estrutura, DataTables, responsividade e UX.</i>

### 4. Evolução do Layout e UX

<i>Ajustes de cabeçalho, filtros por coluna, área rolável da tabela, tipografia e legibilidade.</i>

### 5. Filtros dinâmicos e busca

<i>Tabela gerada a partir do CSV via PapaParse, com selects automáticos e busca global flutuante.</i>

### 6. Dark Mode e mobile

<i>Modo escuro com persistência, layout adaptado para telas pequenas e botões reposicionados.</i>

### 7. Transformação em PWA

<i>Implementação de `manifest.json` e `service-worker.js` para permitir instalação e uso offline básico.</i>

---

## ✨ Funcionalidades principais

* 🔍 Busca global flutuante
* 🎯 Filtros por coluna (dinâmicos)
* 📱 Layout totalmente responsivo
* 🌙 Modo escuro com salvamento automático
* 📦 PWA instalável (mobile e desktop)
* 🧾 Atualização da base apenas trocando o CSV

---

## 🧱 Arquitetura dos arquivos

* **`index.html`** – estrutura do site, integração com DataTables e PapaParse
* **`data/rede_credenciada.csv`** – dados extraídos do PDF
* **`manifest.json`** – configuração do PWA
* **`service-worker.js`** – cache e suporte offline
* **`img/`** – ícones e logos do app

---

## 💻 Tecnologias utilizadas

* HTML5, CSS3, JavaScript (ES6)
* DataTables
* PapaParse
* PWA (Service Worker + Manifest)
* Fluxo Vibe Coding com IA
