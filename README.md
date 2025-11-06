# Mobile Relation

A simple Express.js application with PostgreSQL and Prisma ORM.

## Tech Stack

- **Express.js** - Web framework
- **PostgreSQL** - Database
- **Prisma** - ORM
- **Node.js** - Runtime

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure database:**
   - Create a PostgreSQL database named `mobile_relation`
   - Update `.env` with your database credentials

3. **Generate Prisma Client:**
   ```bash
   npx prisma generate
   ```

4. **Run migrations** (after adding models):
   ```bash
   npx prisma migrate dev --name init
   ```

## Development

Start the development server:
```bash
npm run dev
```

The server will run on `http://localhost:3000`

## Database

### Adding Models

Edit `prisma/schema.prisma` to define your data models.

### Creating Migrations

After updating the schema:
```bash
npx prisma migrate dev --name your_migration_name
```

### Prisma Studio

View and edit your database with a GUI:
```bash
npx prisma studio
```

## Project Structure

```
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── client.js          # Prisma client singleton
├── index.js               # Express app entry point
├── .env                   # Environment variables
└── package.json
```

## Environment Variables

```
DATABASE_URL="postgresql://username:password@localhost:5432/mobile_relation?schema=public"
PORT=3000
```
