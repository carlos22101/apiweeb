const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Voluntario = sequelize.define('Voluntario', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    apellido: { type: DataTypes.STRING, allowNull: false },
    correo: { type: DataTypes.STRING, allowNull: false, unique: true },
    area_interes: { type: DataTypes.STRING, allowNull: true },
    disponibilidad_horaria: { type: DataTypes.STRING, allowNull: true },
    cuota_horas: { type: DataTypes.INTEGER, allowNull: true },
    estado: { type: DataTypes.STRING, allowNull: true }
}, { tableName: 'voluntarios', timestamps: false });

module.exports = Voluntario;
