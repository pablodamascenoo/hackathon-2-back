import bcrypt from "bcrypt"
import db from "../db.js"
import { v4 as uuid } from "uuid";

export async function postRegister(req, res) {
    const dataUser = req.body;
    const { password } = dataUser;
    
    try{
        delete dataUser.confirmPassword;
        const senhaCripto = bcrypt.hashSync(password, 10);
        dataUser.password = senhaCripto;
        await db.collection("users").insertOne(dataUser);
        return res.sendStatus(201); 
    } catch (error){
        return res.status(500).send("Erro ao se comunicar com o banco de dados" + error);
    }
};

export async function postLogin(req, res) {
    const { email, password } = req.body;

    try {
        const user = await db.collection("users").findOne({ email });
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = uuid();
            await db.collection("sessions").insertOne({ userId: user._id, token, });
            res.status(200).send({ token, name: user.name });
            return;
        } else {
            res.status(401).send("email e/ou senha incorretos");
            return;
        }
    } catch (error) {
        return res.status(500).send("Erro ao se comunicar com o banco ao logar" + error);
    }
}