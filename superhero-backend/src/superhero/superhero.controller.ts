import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto } from '../dto/create-superhero.dto';
import { Superhero } from './superhero.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('superheroes')
@Controller('superheroes')
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new superhero' })
  @ApiResponse({ status: 201, description: 'The superhero has been successfully created.', type: Superhero })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createSuperheroDto: CreateSuperheroDto): Superhero {
    return this.superheroService.create(createSuperheroDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all superheroes' })
  @ApiResponse({ status: 200, description: 'Return all superheroes sorted by humility score.', type: [Superhero] })
  findAll(): Superhero[] {
    return this.superheroService.findAll();
  }
}