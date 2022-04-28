import DatabaseConnector from "./classes/databaseConnector";

const express = require('express')
const app = express()
const port = 3000

app.get('/books', async (req: any, res: { send: (arg0: string) => void }) => {
    const bookList = await DatabaseConnector.getBookList();
    res.send(bookList.stringify());
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})