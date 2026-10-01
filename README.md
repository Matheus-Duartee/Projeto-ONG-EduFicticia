# ONG EduFictícia - Aplicação Web SPA

## 📋 Visão Geral e Objetivo

Esta aplicação web foi desenvolvida como um projeto unificado do ciclo de desenvolvimento **Front-End**, abrangendo as fases estruturais, visuais, comportamentais e de acessibilidade.

Trata-se de uma **Single Page Application (SPA)** voltada para a gestão de uma organização não governamental, permitindo:

* Navegação fluida entre páginas;
* Formulários interativos;
* Validações dinâmicas;
* Interface responsiva;
* Recursos voltados à acessibilidade.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias nativas e modernas, evitando bibliotecas externas para garantir maior estabilidade, desempenho e facilidade de manutenção.

* **HTML5:** Estrutura semântica, com foco em acessibilidade e nas diretrizes **WCAG 2.1 Nível AA**.
* **CSS3:** Estilização modular e responsiva, permitindo a adaptação da interface a diferentes tamanhos de tela.
* **JavaScript (Vanilla JS):** Responsável pela lógica comportamental, manipulação do DOM, validações e gerenciamento das interações da aplicação.

## 🚀 Instruções de Execução Local

Para executar o projeto localmente no seu computador, siga os passos abaixo.

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/ong-eduficticia.git
```

### 2. Acessar a pasta do projeto

```bash
cd ong-eduficticia
```

### 3. Executar a aplicação

Abra a pasta do projeto em seu editor de código, como o **Visual Studio Code (VS Code)**.

Para executar a aplicação, existem duas opções:

#### Opção 1 — Live Server

Utilize a extensão **Live Server** no VS Code e abra o arquivo:

```text
index.html
```

A aplicação será executada em um servidor local de desenvolvimento.

#### Opção 2 — Abrir diretamente no navegador

Também é possível abrir o arquivo `index.html` diretamente no navegador, utilizando um duplo clique sobre o arquivo.

## 🌿 Estratégia de Versionamento — GitFlow

O desenvolvimento do projeto seguiu a metodologia **GitFlow**, garantindo organização, rastreabilidade e boas práticas no processo de desenvolvimento.

### Branches utilizadas

* **main:** Contém as versões estáveis e oficiais do projeto, prontas para produção.
* **develop:** Branch central utilizada para integração contínua das funcionalidades em desenvolvimento.
* **feature/:** Branches destinadas ao desenvolvimento isolado de novas funcionalidades, melhorias e recursos de acessibilidade.

### 📝 Padrão de Commits

O histórico de alterações segue o padrão **Conventional Commits**, utilizando categorias para identificar o tipo de alteração realizada:

* `feat` — Adição de novas funcionalidades.
* `style` — Alterações relacionadas à estilização e formatação.
* `fix` — Correção de erros e problemas.
* `refactor` — Refatoração do código sem alteração de comportamento.

### 🏷️ Versionamento

O projeto utiliza **Semantic Versioning (SemVer)** para identificação das versões.

As releases foram organizadas por meio de tags semânticas, abrangendo versões de:

```text
v1.0.0
v2.0.0
v3.0.0
v4.0.0
```

Esse sistema facilita a identificação da evolução do projeto e permite acompanhar as principais mudanças realizadas ao longo do desenvolvimento.
