import db from "../db.js";
import { failure } from "../misc/consoleMessages.js";

export async function getQuestions(req, res) {
    const idQuestion = req.params.id;
    try {
        const questions = await db.collection("questions").find({ subjectId : idQuestion}).toArray();
        res.status(200).send(questions);
    } catch (error) {
        failure(error);
        res.sendStatus(500);
    }
}