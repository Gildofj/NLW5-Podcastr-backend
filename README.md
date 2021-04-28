# Podcastr-Backend
Api criada apenas para ser consumida pelo projeto [Podcastr](https://github.com/Gildofj/NLW5-Podcastr/tree/main), aplicação foi feita utilizando [Node.js](https://nodejs.org/en/) com o framework [Express](https://expressjs.com/) e consultando os dados armazenados em um cluster do banco não relacional [MongoDB](https://www.mongodb.com/)

Também é possível ter acesso a aplicação via uma [imagem](https://hub.docker.com/repository/docker/gildofj/podcastr-backend/general) hospedada no hub do docker; 

## Rodando o projeto
```bash
  npm run dev
  # or
  yarn dev
```

Em seguida basta realizar as requisições na url http://localhost:3333/api/episodes.
