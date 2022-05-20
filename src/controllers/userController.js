export async function getUser(req, res) {
    const { user } = res.locals;

    res.status(200).send(user);
}
