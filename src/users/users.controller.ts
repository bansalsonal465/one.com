import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBody } from '@nestjs/swagger';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) { }

    @Post()
    @ApiBody({ type: CreateUserDto })
    async register(@Body() createUserDto: CreateUserDto): Promise<any> {
        try {
            let user = await this.usersService.findByUsername(createUserDto.username);
            if (user) {
                return {
                    'success': false,
                    'message': `User does'not exists`
                }
            }
            let userDetails = await this.usersService.register(createUserDto);

            return {
                'success': true,
                'message': 'User registered',
                data: userDetails
            }
        } catch (error) {
           return {
                'success': false,
                'message': `User does'not exists`
            }
        }
    }
}
