import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('signup')
  signup() {
    return { ok: true, userId: 'stub' };
  }

  @Post('login')
  login() {
    return { ok: true, token: 'stub.jwt.token' };
  }
}
