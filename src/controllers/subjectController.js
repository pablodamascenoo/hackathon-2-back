import db from "../db.js";
import { failure } from "../misc/consoleMessages.js";

export async function getSubjects(req, res) {
    try {
        const subjects = await db.collection("subjects").find({}).toArray();

        res.status(200).send(subjects);
    } catch (error) {
        failure(error);
        res.sendStatus(500);
    }
}
