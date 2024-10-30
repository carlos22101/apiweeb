const express = require('express');
const router = express.Router();
const asignacionesController = require('../controllers/asignacionesController'); 


router.get('/', asignacionesController.getAllAsignaciones);
router.post('/', asignacionesController.createAsignacion);
router.get('/:id', asignacionesController.getAsignacionById);
router.put('/:id', asignacionesController.updateAsignacion);
router.delete('/:id', asignacionesController.deleteAsignacion);

module.exports = router;
