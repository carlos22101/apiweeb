const express = require('express');
const sequelize = require('./config/database');
const voluntariosRoutes = require('./routes/voluntarios');
const proyectosRoutes = require('./routes/proyectos');
const asignacionesRoutes = require('./routes/asignaciones');
const cors =require('cors')

const app = express();
app.use(cors({
    origin: 'http://52.70.189.53' 
  }));
  
app.use(express.json());  

app.use('/api/voluntarios', voluntariosRoutes);
app.use('/api/proyectos', proyectosRoutes);
app.use('/api/asignaciones', asignacionesRoutes);

sequelize.sync()
    .then(() => {
        app.listen(3000, () => console.log('Server running on port 3000'));
    })
    .catch(error => console.error('Unable to connect to the database:', error));
