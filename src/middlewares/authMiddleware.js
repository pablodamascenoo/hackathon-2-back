import joi from "joi";
import db from "../db.js"

export async function validateRegister(req, res, next) {
    const dataUser = req.body;
    const userSchema = joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        photo: joi.string().regex(/(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg)(\?[^\s[",><]*)?/),
        password: joi.string().required(),
        confirmPassword: joi.ref('password')
    });
    const { error } = userSchema.validate(dataUser);
    if (error) {
        return res.status(422).send(error.details);
    }

    try {
        const hasEmail = await db.collection("users").findOne({ email: dataUser.email });
        if (hasEmail) { return res.status(409).send("Erro! O email já está cadastrado!"); }
    } catch (error) {
        return res.status(500).send("Erro ao se comunicar com o banco de dados" + error);
    }
    next();
}