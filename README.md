# PROJETO EXPRESS, SEQUELIZE ORM E REDIS

Projeto com Express JS, Sequelize e Redis, consulta na API pública VIACEP a partir da rota /address/:cep.

## Requisitos

- [Node JS](https://nodejs.org/en/download/);
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable);
- [Redis](https://redis.io/);
- [PostgresSQL](https://www.postgresql.org/download/).

## Scripts disponíveis

Na raiz do projeto:

### `yarn install | yarn`

Instalação das dependências.

### `yarn dev`

Roda aplicação em desenvolvimento.
Abra [http://localhost:3333](http://localhost:3333) .

### `yarn db:create`

Cria a o banco de dados

### `yarn db:migrate`

Executa as migrations na base de dados

### `yarn test`

Executa testes com automatizados com jest
