import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

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
  //       curl -X GET http://localhost:3000/cats/2
  @Get(':id')
  find(@Param('id') id): CatType {
    return this.cats.find(cat => cat.id === +id);
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

  // NOTE: 期待するリクエスト
  //       curl -X PUT -H "Content-Type: application/json" http://localhost:3000/cats/3 -d '{ "name": "Charlie" }'
  @Put(':id')
  update(@Param('id') id, @Body() body) {
    this.cats.forEach(cat => {
      if (cat.id === +id) {
        cat.name = body.name;
      }
    });
    return `This action updates a #${id} cat`;
  }

  // NOTE: 期待するリクエスト
  //       curl -X DELETE -H "Content-Type: application/json" http://localhost:3000/cats/2
  @Delete(':id')
  delete(@Param('id') id) {
    const cloneCats = this.cats;
    this.cats = cloneCats.filter(cat => cat.id !== +id);
    return `This action removes a #${id} cat`;
  }
}
