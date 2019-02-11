import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  fetchCats() {
    return [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Carol' },
    ];
  }
}
