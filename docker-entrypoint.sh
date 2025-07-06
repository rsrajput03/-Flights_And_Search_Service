#!/bin/sh

set -e

host="mysql"
port=3306

# Wait for MySQL to be ready
until nc -z $host $port; do
  echo "Waiting for MySQL at '$host:$port'..."
  sleep 2
done

echo "MySQL is ready! Running migrations..."

# Run migrations
npx sequelize-cli db:migrate

# Start the application
exec "$@"