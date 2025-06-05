##
## Copyright (c) 2025 - OnTarget Labs. All rights reserved.
##

##
## Config
##

PROJECT_NAME=ontarget-interview-task
DOCKER_IMAGE_NAME=ontarget-interview-task

DOCKER_ENV_FILE=.env
DOCKER_COMPOSE_FILE=docker-compose.yml

##
## Default target
##

all: build

##
## Local infrastructure
##

build: install
	npm run build

install: node_modules

node_modules: package.json
	npm install

start:
	npm run start

start-dev:
	npm run start:dev

test:
	npm run test

e2e:
	npm run test:e2e

clean:
	-@rm -rf ./dist

distclean: clean docker-clean
	-@rm -rf ./node_modules

##
## Docker infrastructure
##

docker-build:
	docker compose -f ${DOCKER_COMPOSE_FILE} build --parallel

docker-rebuild:
	docker compose -f ${DOCKER_COMPOSE_FILE} build --parallel --no-cache --force-rm --pull

docker-start-dev:
	docker compose -f ${DOCKER_COMPOSE_FILE} up -d

docker-stop:
	docker compose -f ${DOCKER_COMPOSE_FILE} down --remove-orphans

docker-test:
	docker compose -f ${DOCKER_COMPOSE_FILE} run ${PROJECT_NAME} make test

docker-e2e:
	docker compose -f ${DOCKER_COMPOSE_FILE} run ${PROJECT_NAME} make e2e

docker-clean:
	docker compose -f ${DOCKER_COMPOSE_FILE} rm -s -f -v

.PHONY: all build install \
		start start-dev \
		test e2e \
		clean distclean \
		docker-build docker-rebuild docker-start-dev docker-stop \
		docker-test docker-e2e \
		docker-clean

.SILENT: clean docker-clean distclean
