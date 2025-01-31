import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroController } from './superhero.controller';
import { SuperheroService } from './superhero.service';

describe('SuperheroController', () => {
  let controller: SuperheroController;
  let service: SuperheroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroController],
      providers: [SuperheroService],
    }).compile();

    controller = module.get<SuperheroController>(SuperheroController);
    service = module.get<SuperheroService>(SuperheroService);
  });

  it('should create a superhero', () => {
    const superhero = {
      name: 'Test Hero',
      superpower: 'Testing',
      humilityScore: 8,
    };

    const result = controller.create(superhero);
    expect(result).toEqual(superhero);
  });

  it('should create a superhero with minimum humility score', () => {
    const superhero = {
      name: 'Arrogant Hero',
      superpower: 'Testing',
      humilityScore: 1,
    };

    const result = controller.create(superhero);
    expect(result).toEqual(superhero);
  });

  it('should create a superhero with maximum humility score', () => {
    const superhero = {
      name: 'Humble Hero',
      superpower: 'Testing',
      humilityScore: 10,
    };

    const result = controller.create(superhero);
    expect(result).toEqual(superhero);
  });

  it('should return sorted superheroes', () => {
    const superhero1 = {
      name: 'Hero 1',
      superpower: 'Power 1',
      humilityScore: 5,
    };
    const superhero2 = {
      name: 'Hero 2',
      superpower: 'Power 2',
      humilityScore: 8,
    };

    controller.create(superhero1);
    controller.create(superhero2);

    const result = controller.findAll();
    expect(result[0].humilityScore).toBe(8);
    expect(result[1].humilityScore).toBe(5);
  });

  it('should return empty array when no superheroes exist', () => {
    const result = controller.findAll();
    expect(result).toEqual([]);
  });

  it('should maintain sort order with equal humility scores', () => {
    const superhero1 = {
      name: 'Hero 1',
      superpower: 'Power 1',
      humilityScore: 7,
    };
    const superhero2 = {
      name: 'Hero 2',
      superpower: 'Power 2',
      humilityScore: 7,
    };

    controller.create(superhero1);
    controller.create(superhero2);

    const result = controller.findAll();
    expect(result).toHaveLength(2);
    expect(result[0].humilityScore).toBe(7);
    expect(result[1].humilityScore).toBe(7);
  });
});