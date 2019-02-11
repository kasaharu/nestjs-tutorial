import { Controller, Get, Post, Body } from '@nestjs/common';

import { CatsService } from './cats.service';

export type CatType = { id: number; name: string };

@Controller('cats')
export class CatsController {
  cats: CatType[];
  constructor(private readonly catsService: CatsService) {
    this.cats = this.catsService.fetchCats();
  }

  // NOTE: 期待するリクエスト
  //       curl -X GET http://localhost:3000/cats
  @Get()
  findAll(): CatType[] {
    return this.cats;
  }

  // NOTE: 期待するリクエスト
  //       curl -X GET http://localhost:3000/cats/help
  @Get('/help')
  help(): string {
    return 'This request returns cats';
  }

  // NOTE: 期待するリクエスト
  //       curl -X POST -H "Content-Type: application/json" http://localhost:3000/cats -d '{ "name": "Dave" }'
  @Post()
  create(@Body() body) {
    const newItem = { ...body, id: this.cats.length + 1 };
    this.cats.push(newItem);
    return 'This action adds a new cat';
  }
}
