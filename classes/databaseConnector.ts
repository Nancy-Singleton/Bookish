import BookList from "./bookList";
import userQueryResult from "../interfaces/userQueryResult";

const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://bookish:dbpassword@localhost:5432/bookish')

export default class DatabaseConnector {
    static async getBookList(): Promise<BookList> {
        const query = 'SELECT * FROM Book'
        const data = await db.many(query);
        return new BookList(data);
    }

    static async getPasswordForUserName(username: string): Promise<string> {
        const query = 'SELECT password FROM Usr WHERE Username = $1';
        return await db.one(query, username);
    }

    static async getUserForUserName(username: string): Promise<userQueryResult[]> {
        const query = 'SELECT username, password FROM Usr WHERE Username = $1';
        return await db.oneOrNone(query, username);
    }
}