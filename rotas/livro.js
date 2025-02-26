const {Router} = require ("express")

const {getLivros, getLivro, postLivro} = require ("../controladores/livros")

const router = Router ()


router.get('/',getLivros )
router.get('/:id',getLivro )
router.post ('/', postLivro )

router.patch ('/', (req, res) => {
    res.send("voce fez requisicao do tipo patch")
})

router.delete ('/', (req, res) => {
    res.send("voce fez requisicao do tipo delete")
})


module.exports = router