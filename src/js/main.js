import { renderBooks } from "./books.js";
import { renderProjects } from "./projects.js";

if (document.getElementById("projects")) {
    renderProjects();
} else if (document.getElementById("read")) {
    renderBooks();
}