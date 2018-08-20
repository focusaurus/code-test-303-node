# 303 Software Coding Test


## How to set up for development the first time

- Install docker and docker compose
- Clone this repo
- Build the docker image
  - `./bin/docker-build.sh`
- Get a shell in the api container
  - `./bin/docker-run.sh`
- create the database in docker
  - Run this command from your host shell
  - `docker-compose exec postgres su - postgres -c 'createdb api'`

## How to do normal development tasks

- Get a psql prompt
  - `docker-compose exec postgres su - postgres -c 'psql api'`


## TODO Remaining Tasks

90 minutes is not a lot of time, so I skipped

- Input validation
- Unit tests, especially for edge cases
- Pagination for the get all posts route
