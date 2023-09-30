create database catalogo_pokemons;

create table usuarios (
  id serial primary key,
  nome varchar(100) not null,
  email varchar(100) unique not null,
  senha varchar(100) not null
  );

create table pokemons (
  id serial primary key,
  usuario_id integer not null references usuarios(id),
  nome varchar(100) not null,
  habilidades text not null,
  imagem text,
  apelido varchar(100)
  );