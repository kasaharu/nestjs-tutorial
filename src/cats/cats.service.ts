import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  fetchCats() {
    return [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Carol' }];
  }
}
