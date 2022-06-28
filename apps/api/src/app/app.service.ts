import { Injectable } from '@nestjs/common';
import { Message } from '@pomo/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
