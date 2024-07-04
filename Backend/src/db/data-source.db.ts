import "reflect-metadata";
import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

import dotenv from "dotenv";
dotenv.config();

// console.log(process.env["PG-USERNAME"],process.env["PG-PASSWORD"])
const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  database: "training",
  username: process.env["PG-USERNAME"],
  password: process.env["PG-PASSWORD"],
  extra: { max: 5, min: 2 },
  synchronize: false,
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
  entities: ["dist/src/entity/*.js"],
  migrations: ["dist/src/db/migrations/*.js"],
});

export default dataSource;
