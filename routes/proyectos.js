const express = require('express');
const router = express.Router();
const proyectosController = require('../controllers/proyectosController');

router.get('/', proyectosController.getProyectos);
router.get('/:id', proyectosController.getProyectoById);
router.post('/', proyectosController.createProyecto);
router.put('/:id', proyectosController.updateProyecto);
router.delete('/:id', proyectosController.deleteProyecto);

module.exports = router;
