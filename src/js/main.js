import { renderBooks } from "./books.js";
import { renderProjects } from "./projects.js";
import { renderFooter } from "./components/renderFooter.js";

const footerContainer = document.getElementById("footer");
if (footerContainer) {
    footerContainer.appendChild(renderFooter());
}

if (document.getElementById("projects")) {
    renderProjects();
} else if (document.getElementById("read")) {
    renderBooks();
}