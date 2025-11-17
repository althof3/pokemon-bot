# Kata Pokémon API

## Setup
1. Clone repo and install:<br>
   npm i
2. Configure .env:<br>
   - PORT=8080
   - API_AUTH_KEY={secret} #attached on email
   - NODE_ENV=local
   - DATABASE_URL={secret} #attached on email

   - DB_HOST={secret} #attached on email
   - DB_PORT={secret} #attached on email
   - DB_USER={secret} #attached on email
   - DB_PASS={secret} #attached on email
   - DB_NAME={secret} #attached on email
3. Run:<br>
   npm run dev

## Endpoints (all require header: x-api-key)
- POST /api/users/register
   - body: { name }
- GET /api/pokemon/:name

## Deploy
Deployed to Railway: https://pokemon-bot-production-3667.up.railway.app/