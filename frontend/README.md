# Store Monitoring Application

This project is a store monitoring application that checks the online status of stores. It consists of a backend built with TypeScript and Express, and a frontend built with React.

## Project Structure

```
store-monitoring-app
├── backend
│   ├── src
│   │   ├── app.ts
│   │   ├── controllers
│   │   │   └── storeController.ts
│   │   ├── routes
│   │   │   └── storeRoutes.ts
│   │   ├── services
│   │   │   └── storeService.ts
│   │   └── types
│   │       └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── App.tsx
│   │   ├── components
│   │   │   ├── StoreStatus.tsx
│   │   │   └── Header.tsx
│   │   ├── pages
│   │   │   └── Dashboard.tsx
│   │   └── styles
│   │       └── App.css
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
└── README.md
```

## Backend

The backend is responsible for handling API requests related to store data. It includes:

- **Express server**: Set up in `app.ts`.
- **Controllers**: Manage the logic for handling requests in `storeController.ts`.
- **Routes**: Define API endpoints in `storeRoutes.ts`.
- **Services**: Interact with the data source in `storeService.ts`.
- **Types**: Define data structures in `index.ts`.

## Frontend

The frontend is a React application that provides a user interface for monitoring store statuses. It includes:

- **Main component**: `App.tsx` sets up routing and layout.
- **Components**: `StoreStatus.tsx` displays store statuses, and `Header.tsx` renders the application header.
- **Pages**: `Dashboard.tsx` shows the main dashboard.
- **Styles**: Global styles are defined in `App.css`.

## Getting Started

1. Clone the repository.
2. Navigate to the `backend` directory and install dependencies:
   ```
   npm install
   ```
3. Start the backend server:
   ```
   npm start
   ```
4. Navigate to the `frontend` directory and install dependencies:
   ```
   npm install
   ```
5. Start the frontend application:
   ```
   npm start
   ```

## License

This project is licensed under the MIT License.