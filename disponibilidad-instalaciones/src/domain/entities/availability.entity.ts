export interface Availability {
    id: string;
    facilityId: string;
    date: Date;
    startTime: string; // Format: HH:mm:ss
    endTime: string;   // Format: HH:mm:ss
    status: 'AVAILABLE' | 'UNAVAILABLE';
}
