const {Router} = require("express")
const {getFavoritos, postFavorito, deletaFavorito } = require("../controladores/favoritos")

const router = Router ()

router.get ('/',getFavoritos)

router.post ('/:id',postFavorito)

router.delete ('/:id',deletaFavorito)

module.exports = router