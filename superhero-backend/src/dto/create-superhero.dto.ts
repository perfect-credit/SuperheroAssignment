import { IsString, IsInt, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSuperheroDto {
  @ApiProperty({
    description: 'The name of the superhero',
    example: 'Spider-Man'
  })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @ApiProperty({
    description: 'The superpower of the hero',
    example: 'Web-slinging'
  })
  @IsString({ message: 'Superpower must be a string' })
  superpower: string;

  @ApiProperty({
    description: 'How humble the hero is (1-10)',
    minimum: 1,
    maximum: 10,
    example: 8
  })
  @IsInt({ message: 'Humility score must be an integer' })
  @Min(1, { message: 'Humility score must be at least 1' })
  @Max(10, { message: 'Humility score must be at most 10' })
  humilityScore: number;
}