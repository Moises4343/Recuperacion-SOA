import { Reservation } from '../../domain/entities/reservation.entity';
import ReservationModel from '../../infrastructure/database/models/reservation.model';

export class ReservationService {
    async createReservation(reservation: Reservation) {
        return await ReservationModel.create(reservation);
    }

    async getReservations() {
        return await ReservationModel.findAll();
    }

    async cancelReservation(id: string) {
        return await ReservationModel.update(
            { status: 'CANCELLED' },
            { where: { id } }
        );
    }
}
