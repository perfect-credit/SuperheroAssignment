# Humble Superhero API

A NestJS-based API that celebrates the superhero in every team member by tracking their unique powers and humility scores.

## Project Overview

The Humble Superhero API allows users to:
- Create new superheroes with their names, superpowers, and humility scores
- Retrieve a list of superheroes sorted by their humility scores (most humble first)

## Technical Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **Documentation**: Swagger/OpenAPI
- **Validation**: class-validator
- **Testing**: Jest

## Getting Started on Local

1. **Installation**
```bash
npx yarn
```

2. **Running the app**
```bash
# development
npx yarn start

# watch mode
npx yarn start:dev

# production mode
npx yarn start:prod
```

3. **Testing**
```bash
# unit tests
npx yarn test

# e2e tests
npx yarn test:e2e

# test coverage
npx yarn test:cov
```
I'll help you add Docker-related instructions to the README.md file. I'll add a new section after the "Getting Started" section. Here's the addition:

## Running with Docker

1. **Build and Run using Docker Compose**
```bash
docker-compose up --build
```

2. **Access the Applications**
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3001`
- Swagger Documentation: `http://localhost:3001/api`

3. **Stop the Containers**
```bash
docker-compose down
```

### Docker Development Notes
- The backend service runs on port 3001 (mapped from container port 3000)
- The frontend service runs on port 5173 (mapped from container port 4173)
- Both services are connected through a Docker network named 'superhero-network'
- Environment variables can be configured in the docker-compose.yml file

## API Endpoints

### Create a Superhero
- **POST** `/superheroes`
- **Body**:
```json
{
  "name": "Spider-Man",
  "superpower": "Web-slinging",
  "humilityScore": 8
}
```
- **Validation**:
  - Name: Required string
  - Superpower: Required string
  - Humility Score: Number between 1-10

### Get All Superheroes
- **GET** `/superheroes`
- Returns a list of superheroes sorted by humility score (descending)

## API Documentation

The API is documented using Swagger. Once the application is running, visit:
`http://localhost:3000/api` to access the Swagger UI documentation.

## Code Structure

- `src/superhero/` - Contains superhero-related modules, controllers, and services
- `src/dto/` - Data Transfer Objects for request validation
- `src/main.ts` - Application entry point
- `test/` - Contains e2e tests

## Team Collaboration Notes

### How to Contribute
1. Fork the repository
2. Create a feature branch
3. Submit a pull request with a clear description of changes
4. Ensure tests pass and add new tests as needed

### Code Style
- Follow the established ESLint and Prettier configurations
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

## If I Had More Time

1. **Technical Improvements**
   - Implement persistent storage with a database
   - Add authentication and authorization
   - Add pagination for the GET endpoint

2. **Feature Enhancements**
   - Add superhero categories/teams
   - Implement a rating system for superheroes
   - Add image upload for superhero profiles

3. **Infrastructure**
   - Set up CI/CD pipeline
   - Implement caching
   - Add monitoring and logging
