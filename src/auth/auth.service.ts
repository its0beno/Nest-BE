import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return {
      msg: 'I am Signed IN',
    };
  }
  signup() {
    return { msg: 'i am Signed UP' };
  }
}
