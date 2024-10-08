#
# This file is not required to build anything in this repo.
# it is just a shortcut to a list of available shell scripts and docker commands
# for convenience only. To show available targets, run:
# 
# make
#
.DEFAULT_GOAL := help

.PHONY: help
help: Makefile
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

#
build: ## Build node code
	@echo "Building..."
	@pnpm install && pnpm build

tidy: ## Tidy the code
	@echo "Tidying..."
	@pnpm type-check
	@pnpm format:write
	@pnpm lint

dev: ## Debug the app
	@echo "Debugging ..."
	@pnpm install && NEXT_DEBUG=true PORT=30001 pnpm dev

clean: ## Clean up
	@echo "Cleaning up..."
	@rm -rf node_modules pnpm-lock.yaml

image: ## Build docker images
	@echo "Building docker images..."
	@docker buildx bake

up: ## Start services
	@echo "Starting services..."
	@docker compose up -d

down: ## Stop services
	@echo "Stopping services..."
	@docker compose down

ps: ## Show status of services
	@echo "Status of services..."
	@docker compose ps

.PHONY: build dev clean image up down ps
##