# Symfony Auth Project

Copy .env.example to .env (everything is configured)
Go to the backend directory and copy .env.example to .env

In your terminal:

Run "docker-compose --project-name symfony_dev -f docker-compose-dev.yml up --build" (add -d if you don't want to see it running all the time)

when all installed:

Run "docker-compose --project-name symfony_dev -f docker-compose-dev.yml run --rm composer install" (to get the symfony vendor file)
Run "docker-compose --project-name symfony_dev -f docker-compose-dev.yml run --rm symfony doctrine:migrations:migrate" (to migrate the database)

Frontend code - http://localhost:3000

Register a user and login with that user.
