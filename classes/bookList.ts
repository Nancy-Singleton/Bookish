import Book from "./book";
import bookQueryResult from "../interfaces/bookQueryResult";

export default class BookList {
    private readonly bookList: Book[] = [];

    constructor(bookListData: bookQueryResult[]) {
        bookListData.forEach(item => {
            let book = new Book(item.title, item.isbn);
            this.bookList.push(book);
        })
    }

    stringify() {
        return JSON.stringify(this.bookList);
    }
}