const Asignacion = require('../models/Asignacion');

exports.getAllAsignaciones = async (req, res) => {
    try {
        const asignaciones = await Asignacion.findAll();
        res.json(asignaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAsignacionById = async (req, res) => {
    try {
        const asignacion = await Asignacion.findByPk(req.params.id);
        if (asignacion) {
            res.json(asignacion);
        } else {
            res.status(404).json({ error: "Asignación no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createAsignacion = async (req, res) => {
    try {
        const asignacion = await Asignacion.create(req.body);
        res.status(201).json(asignacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateAsignacion = async (req, res) => {
    try {
        const updated = await Asignacion.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedAsignacion = await Asignacion.findByPk(req.params.id);
            res.json(updatedAsignacion);
        } else {
            res.status(404).json({ error: "Asignación no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteAsignacion = async (req, res) => {
    try {
        const deleted = await Asignacion.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.json({ message: "Asignación eliminada" });
        } else {
            res.status(404).json({ error: "Asignación no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
