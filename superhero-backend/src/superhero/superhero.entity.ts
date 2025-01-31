import { ApiProperty } from '@nestjs/swagger';

export class Superhero {
    @ApiProperty({
        description: 'The name of the superhero',
        example: 'Spider-Man'
    })
    name: string;

    @ApiProperty({
        description: 'The superpower of the hero',
        example: 'Web-slinging'
    })
    superpower: string;

    @ApiProperty({
        description: 'How humble the hero is (1-10)',
        minimum: 1,
        maximum: 10,
        example: 8
    })
    humilityScore: number;
}