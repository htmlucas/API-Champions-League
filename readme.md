# Champions League API

### Descrição
Champions League API é uma aplicação que permite gerenciar jogadores e clubes da Champions League. Atualmente, a API permite realizar operações CRUD (Create, Read, Update, Delete) para jogadores e listar clubes, sendo que a parte de gerenciamento de clubes ainda está em desenvolvimento.

### Features
### 🏃‍♂️ Jogadores 
- [Listar todos os jogadores](#listplayers).
- [Listar um jogador específico](#listplayer).
- [Criação de um novo jogador](#createplayer).
- [Atualizar um jogador específico](#updateplayer).
- [Excluir um jogador específico](#deleteplayer).

### 🏟️ Clubes
- [Listar todos os clubes](#listclubs).

<div id="listplayers">

#### Listar todos os jogadores

- **Endpoint:** `GET /players`
- **Descrição:** Lista todos os jogadores.
- **Exemplo de resposta:**

```json
    [
        {
            "id": 1,
            "name": "Lionel Messi",
            "club": "Paris Saint-Germain",
            "nationality": "Argentina",
            "position": "Forward",
            "statics": {
            "Overall": 93,
            "Pace": 85,
            "Shooting": 92,
            "Passing": 91,
            "Dribbling": 95,
            "Defending": 38,
            "Physical": 65
            }
        },
        {
            "id": 2,
            "name": "Cristiano Ronaldo",
            "club": "Manchester United",
            "nationality": "Portugal",
            "position": "Forward",
            "statics": {
            "Overall": 91,
            "Pace": 87,
            "Shooting": 93,
            "Passing": 82,
            "Dribbling": 88,
            "Defending": 35,
            "Physical": 77
            }
        },
    ]
```

</div>

<div id="listplayer">

#### Listar um jogador específico

- **Endpoint:** `GET /player/:id`
- **Descrição:** Lista os detalhes de um jogador específico.
- **Exemplo de resposta:**

```json
    {
        "id": 20,
        "name": "Thiago Silva",
        "club": "Chelsea",
        "nationality": "Brazil",
        "position": "Defender",
        "statics": {
            "Overall": 86,
            "Pace": 60,
            "Shooting": 55,
            "Passing": 75,
            "Dribbling": 72,
            "Defending": 87,
            "Physical": 76
        }
    }
```

</div>

<div id="createplayer">

#### Criação de um novo jogador

- **Endpoint:** `POST /players`
- **Descrição:** Cria um novo jogador.
- **Exemplo de envio:**

```json
    {
        "id": 1,
        "name": "Lionel Messi",
        "club": "Paris Saint-Germain",
        "nationality": "Argentina",
        "position": "Forward",
        "statics": {
            "Overall": 93,
            "Pace": 85,
            "Shooting": 92,
            "Passing": 91,
            "Dribbling": 95,
            "Defending": 38,
            "Physical": 65,
        }
    }
```
- **Exemplo de resposta:**

```json
    {
        "message": "successfull"
    }
```

</div>

<div id="updateplayer">

#### Atualizar um jogador específico

- **Endpoint:** `PATCH /players/:id`
- **Descrição:** Atualiza as dados de estatisticas de um jogador específico.
- **Exemplo de envio:**

```json
    {
        {
            "Overall": 24,
            "Pace": 24,
            "Shooting": 24,
            "Passing": 24,
            "Dribbling": 24,
            "Defending": 24,
            "Physical": 24
        }
    }
```
- **Exemplo de resposta:**

```json
    {
        id: 1,
        name: "Lionel Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentina",
        position: "Forward",
        statics: {
            Overall: 24,
            Pace: 24,
            Shooting: 24,
            Passing: 24,
            Dribbling: 24,
            Defending: 24,
            Physical: 24,
        }
    }
```

</div>

<div id="deleteplayer">

#### Excluir um jogador específico

- **Endpoint:** `DELETE /players/:id`
- **Descrição:** Exclui um jogador específico.
- **Exemplo de resposta:**

```json
    {
        "message": "deleted"
    }
```

</div>

<div id="listclubs">

#### Listar todos os clubes

- **Endpoint:** `GET /clubs`
- **Descrição:** Lista todos os clubes.
- **Exemplo de resposta:**

```json
    [
        {
            "id": "1",
            "name": "FC Barcelona",
        },
        {
            "id": "2",
            "name": "Juventus",
        }
    ]
```

</div>

### Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/):** Plataforma de desenvolvimento para construir a API.
- **[TypeScript](https://www.typescriptlang.org/):** Linguagem de programação que adiciona tipagem estática ao JavaScript, aumentando a segurança e a qualidade do código.
- **[Tsup](https://www.npmjs.com/package/tsup):** Bundler para TypeScript que facilita a construção de projetos TypeScript.
- **[Tsx](https://www.npmjs.com/package/tsx):** Ferramenta que permite a execução de arquivos TypeScript diretamente, com suporte para arquivos `.env`.
- **[@types/cors](https://www.npmjs.com/package/@types/cors):** Tipagens para o middleware de CORS no Node.js.
- **[@types/express](https://www.npmjs.com/package/@types/express):** Tipagens para o framework Express, facilitando o desenvolvimento com TypeScript.
- **[Express](https://expressjs.com/):** Framework web rápido e minimalista para Node.js, utilizado para construir a API.
- **[CORS](https://www.npmjs.com/package/cors):** Middleware para habilitar CORS (Cross-Origin Resource Sharing) em servidores Express.

### Como Rodar o Projeto
1. Clone o repositório
2. Instale as dependências com `npm install`
3. Execute o servidor em modo de desenvolvimento com `npm run start:dev`
4. Execute o servidor em modo de observação com `npm run start:watch`
5. Crie a versão de distribuição com `npm run dist`
6. Execute a versão de distribuição com `npm run start:dist`


### Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

### Licença
Este projeto está licenciado sob a ISC License.