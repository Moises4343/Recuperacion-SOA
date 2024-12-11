import dotenv from 'dotenv';
import express from 'express';
import { createAvailability, getAvailabilities, updateAvailabilityStatus } from './infrastructure/controllers/availability.controller';
import sequelize from './infrastructure/database/database';

dotenv.config();

const app = express();
app.use(express.json());

app.post('/availabilities', createAvailability);
app.get('/availabilities', getAvailabilities);
app.patch('/availabilities/:id', updateAvailabilityStatus);

const PORT = process.env.PORT || 3002;

sequelize.sync({ force: false }).then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
