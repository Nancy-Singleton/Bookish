import DatabaseConnector from "./classes/databaseConnector";
import UserSession from "./classes/userSession";

const express = require('express')
const app = express()
const port = 3000

app.get('/books', async (req: any, res: { send: (arg0: string) => void }) => {
    const bookList = await DatabaseConnector.getBookList();
    res.send(bookList.stringify());
})

app.get('/login', async (req: any, res: { send: (arg0: string) => void }) => {
    const userSession = new UserSession();
    const userExists = userSession.userExists(req.query.username);
    const correctPassword = await DatabaseConnector.getPasswordForUserName(req.query.username);
    res.send(correctPassword);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})