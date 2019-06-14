import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    // json = {
    //     'name': "test",
    //     'surname': "test",
    //     'var': 'test'
    // }

  getJohn() {
    return JSON.stringify({
        'name': 'John',
        'surname': 'TOTO'
    });
    // return this.json;
  }
}
