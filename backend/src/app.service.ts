import { Injectable } from '@nestjs/common';

import { PI } from '@core';

@Injectable()
export class AppService {
  getHello(): String {
    return 'Hello PI?: ' + PI;
  }
}
