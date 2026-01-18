import { renderBook } from "./components/renderBook.js";

export async function renderBooks(){

    const response = await fetch("src/data/books.json");
    const books = await response.json();

    for (const book of Object.values(books.data)){
        const container = document.getElementById(String(book.year));
        if (!container) continue;

        const node = renderBook(book);
        container.appendChild(node);
    }
}