import { Request, Response } from 'express';
import { AvailabilityService } from '../../application/services/availability.service';

const availabilityService = new AvailabilityService();

export const createAvailability = async (req: Request, res: Response) => {
    try {
        const availability = await availabilityService.createAvailability(req.body);
        res.status(201).json(availability);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAvailabilities = async (_: Request, res: Response) => {
    try {
        const availabilities = await availabilityService.getAvailabilities();
        res.status(200).json(availabilities);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateAvailabilityStatus = async (req: Request, res: Response) => {
    try {
        const { status } = req.body;
        await availabilityService.updateAvailabilityStatus(req.params.id, status);
        res.status(200).json({ message: 'Availability status updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
