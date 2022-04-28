import {stringify} from "querystring";

const express = require('express')
const app = express()
const port = 3000

const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://bookish:dbpassword@localhost:5432/bookish')

db.one('SELECT * FROM Book')
    .then((data: any) => {
        console.log('DATA:', data)
    })
    .catch((error: Error) => {
        console.log('ERROR:', error)
    })

app.get('/', (req: any, res: { send: (arg0: string) => void }) => {
    res.send('Hello World!');
})

app.get('/books', (req: any, res: { send: (arg0: string) => void }) => {

    db.one('SELECT * FROM Book')
        .then((data: any) => {
            console.log('DATA:', data)
            const booksString = JSON.stringify(data);
            res.send(booksString);
        })
        .catch((error: Error) => {
            console.log('ERROR:', error)
            res.send(error.message);
        })

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})