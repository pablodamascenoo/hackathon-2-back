import joi from "joi";
import db from "../db.js";
import { failure } from "../misc/consoleMessages.js";

export async function validateRegister(req, res, next) {
    const dataUser = req.body;
    const userSchema = joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().required(),
    });
    const { error } = userSchema.validate(dataUser);
    if (error) {
        return res.status(422).send(error.details);
    }

    try {
        const hasEmail = await db
            .collection("users")
            .findOne({ email: dataUser.email });
        if (hasEmail) {
            return res.status(409).send("Erro! O email já está cadastrado!");
        }
    } catch (error) {
        return res
            .status(500)
            .send("Erro ao se comunicar com o banco de dados" + error);
    }
    next();
}

export async function loginSchema(req, res, next) {
    const { email, password } = req.body;

    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(1).max(30).required(),
    });

    const { error } = schema.validate(
        { email, password },
        { abortEarly: false }
    );

    if (error) {
        failure(error);
        return res.status(422).send(error.details[0].message);
    }
    next();
}

export async function verifyToken(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if (!token) return res.status(401).send("Sessão expirada");

    try {
        const session = await db.collection("sessions").findOne({ token });

        if (!session) return res.status(401).send("Sessão expirada");

        const user = await db.collection("users").findOne({
            _id: session.userId,
        });

        if (!user) return res.status(401).send("Sessão expirada");
        res.locals.user = user;
        next();
    } catch (error) {
        failure(error);
        res.sendStatus(500);
    }
}
