export interface Reservation {
    id: string;
    userId: string;
    facilityId: string;
    startTime: Date;
    endTime: Date;
    status: 'CONFIRMED' | 'CANCELLED';
}
