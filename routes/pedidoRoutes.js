const express = require("express");
const router = express.Router();
const pedidoController = require("../controller/pedidoController");

router.post("/", pedidoController.crearPedido)
router.get("/", pedidoController.obtenerPedido)
router.put("/:id", pedidoController.actualizarPedido)


module.exports= router;