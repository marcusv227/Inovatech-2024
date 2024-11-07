import { Controller, Get, Post, Body } from '@nestjs/common';
import { DangerZoneService } from '../../application/services/danger-zone.service';
import { CreateDangerZoneDto } from '../../application/dto/create-danger-zone.dto';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('Danger Zones')
@Controller('danger-zones')
export class DangerZoneController {
  constructor(private readonly dangerZoneService: DangerZoneService) {}

  @Post('/create-danger-zone')
  @ApiProperty({ type: CreateDangerZoneDto })
  async createDangerZone(@Body() createDangerZoneDto: CreateDangerZoneDto) {
    return this.dangerZoneService.create(createDangerZoneDto);
  }

  @Get('/get-danger-zones')
  @ApiProperty()
  async findAllDangerZones() {
    return this.dangerZoneService.findAllDangerZones();
  }
}
