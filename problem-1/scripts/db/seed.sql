create table if not exists users(
    "id" integer not null,
    "name" text,
    "email" text,
    primary key("id")
);

-- seed
insert into users(id, name, email)
values (1, 'John', 'john@email.com');
