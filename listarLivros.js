// Exemplo de como a estrutura do array de livros deve ser para funcionar com a função
// (Caso o array venha de outro arquivo, você pode importá-lo)
 const livros = [
    {
        titulo: "O Senhor dos Aneis",
        autor: "J.R.R. Tolkien",
        categoria: "Fantasia",
        paginas: 1200,
        disponivel: true
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        categoria: "Distopia",
        paginas: 416,
        disponivel: false
    },
    {
        titulo: "O Pequeno Principe",
        autor: "Antoine de Saint-Exupéry",
        categoria: "Infantil",
        paginas: 96,
        disponivel: true
    }
];

// Função responsável por listar os livros no console
 function listarLivros() {
    console.log("\n=== LISTA DE LIVROS ===");
    
    // Verifica se o array está vazio
    if (livros.length === 0) {
        console.log("Nenhum livro cadastrado.");
        return;
    }

    // Percorre o array de livros
    livros.forEach((livro, index) => {
        console.log(`\nLivro #${index + 1}`);
        console.log(`Título: ${livro.titulo.toUpperCase()}`); // Título convertido para letras maiúsculas
        console.log(`Autor: ${livro.autor}`);
        console.log(`Categoria: ${livro.categoria}`);
        console.log(`Número de páginas: ${livro.paginas}`);
        console.log(`Disponibilidade: ${livro.disponivel ? "Disponível" : "Indisponível"}`);
    });
}
export { listarLivros, livros };