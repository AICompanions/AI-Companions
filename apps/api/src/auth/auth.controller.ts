import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('signup')
  signup(@Body() dto: any) {
    return { ok: true, userId: 'stub' };
  }

  @Post('login')
  login(@Body() dto: any) {
    return { ok: true, token: 'stub.jwt.token' };
  }
}
