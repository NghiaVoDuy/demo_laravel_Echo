FROM php:7.3-fpm-alpine
COPY php.ini /usr/local/etc/php/

# lib
RUN apk add --no-cache --virtual build-dependencies gcc make autoconf libc-dev libtool \
 && apk add --no-cache --virtual zlib1g-dev libxml2-dev

# composer
COPY --from=composer /usr/bin/composer /usr/bin/composer

# php extension
RUN docker-php-ext-install xml pdo_mysql

# timezone
RUN apk add --update --no-cache --virtual build-dependencies tzdata && \
    cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    echo "Asia/Tokyo" > /etc/timezone && \
    apk del build-dependencies

WORKDIR /var/www