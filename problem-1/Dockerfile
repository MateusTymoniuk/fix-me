FROM postgres:16 AS postgres-with-seed

WORKDIR /app

COPY ./scripts/db/init.sh /docker-entrypoint-initdb.d
COPY ./scripts/db/seed.sql ./scripts/db/seed.sql
