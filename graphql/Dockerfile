# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.10.0
FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV development 
WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

COPY . .
RUN mkdir -p prisma && chown -R node:node .
RUN npm run prisma generate
RUN npm run compile
EXPOSE 4000
USER node

CMD ["node", "./dist/src/index.js"]
