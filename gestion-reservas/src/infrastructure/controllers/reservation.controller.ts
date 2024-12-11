import { Request, Response } from 'express';
import { ReservationService } from '../../application/services/reservation.service';

const reservationService = new ReservationService();

export const createReservation = async (req: Request, res: Response) => {
    try {
        const reservation = await reservationService.createReservation(req.body);
        res.status(201).json(reservation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getReservations = async (_: Request, res: Response) => {
    try {
        const reservations = await reservationService.getReservations();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const cancelReservation = async (req: Request, res: Response) => {
    try {
        await reservationService.cancelReservation(req.params.id);
        res.status(200).json({ message: 'Reservation cancelled successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
