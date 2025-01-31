import { Injectable } from '@nestjs/common';
import { Superhero } from './superhero.entity';
import { CreateSuperheroDto } from '../dto/create-superhero.dto';

@Injectable()
export class SuperheroService {
  private superheroes: Superhero[] = [];

  create(createSuperheroDto: CreateSuperheroDto): Superhero {
    const superhero = {
      ...createSuperheroDto,
    };
    this.superheroes.push(superhero);
    return superhero;
  }

  findAll(): Superhero[] {
    return [...this.superheroes].sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
