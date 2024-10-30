const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Voluntario = require('./Voluntario');
const Proyecto = require('./Proyecto');

const Asignacion = sequelize.define('Asignacion', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    voluntario_id: { 
        type: DataTypes.INTEGER,
        references: { model: Voluntario, key: 'id' }
    },
    proyecto_id: { 
        type: DataTypes.INTEGER,
        references: { model: Proyecto, key: 'id_proyecto' }
    },
    fecha_asignacion: { type: DataTypes.DATEONLY, allowNull: false },
    horas_trabajadas: { type: DataTypes.INTEGER, allowNull: false },
    horas_semanales: { type: DataTypes.INTEGER, allowNull: false },
    horas_mensuales: { type: DataTypes.INTEGER, allowNull: false },
    evaluacion: { type: DataTypes.TEXT, allowNull: true },
    comentarios: { type: DataTypes.TEXT, allowNull: true }
}, { tableName: 'asignaciones', timestamps: false });

module.exports = Asignacion;
