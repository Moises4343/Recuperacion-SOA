import { DataTypes } from 'sequelize';
import sequelize from '../database';

const ReservationModel = sequelize.define('Reservation', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    facilityId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    startTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('CONFIRMED', 'CANCELLED'),
        defaultValue: 'CONFIRMED',
    },
}, {
    timestamps: true,
    tableName: 'reservations',
});

export default ReservationModel;
