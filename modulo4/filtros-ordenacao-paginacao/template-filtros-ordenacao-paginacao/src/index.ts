import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import knex from "knex"

app.get("/recipes", getAllRecipes)

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});