import { Controller } from '@nestjs/common';
import { AuthService}  from  './auth.service';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {

    @Post()
    signInLocal() {
        return this.authService.signInLocal
    }

    signUpLocal() {
        return this.authService.signUpLocal
    }

    }
}