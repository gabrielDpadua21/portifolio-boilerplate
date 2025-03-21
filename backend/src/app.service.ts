import { Injectable } from '@nestjs/common';
import { Id } from '@core';

@Injectable()
export class AppService {
  getHello(): String {
    return 'Hello ID: ' + Id.generate();
  }
}
