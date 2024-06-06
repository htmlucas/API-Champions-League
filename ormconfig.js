export default {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "championsLeague",
    entities: [],
    synchronize: true, // utilizar em desenvolvimento
    logging: false, // utilizar em desenvolvimento
    migrations: [
        "./src/database/migrations/*.ts"
    ]
}