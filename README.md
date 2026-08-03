# 📚 BibliotecaJS

Mini-projeto Avaliativo - Módulo 01 SCTEC.

## 📝 Sobre o Projeto

Projeto de modernização de uma biblioteca com sistema gerenciável de acervo. Trata-se de uma aplicação JavaScript via console capaz de gerenciar os livros e usuários da biblioteca.

## 🎯 Objetivo

Criar uma aplicação JavaScript que gerencia uma biblioteca de forma prática e modularizada.

## 🚀 Como Executar

Siga os passos abaixo para rodar a aplicação em sua máquina:

1. Certifique-se de ter o **Node.js** instalado.
2. Abra o terminal na pasta raiz do projeto (`bibliotecaJS/`).
3. Instale as dependências necessárias (caso utilize alguma biblioteca como `readline-sync`):
   ```bash
   npm install
   ```
4. Instale a biblioteca `prompt-sync` para permitir entradas do usuário pelo console:
   ```bash
   npm install prompt-sync
   ```  
5. Execute o arquivo principal para iniciar o menu:
   ```bash
   node index.js
   ```

6. Visual do Menu

Quando a aplicação é iniciada, o usuário visualiza o seguinte menu interativo no console:

```text
=================================
SISTEMA DE BIBLIOTECA
=================================

1 - Listar livros  # Será usada quando o usuário digitar a opção 1 no menu inicial.
2 - Buscar livro   # Será usada quando o usuário digitar a opção 2 no menu inicial, deverá digitar o nome do livro.
3 - Listar livros disponíveis # Será usada quando o usuário digitar a opção 3 no menu inicial, monstra
4 - Cadastrar livro # Será usada quando o usuário digitar a opção 4 no menu inicial, solicitar os dados ao usuário
5 - Realizar empréstimo
6 - Realizar devolução
7 - Exibir estatísticas
0 - Sair
```
O menu continuará a exibir até o usuário escholher a opção 0.




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
