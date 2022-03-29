import { DataSource } from "typeorm";

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "rentx",
    migrations: ["./src/database/migrations/*.ts"],
    entities: ["./src/modules/cars/entities/*.ts"]
});

interface IOptions {
    host: string;
}
  
const options = dataSource.options as IOptions
options.host = 'database'

dataSource.setOptions(options)
dataSource.initialize();

export { dataSource };
