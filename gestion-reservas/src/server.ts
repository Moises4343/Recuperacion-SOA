import dotenv from 'dotenv';
import express from 'express';
import { cancelReservation, createReservation, getReservations } from './infrastructure/controllers/reservation.controller';
import sequelize from './infrastructure/database/database';

dotenv.config();

const app = express();
app.use(express.json());

app.post('/reservations', createReservation);
app.get('/reservations', getReservations);
app.delete('/reservations/:id', cancelReservation);

const PORT = process.env.PORT || 3001;

sequelize.sync({ force: false }).then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
