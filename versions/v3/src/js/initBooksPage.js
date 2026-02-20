import { renderBook } from "./components/renderBook.js";
import { renderSuggestion } from "./components/renderSuggestion.js";
import { initBookSearch } from "./utils/bookSearch.js";
import { handleFormSubmit, validateForm } from "./utils/form.js";

async function renderBooks(){

    const response = await fetch("src/data/books.json");
    const books = await response.json();

    for (const book of Object.values(books.data)){
        const container = document.getElementById(String(book.year));
        if (!container) continue;

        const node = renderBook(book);
        container.appendChild(node);
    }
    return Object.values(books.data);
}

function renderSuggestions() {
    
    const storage = localStorage.getItem("suggestions");
    if (!storage) return;

    const arraySuggestions = JSON.parse(storage);

    const container = document.getElementById("recent-suggestions");

    arraySuggestions.forEach(sug => {
        const node = renderSuggestion(sug);
        container.appendChild(node);
    });
};

export async function initBooksPage() {
    const books = await renderBooks();
    initBookSearch(books);
    validateForm();
    handleFormSubmit();
    renderSuggestions();
}