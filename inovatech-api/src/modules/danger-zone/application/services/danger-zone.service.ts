import { Inject, Injectable } from '@nestjs/common';
import { CreateDangerZoneUseCase } from '../use-cases/create-danger-zone.usecase';
import { IDangerZoneRepository } from '../../domain/repositories/danger-zone.repository';
import { CreateDangerZoneDto } from '../dto/create-danger-zone.dto';

@Injectable()
export class DangerZoneService {
  constructor(
    private readonly createDangerZoneUseCase: CreateDangerZoneUseCase,
    @Inject('IDangerZoneRepository') 
    private readonly dangerZoneRepository: IDangerZoneRepository,
  ) {}
  
  async create(createDangerZoneDto: CreateDangerZoneDto) {
    try {
      return await this.createDangerZoneUseCase.execute(createDangerZoneDto);
    } catch (error) {
      throw new Error('Error creating danger zone: ' + error.message);
    }
  }

  async findAllDangerZones() {
    try {
      return await this.dangerZoneRepository.findAll();
    } catch (error) {
      throw new Error('Error fetching danger zones: ' + error.message);
    }
  }
}
