import BookList from "./bookList";

const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://bookish:dbpassword@localhost:5432/bookish')

export default class DatabaseConnector {
    static async getBookList() {
        const query = 'SELECT * FROM Book'
        const data = await db.many(query);
        return new BookList(data);
    }
}