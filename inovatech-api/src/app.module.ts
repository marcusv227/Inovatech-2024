import { Module } from '@nestjs/common';
import { DangerZoneModule } from './modules/danger-zone/danger-zone.module';
import { UsersModule } from './modules/user/user.module';
import { PrismaService } from './common/prisma/prisma.service'; // PrismaService para conexão com o BD

@Module({
  imports: [
    DangerZoneModule,
    UsersModule,      
  ],
  providers: [PrismaService],
})
export class AppModule {}
