FROM composer:latest

RUN addgroup -g 1000 symfony && adduser -G symfony -g symfony -s /bin/sh -D symfony

WORKDIR /var/www/html/backend