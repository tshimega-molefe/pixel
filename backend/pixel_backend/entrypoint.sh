#!/bin/sh

if [ "$DATABASE" = "postgres"] 
then
    echo "Check if pixel database is running..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
        sleep 0.1 
    done 

    echo "The pixel database is successfully running..."
fi

python manage.py migrate

exec "$@"


