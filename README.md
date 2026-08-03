# 📚 BibliotecaJS

Mini-projeto Avaliativo - Módulo 01 SCTEC.

## 📝 Sobre o Projeto

Projeto de modernização de uma biblioteca com sistema gerenciável de acervo. Trata-se de uma aplicação JavaScript via console capaz de gerenciar os livros e usuários da biblioteca.

## 🎯 Objetivo

Criar uma aplicação JavaScript que gerencia uma biblioteca de forma prática e modularizada.

## 🚀 Como Executar

Siga os passos abaixo para rodar a aplicação em sua máquina:

1. Certifique-se de ter o **Node.js** instalado.
2. Abra o terminal na pasta raiz do projeto (`biblioteca-js/`).
3. Instale as dependências necessárias (caso utilize alguma biblioteca como `readline-sync`):
   ```bash
   npm install
   ```
4. Execute o arquivo principal para iniciar o menu:
   ```bash
   node index.js
   ```

## 📂 Estrutura do Projeto

```text
biblioteca-js/
├── index.js                # Menu principal e fluxo da aplicação
├── listarLivros.js         # Lista todos os livros do acervo (RF01/RF02)
├── buscarLivro.js          # Busca um livro por título (RF03)
├── listarDisponiveis.js    # Filtra e exibe livros com status disponível (RF04)
├── cadastrarLivro.js       # Adiciona novos livros ao acervo
├── realizarEmprestimo.js   # Gerencia o empréstimo de livros
├── realizarDevolucao.js    # Gerencia a devolução de livros
├── exibirEstatisticas.js   # Exibe relatórios e dados do acervo
├── dadosLivros.js          # Base de dados (Array de objetos) dos livros
├── Livro.js                # Classe ou construtor do objeto Livro
├── README.md               # Documentação do projeto
└── package.json            # Dependências e scripts do projeto
```

## 🎥 Demonstração

* [Clique aqui para assistir ao vídeo demonstrando o funcionamento da aplicação](#) *(Substitua este link pelo link do seu vídeo)*
