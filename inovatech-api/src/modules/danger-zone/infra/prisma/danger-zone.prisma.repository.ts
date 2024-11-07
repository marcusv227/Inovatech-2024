import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { IDangerZoneRepository } from '../../domain/repositories/danger-zone.repository';
import { DangerZone } from '../../domain/entities/danger-zone.entity';

@Injectable()
export class PrismaDangerZoneRepository implements IDangerZoneRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dangerZone: DangerZone): Promise<DangerZone> {
    const createdZone = await this.prisma.dangerZone.create({
      data: {
      userId: dangerZone.userId,
      perimeter: dangerZone.perimeter,
      latitude: dangerZone.latitude,
      longitude: dangerZone.longitude,
      createdAt: dangerZone.createdAt,
      },
    });
    return new DangerZone(createdZone.id, createdZone.userId, createdZone.perimeter, createdZone.latitude, createdZone.longitude, createdZone.createdAt);
  }

  async findAll(): Promise<DangerZone[]> {
    const zones = await this.prisma.dangerZone.findMany();
    return zones.map(zone => new DangerZone(zone.id, zone.userId, zone.perimeter, zone.latitude, zone.longitude, zone.createdAt));
  }

  async findById(id: number): Promise<DangerZone | null> {
    const zone = await this.prisma.dangerZone.findUnique({ where: { id } });
    if (!zone) return null;
    return new DangerZone(zone.id, zone.userId, zone.perimeter, zone.latitude, zone.longitude, zone.createdAt);
  }
}
