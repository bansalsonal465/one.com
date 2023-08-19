import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  @ApiProperty({name: 'username', example: 'sonal005'})
  username: string;

  @IsNotEmpty()
  @ApiProperty({name: 'password', example: '1234567'})
  password: string;

  @IsNotEmpty()
  @ApiProperty({name: 'role', example: 1})
  role: number;
}