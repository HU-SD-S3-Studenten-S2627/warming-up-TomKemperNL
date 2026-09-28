create table if not exists pokemon (
    name varchar(255) primary key,
    url varchar(255),
    lat float,
    lng float,
    imgUrl varchar(255),
    attack int,
    defense int
    );