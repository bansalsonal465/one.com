import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';


@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService
    ) {

    }

    @Post()
    @ApiBody({ type: LoginDto })
    async register(@Body() loginDto: LoginDto): Promise<any> {
        try {
            let user = await this.usersService.findByUsername(loginDto.username);
            if (!user) {
                return {
                    'success': false,
                    'message': 'Unauthorized user'
                }
            }
            let validate = await this.usersService.valiDateUser(loginDto.password, user.password);
            if (!validate) {
                return {
                    'success': false,
                    'message': 'Unauthorized user'
                }
            }
            let token = await this.authService.generateToken(loginDto.username);

            return {
                'success': true,
                'message': 'Token generated',
                data: token
            }
        } catch (error) {

        }
    }
}
