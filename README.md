# Symfony Auth Project

# Step 1

Copy .env.example to .env (everything is configured)

# Step 2

Go to the backend directory and copy .env.example to .env

# How to get the app to work in docker

In your terminal:

# Step 1

Run "docker-compose --project-name symfony_dev -f docker-compose-dev.yml up --build" (add -d if you don't want to see it running all the time)

when all installed:

# Step 2

Run "docker-compose --project-name symfony_dev -f docker-compose-dev.yml run --rm composer install" (to get the symfony vendor file)
Run "docker-compose --project-name symfony_dev -f docker-compose-dev.yml run --rm symfony doctrine:migrations:migrate" (to migrate the database)

# When all is working

Frontend code - http://localhost:3000

# Register and sign in

Register a user and login with that user.
