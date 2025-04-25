# Store Monitoring Application - Backend

This is the backend of the Store Monitoring Application, which is designed to monitor the online status of various stores. The backend is built using Node.js and Express, and it provides a RESTful API for the frontend application to interact with.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **app.ts**: Entry point for the application, sets up the Express server and middleware.
  - **controllers/**: Contains the controller files that handle incoming requests.
    - **storeController.ts**: Manages store-related requests.
  - **routes/**: Defines the API routes for the application.
    - **storeRoutes.ts**: Sets up routes for store management.
  - **services/**: Contains service files that interact with data sources.
    - **storeService.ts**: Handles data fetching and updating store statuses.
  - **types/**: Contains TypeScript type definitions.
    - **index.ts**: Defines interfaces for Store and User data.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd store-monitoring-app/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To start the backend server, run the following command:
```
npm start
```

The server will start on the specified port (default is 3000). You can access the API at `http://localhost:3000/api`.

## API Endpoints

- **GET /api/stores**: Retrieve a list of all stores.
- **GET /api/stores/:id/status**: Check the online status of a specific store.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.