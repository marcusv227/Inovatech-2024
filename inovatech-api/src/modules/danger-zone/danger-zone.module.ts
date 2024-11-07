import { Module } from '@nestjs/common';
import { DangerZoneController } from './interfaces/http/danger-zone.controller';
import { DangerZoneService } from './application/services/danger-zone.service';
import { PrismaDangerZoneRepository } from './infra/prisma/danger-zone.prisma.repository';
import { CreateDangerZoneUseCase } from './application/use-cases/create-danger-zone.usecase';
import { PrismaModule } from 'src/common/prisma/prisma.module'; 

@Module({
  imports: [PrismaModule],
  controllers: [DangerZoneController],
  providers: [
    DangerZoneService,
    CreateDangerZoneUseCase,
    { provide: 'IDangerZoneRepository', useClass: PrismaDangerZoneRepository },
  ],
})
export class DangerZoneModule {}
