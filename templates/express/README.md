```
If you find this project useful, please consider giving it a star (⭐) on GitHub.
```

# Express TypeScript Boilerplate ⚡

A minimalistic boilerplate for building Express.js applications using TypeScript.

## Features
- [Express.js](https://github.com/expressjs/express) web application with [TypeScript](https://github.com/microsoft/TypeScript).
- Middleware for handling [CORS](https://github.com/expressjs/cors).
- Environment variable configuration using [dotenv](https://github.com/motdotla/dotenv).
- Development server with automatic code reloading using [nodemon](https://github.com/remy/nodemon).
- [Jest](https://github.com/jestjs/jest) for testing.
- [Supertest](https://github.com/ladjs/supertest) for testing HTTP requests.
- [Morgan](https://github.com/expressjs/morgan) for HTTP request logging.

# Installation
To create a express app:
```node
npx compose-express-app my-app
cd my-app
npm start
```
## Configuration
- Create a .env file in the project root and configure your environment variables. You might need to set variables like port, database connection details, or any other configuration specific to your project.

- Customize the Express routes and application logic located in the src/ directory according to your project's requirements.

## Running the Application
Build the TypeScript source code to the dist/ directory:
```node
npm run build
```
Start the development server with automatic reloading:
```node
npm start
```
To run tests, use the following command:
```node
npm test
```
## License
This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

