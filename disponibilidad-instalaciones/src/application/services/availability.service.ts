import { Availability } from '../../domain/entities/availability.entity';
import AvailabilityModel from '../../infrastructure/database/models/availability.model';

export class AvailabilityService {
    async createAvailability(availability: Availability) {
        return await AvailabilityModel.create(availability);
    }

    async getAvailabilities() {
        return await AvailabilityModel.findAll();
    }

    async updateAvailabilityStatus(id: string, status: 'AVAILABLE' | 'UNAVAILABLE') {
        return await AvailabilityModel.update(
            { status },
            { where: { id } }
        );
    }
}
