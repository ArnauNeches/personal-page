import { renderBooks } from "./books.js";
import { renderProjects } from "./projects.js";
import { renderFooter } from "./components/renderFooter.js";
import { initBookSearch } from "./utils/bookSearch.js";
import { handleDarkMode } from "./utils/toogleDarkMode.js";
import { validateForm, handleFormSubmit } from "./utils/form.js";
import { renderSuggestions } from "./suggestions.js";

handleDarkMode();

const footerContainer = document.getElementById("footer");
if (footerContainer) {
    footerContainer.appendChild(renderFooter());
}

if (document.getElementById("projects")) {
    renderProjects();
} else if (document.getElementById("read")) {
    const books = await renderBooks();
    initBookSearch(books);
    validateForm();
    handleFormSubmit();
    renderSuggestions();
}