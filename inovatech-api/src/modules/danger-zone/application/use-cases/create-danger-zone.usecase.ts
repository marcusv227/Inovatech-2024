import { IDangerZoneRepository } from '../../domain/repositories/danger-zone.repository';
import { DangerZone } from '../../domain/entities/danger-zone.entity';
import { CreateDangerZoneDto } from '../dto/create-danger-zone.dto';
import { v4 as generateUUID } from 'uuid';

export class CreateDangerZoneUseCase {
  constructor(private readonly dangerZoneRepository: IDangerZoneRepository) {}

  async execute(createDangerZoneDto: CreateDangerZoneDto): Promise<DangerZone> {
    const perimeter = calculatePerimeter(createDangerZoneDto.latitude, createDangerZoneDto.longitude);
    const id = generateUUID();
    const dangerZone = new DangerZone(
      id,
      createDangerZoneDto.userId,
      createDangerZoneDto.latitude,
      createDangerZoneDto.longitude,
      perimeter,
      new Date()
    );
    return await this.dangerZoneRepository.create(dangerZone);
  }
}
function calculatePerimeter(latitude: number, longitude: number): number {
  const R = 6371;
  const latRadians = (latitude * Math.PI) / 180;
  const lonRadians = (longitude * Math.PI) / 180;

  const dLat = 0.01;
  const dLon = 0.01;

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(latRadians) * Math.cos(latRadians) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;

  const radius = distance / 2;
  const perimeter = 2 * Math.PI * radius;

  return perimeter;
}

