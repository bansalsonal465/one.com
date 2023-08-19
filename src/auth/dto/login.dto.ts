import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginDto {

  @IsNotEmpty()
  @ApiProperty({name: 'username', example: 'sonal005'})
  username: string;

  @IsNotEmpty()
  @ApiProperty({name: 'password', example: '1234567'})
  password: string;
}