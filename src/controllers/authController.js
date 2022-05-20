import bcrypt from "bcrypt"
import db from "../db.js"

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