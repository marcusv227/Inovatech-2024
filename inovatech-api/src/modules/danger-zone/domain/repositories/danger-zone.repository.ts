import { DangerZone } from '../entities/danger-zone.entity';

export interface IDangerZoneRepository {
  create(dangerZone: DangerZone): Promise<DangerZone>;
  findAll(): Promise<DangerZone[]>;
  findById(id: number): Promise<DangerZone | null>;
}
