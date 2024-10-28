FROM node:22-alpine AS base

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

# -------------------------------------------

FROM base AS build

WORKDIR /app

COPY . .

RUN npm run build

# -------------------------------------------

FROM caddy:2.4.3-alpine AS prod

WORKDIR /app

COPY --from=build /app/dist ./

CMD ["caddy", "file-server", "--root", "/app", "--access-log"]
