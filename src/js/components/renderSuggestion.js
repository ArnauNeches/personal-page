import { deleteSuggestion } from "../utils/deleteSuggestion.js";

export function renderSuggestion(suggestion){

    const container = document.createElement("div");
    container.className = "bg-components rounded-xl w-full box-border h-auto p-4 relative";
    container.dataset.id = suggestion.id;

    const button = document.createElement("button");
    button.className = "absolute bg-red-500 rounded-2xl w-20 text-white top-4 right-4 cursor-pointer transition hover:scale-110 hover:opacity-90";
    button.innerText = "Delete";
    button.addEventListener("click", () => {
        deleteSuggestion(container);
    });

    const titleAuthor = document.createElement("div");
    titleAuthor.className = "text-titles w-full pr-28";
    titleAuthor.innerText = `${suggestion.title} | ${suggestion.author}`;

    const description = document.createElement("div");
    description.className = "text-main";
    description.innerText = suggestion.description;

    
    container.append(button, titleAuthor, description);
    return container;
}