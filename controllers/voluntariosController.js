const db = require('../config/database');
const Voluntario = require('../models/Voluntario');

exports.getVoluntarios = async (req, res) => {
    try {
        const voluntarios = await Voluntario.findAll();
        res.json(voluntarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getVoluntarioById = async (req, res) => {
    try {
        const voluntario = await Voluntario.findByPk(req.params.id);
        if (voluntario) {
            res.json(voluntario);
        } else {
            res.status(404).json({ error: "Voluntario no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.createVoluntario = async (req, res) => {
    try {
        const voluntario = await Voluntario.create(req.body);
        res.status(201).json(voluntario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updateVoluntario = async (req, res) => {
    try {
        const updated = await Voluntario.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedVoluntario = await Voluntario.findByPk(req.params.id);
            res.json(updatedVoluntario);
        } else {
            res.status(404).json({ error: "Voluntario no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteVoluntario = async (req, res) => {
    try {
        const deleted = await Voluntario.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.json({ message: "Voluntario eliminado" });
        } else {
            res.status(404).json({ error: "Voluntario no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
