import { Controller, Get } from '@nestjs/common';
import { AuthUserDTO } from './dto/auth.user.dto';
import { AuthService } from './auth.service';

//
// JWT Authentication Controller TBD
//

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('me')
    getMe(): AuthUserDTO {
        return this.authService.getMe('1234567890');
    }
}
