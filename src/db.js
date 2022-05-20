import { MongoClient } from "mongodb";
import chalk from "chalk";
import dotenv from "dotenv";
import { failure } from "./misc/consoleMessages.js";
dotenv.config();

let db = null;
const mongoClient = new MongoClient(process.env.MONGO_URL);

try {
    await mongoClient.connect();
    db = mongoClient.db(process.env.BANCO);
    console.log(
        chalk.bold.blue(
            "\nConexão com o banco de dados MongoDB estabelecida!\n"
        )
    );
} catch (error) {
    failure("Erro ao se conectar ao banco de dados", error);
}

export default db;
