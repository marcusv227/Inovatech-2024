import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../../application/services/user.service';
import { CreateUserDto } from '../../application/dto/create-user.dto';
import { User } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }
}
