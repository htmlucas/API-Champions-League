import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "championsleague",
    entities: [],
    synchronize: true, // utilizar em desenvolvimento
    logging: false, // utilizar em desenvolvimento
    migrations: [
        "./src/database/migrations/*.ts"
    ]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source inicializado!")
    })
    .catch((err) => {
        console.error(err)
    })

