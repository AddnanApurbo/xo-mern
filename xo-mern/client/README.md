Project XO (MERN)

This project is a full-stack web app built with the MERN stack (MongoDB,
Express, React, Node). It is designed as an SEO + Internship prep hub.

Available Scripts

In the project root directory, you can run:

npm run dev

Runs both the server (Express backend) and client (React frontend)
concurrently.
- Backend runs on http://localhost:5000
- Frontend runs on http://localhost:3000

The pages will reload when you make changes.
Server restarts automatically if you’re using nodemon.

------------------------------------------------------------------------

npm run client

Runs only the React client in development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes, and you may also see lint
errors in the console.

------------------------------------------------------------------------

npm run server

Runs only the Express server in development mode.
Server is available on http://localhost:5000.

Use this if you want to test API endpoints without starting the React
client.

------------------------------------------------------------------------

npm test

Currently not configured. You can add test runners (Jest, Mocha, etc.)
as needed.

------------------------------------------------------------------------

Project Structure

    xo-mern/
      client/      # React frontend
        src/
          components/   # Reusable UI components (Navbar, etc.)
          pages/        # Route-level pages (Dashboard, QA, SEO, Internship)
          App.js        # Router + layout
          index.js      # Entry point
      server/      # Express backend
        data/           # Mock JSON data (questions, keywords, checklist)
        index.js        # Server entry with routes and middleware
      package.json  # Root scripts (concurrently)

------------------------------------------------------------------------

Features

-   Dashboard – quick summary
-   Q&A – MERN + DSA practice questions (fetched from backend)
-   SEO Tools – keywords table + interactive checklist
-   Internship – intro script + story bank

------------------------------------------------------------------------

Learn More

-   React documentation
-   Express documentation
-   Node.js documentation
-   Concurrently package

------------------------------------------------------------------------

Deployment

To deploy in production:
1. Build the client: bash    cd client    npm run build This outputs a
static bundle to client/build/.

2.  Configure the server to serve the React build in production (e.g.,
    using express.static).

------------------------------------------------------------------------

Troubleshooting

-   npm run dev doesn’t start?
    -   Ensure concurrently is installed (npm install).
    -   Ensure both client/ and server/ have their dependencies
        installed (npm install inside each).
-   CORS issues?
    -   In dev, CRA proxy handles this ("proxy": "http://localhost:5000"
        in client/package.json).
    -   In production, serve client and server under the same origin.
