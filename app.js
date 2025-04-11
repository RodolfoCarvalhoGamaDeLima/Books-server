const express = require ("express")

const rotaLivro = require ("./rotas/livro")
const rotaFavorito = require ("./rotas/favoritos")

const app = express ()


const cors = require ("cors")

app.use(express.json())
app.use(cors({origin: "*"}))
app.use(express.json()); // <- ESSENCIAL para ler req.body


const port = 8000 

app.use ('/livros',rotaLivro),
app.use('/favoritos', rotaFavorito)
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
