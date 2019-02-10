import { Controller, Get, Post, Body } from '@nestjs/common';

import { CatsService } from './cats.service';

export type CatType = { name: string };

@Controller('cats')
export class CatsController {
  cats: CatType[];
  constructor(private readonly catsService: CatsService) {
    this.cats = this.catsService.fetchCats();
  }

  @Get()
  findAll(): CatType[] {
    return this.cats;
  }

  @Post()
  create(@Body() body) {
    this.cats.push(body);
    return 'This action adds a new cat';
  }
}
