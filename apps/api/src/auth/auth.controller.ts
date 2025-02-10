import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('signup')
  signup(@Body() _dto: any) {
    return { ok: true, userId: 'stub' };
  }

  @Post('login')
  login(@Body() _dto: any) {
    return { ok: true, token: 'stub.jwt.token' };
  }
}
