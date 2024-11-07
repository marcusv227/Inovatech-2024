import { Module } from '@nestjs/common';
import { UsersService } from './application/services/user.service';
import { UsersController } from './interfaces/http/user.controller';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class UsersModule {}
