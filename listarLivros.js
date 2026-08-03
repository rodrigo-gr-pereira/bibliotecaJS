import { dadosLivros} from "./dadosLivros.js";

// Função responsável por listar os livros no console
 function listarLivros() {
    console.log("\n=== LISTA DE LIVROS ===");
    
    // Verifica se o array está vazio
    if (dadosLivros.length === 0) {
        console.log("Nenhum livro cadastrado.");
        return;
    }

    // Percorre o array de livros
    dadosLivros.forEach((livro, index) => {
        console.log(`\nLivro #${index + 1}`);
        console.log(`Título: ${livro.titulo.toUpperCase()}`); // Título convertido para letras maiúsculas
        console.log(`Autor: ${livro.autor}`);
        console.log(`Categoria: ${livro.categoria}`);
        console.log(`Número de páginas: ${livro.paginas}`);
        console.log(`Disponibilidade: ${livro.disponivel ? "Disponível" : "Indisponível"}`);
    });
}
export { listarLivros };