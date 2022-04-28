import {stringify} from "querystring";

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req: any, res: { send: (arg0: string) => void }) => {
    res.send('Hello World!');
})

app.get('/books', (req: any, res: { send: (arg0: string) => void }) => {
    const books = [{title: "dummy book 1"}, {title: "dummy book 2"}];
    const booksString = JSON.stringify(books);
    res.send(booksString);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})