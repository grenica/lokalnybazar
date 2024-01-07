# Use an official PHP runtime
FROM php:8.2-apache

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

RUN apt-get update

# Instalacja rozszerzenia cURL
# RUN apt-get update && apt-get install -y php-curl curl

# Instalacja rozszerzenia MySQL
# RUN apt-get update && apt-get install -y php-mysql

# RUN docker-php-ext-install pdo pdo_mysql mysqli
# RUN pecl install redis
# RUN docker-php-ext-enable redis


# Zmiana właściciela katalogu głównego serwera Apache
# RUN chown -R www-data:www-data /var/www/html


# copy /docker/apache2/sites-available/lokalnybazar.eu.conf /etc/apache2/sites-available/lokalnybazar.eu.conf

# Enable Apache modules
# RUN a2enmod rewrite
# RUN a2enmod mime


# Zmiana domyślnego portu serwera Apache
# EXPOSE 8080

# Uruchomienie serwera Apache
# CMD ["apachectl", "-D", "FOREGROUND"]

# uruchominie vhostów
# RUN a2ensite lokalnybazar.eu
# RUN a2ensite dev.project1.loc-ssl
# RUN service apache2 restart
