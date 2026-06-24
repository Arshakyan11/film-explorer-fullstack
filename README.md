# Film Explorer

A professional full-stack movie discovery and watchlist application built with a modern React frontend and a TypeScript-powered Express backend.

Users can browse and search for movies, view detailed information, create an account, log in, and manage a personal watchlist with secure JWT authentication and persistent PostgreSQL storage.

---

## Live Demo

- Frontend: https://film-explorer-one.netlify.app
- Backend API: https://film-explorer-ufag.onrender.com

## Features

- User registration and login
- JWT authentication with protected API routes
- Search movies by title and keywords
- View detailed movie information and metadata
- Add movies to a personal watchlist
- Remove movies from the watchlist
- Persistent user data stored in PostgreSQL using Prisma ORM
- Responsive UI for mobile and desktop
- Client-server separation with Redux Toolkit state management
- API integration with movie data provider via Axios

---

![React](https://img.shields.io/badge/React-Library-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Language-blue)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-green)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)

## About The Project

Film Explorer was created to strengthen my full-stack development skills by combining a modern React frontend with a TypeScript, Express, Prisma, and PostgreSQL backend. The project focuses on authentication, API integration, state management, and database design.

## Tech Stack

### Frontend

- React
- TypeScript
- Redux Toolkit
- React Router
- SCSS Modules
- Axios
- Vite

### Backend

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- JWT Authentication
- Bcrypt

### Database

- PostgreSQL
- Neon (cloud-hosted database)

---

## Architecture Overview

Film Explorer is built as a clean full-stack application with separate frontend and backend layers:

- `client/` hosts the React application, UI components, page routes, state management, and API integration.
- `server/` hosts the Express API, authentication, database access, validation middleware, and business logic.
- PostgreSQL is used as the primary database, and Prisma ORM provides type-safe data queries.
- JWT tokens are issued after login and used to secure protected routes and watchlist operations.

This separation allows independent development, testing, and deployment of the frontend and backend.

---

## Installation

### Frontend

1. Open a terminal in `client/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm run dev
   ```

### Backend

1. Open a terminal in `server/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Generate Prisma client and run migrations if needed:
   ```bash
   npx prisma generate
   npx prisma db push
   ```
4. Start the backend in development mode:
   ```bash
   npm run dev
   ```

---

## Environment Variables

Create `.env` files in the `server/` and `client/` directories as needed.

### Backend example (`server/.env`)

```env
DATABASE_URL="postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE?schema=public"
JWT_SECRET="your_jwt_secret_here"
FRONTEND_URL="http://localhost:5173"
HOST="localhost"
PORT="8000"
```

### Frontend example (`client/.env`)

```env
VITE_FILM_TOKEN="your_tmdb_token"
VITE_FILM_MAIN_URL="your_tmdb_link_main"
VITE_FILM_SEARCH_URL="your_tmdb_link_search"
VITE_BACKEND_LINK="your_backend_link"
```

> Note: `VITE_FILM_TOKEN` is only required if the application is configured to request movie metadata from The Movie Database API.

---

## API Endpoints

### Authentication

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Authenticate a user and return a JWT

### Watchlist

- `GET /api/watchlist` — Get the current user's watchlist (protected)
- `POST /api/watchlist` — Add a movie to the current user's watchlist (protected)
- `DELETE /api/watchlist/:id` — Remove a movie from the current user's watchlist (protected)

### Subscription / Profile (if available)

- `GET /api/subscription` — Retrieve subscription details for the authenticated user
- `POST /api/subscription` — Create or update a subscription plan

---

## Database Schema Overview

The database schema is defined in Prisma and includes key models for user accounts and watchlist data.

### User model

- `id` — Unique identifier
- `username` — Username
- `email` — User email address
- `phone` — User phone
- `password` — Hashed password
- `watchlist` — User Watchlist
- `subscription` — Optional subscription plan relation

### WatchlistItem model

- `id` — Unique identifier
- `movieId` — External movie identifier
- `title` — Movie title
- `page` — Movie page
- `img` — Poster or image path
- `userId` — Relation to the owning user

### Subscription model

- `id` — Unique identifier
- `name` — Subscription plan name
- `price` — Subscription price
- `users` — Related users

This schema ensures user watchlists are persisted securely and linked to authenticated accounts.

---

## Project Folder Structure

```
film-explorer-fullstack/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── store/
│   │   └── types/
│   ├── package.json
│   └── vite.config.ts
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── validators/
│   │   └── lib/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

---

## Deployment

### Frontend

Deploy the `client/` application to Vercel for fast static hosting and global CDN delivery.

### Backend

Deploy the `server/` application to Railway for node hosting with environment variables and database integration.

### Database

Host PostgreSQL on Neon for a managed, scalable cloud database.

> Recommended flow: deploy the backend first, configure `DATABASE_URL` in Railway, then deploy the frontend with `VITE_API_URL` pointing to the Railway backend.

---

## Repository

https://github.com/yourusername/film-explorer-fullstack

## Future Improvements

- Implement social sharing or movie recommendations
- Add tests for frontend components and backend routes
- Improve accessibility and performance audits
- Add subscription billing and premium content tiers

---

## License

This project is licensed under the MIT License.

---

## Key Technical Achievements

- Built a full-stack application using React, TypeScript, Node.js, Express, Prisma, and PostgreSQL.
- Implemented JWT authentication and protected routes.
- Designed a relational database schema using Prisma ORM.
- Deployed a production-ready application using Vercel, Railway, and Neon.
- Managed global state using Redux Toolkit.

## Contact

For questions or feedback, feel free to open an issue or contact the author through the project repository.
