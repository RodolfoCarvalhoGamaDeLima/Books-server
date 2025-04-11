const {
    getTodosFavoritos,
    insereFavorito,
    deletaFavoritoID
  } = require("../servicos/favoritos");
  

function getFavoritos(req, res) {
    try {
      const livros = getTodosFavoritos();
      res.send(livros);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

  function postFavorito(req, res) {
    try {
      const id = req.params.id;
  
      if (!id) {
        return res.status(400).send("ID inválido.");
      }
  
      insereFavorito(id); // agora sim, passa o ID como esperado
      res.status(201).send("Livro inserido com sucesso");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  

  function deletaFavorito (req, res) {
    try {
        const id = req.params.id
       
        if(id && Number(id)) {
          deletaFavoritoID(id)
          res.send("Favorito deletado com sucesso")
      } else {
          res.status(422)
          res.send("ID inválido")
      }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

module.exports = {
    getFavoritos,
    postFavorito,
    deletaFavorito,
}