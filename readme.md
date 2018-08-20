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

## API Documentation

The server provides an HTTP interface at base URL `http://localhost:3000` when running locally. All v1 endpoints paths start with the prefix `/api/v1`.

**Posts**

* Create a post
  * HTTP Method: `POST`
  * Path: `/api/v1/posts`
  * JSON Body is an object with the following fields
    * `title` (string, required): The post title
    * `author` (string): The post author name or id
    * `content` (string): The post content (body text)
  * Response is JSON object with the new post fields
* View a post
  * HTTP Method: `GET`
  * Path: `/api/v1/posts/{postId}`
  * `postId` path field should be a positive integer
  * Response is JSON object with the post fields
* Update a post
  * HTTP Method: `PATCH`
  * Path: `/api/v1/posts/{postId}`
    * `postId` path field should be a positive integer
  * JSON Body is an object with the following fields
    * `title` (string, optional): The updated post title
    * `author` (string, optional): The updated post author name or id
    * `content` (string, optional): The updated post content (body text)
  * Response is JSON object with the updated post fields
* Delete a post
  * HTTP Method: `DELETE`
  * Path: `/api/v1/posts/{postId}`
  * `postId` path field should be a positive integer
  * Response is empty


## TODO Remaining Tasks

90 minutes is not a lot of time, so I skipped

- Input validation
  - optional vs required fields
  - string length limits
  - numeric ids
- Unit tests, especially for edge cases and error handling
- Pagination for the get all posts route
- API docs with a conventional tool like OpenAPI/Swagger
