import { DataTypes } from 'sequelize';
import sequelize from '../database';

const AvailabilityModel = sequelize.define('Availability', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    facilityId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    startTime: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    endTime: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('AVAILABLE', 'UNAVAILABLE'),
        defaultValue: 'AVAILABLE',
    },
}, {
    timestamps: true,
    tableName: 'availabilities',
});

export default AvailabilityModel;
