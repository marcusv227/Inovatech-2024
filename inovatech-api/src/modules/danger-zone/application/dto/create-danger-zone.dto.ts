import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateDangerZoneDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    userId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    latitude: number;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    longitude: number;
  }