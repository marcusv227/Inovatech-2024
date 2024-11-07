export class DangerZone {
    id: number;
    userId: number;
    latitude: number;
    longitude: number;
    createdAt: Date;
    perimeter: number;
  
    constructor(
      id: number,
      userId: number,
      latitude: number,
      longitude: number,
      perimeter: number,
      createdAt: Date
    ) {
      if (latitude < -90 || latitude > 90) {
        throw new Error('Latitude must be between -90 and 90');
      }
      if (longitude < -180 || longitude > 180) {
        throw new Error('Longitude must be between -180 and 180');
      }
  
      this.id = id;
      this.userId = userId;
      this.latitude = latitude;
      this.longitude = longitude;
      this.perimeter = perimeter;
      this.createdAt = createdAt;
    }
  }
  