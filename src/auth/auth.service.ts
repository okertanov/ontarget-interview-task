import { Injectable } from '@nestjs/common';
import { AuthUserDTO } from './dto/auth.user.dto';

//
// JWT Authentication Service TBD
//


@Injectable()
export class AuthService {
    getMe(id: string): AuthUserDTO {
        return  new AuthUserDTO(
            '1234567890',
            'john.doe@example.com',
            'John',
            'Doe',
        );
    }
}
