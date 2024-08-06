#!/bin/bash

psql -U $POSTGRES_USER -a -f /app/scripts/db/seed.sql
