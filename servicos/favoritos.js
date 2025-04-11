const fs = require('fs');

function getTodosFavoritos () {
    return  JSON.parse(fs.readFileSync("favoritos.json"))
} 

function deletaFavoritoID (id) {
    const livros = JSON.parse(fs.readFileSync("favoritos.json"))

    const livrosFiltrados = livros.filter (livro => livro.id !== id)
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados))
}

function insereFavorito(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"));
  
    const LivroInserido = livros.find((livro) => livro.id === Number(id));
  
    if (!LivroInserido) {
      throw new Error("Livro não encontrado");
    }
  
    const novaListaDeFavoritos = [...favoritos, LivroInserido];
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeFavoritos, null, 2));
  }
  

module.exports = {
    getTodosFavoritos,
    deletaFavoritoID,
    insereFavorito,
}