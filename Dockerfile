##
## Copyright (c) 2025 - OnTarget Labs. All rights reserved.
##

##
## Builder
##
FROM node:22-alpine AS builder

RUN apk add make

WORKDIR /app

COPY package.json ./

RUN npm install --silent

COPY . .

RUN make build

##
## Development
##
FROM node:22-alpine AS development

RUN apk update && apk upgrade
RUN apk add make sqlite

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY --from=builder /app/Makefile ./
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/*.js ./
COPY --from=builder /app/*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

CMD make start-dev

##
## Production
##

## TBD: Use a smaller base image