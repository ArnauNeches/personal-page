import { renderBook } from "./components/renderBook.js";
import { renderSuggestion } from "./components/renderSuggestion.js";
import { initBookSearch } from "./utils/bookSearch.js";
import { handleFormSubmit, validateForm } from "./utils/form.js";
import { supabase } from "./utils/supabaseClient.js";

async function renderBooks(){

    const { data: books, error } = await supabase.from('books').select('*');

    if (error) {
        console.error("Error fetching books:", error);
        return [];
    }

    for (const book of books){
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