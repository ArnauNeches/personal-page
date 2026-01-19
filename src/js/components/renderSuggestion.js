export function renderSuggestion(suggestion){

    const container = document.createElement("div");
    container.className = "bg-components rounded-xl w-lg box-border h-auto p-4 relative";

    const button = document.createElement("button");
    button.className = "absolute bg-red-500 rounded-2xl w-20 text-white top-4 right-10 cursor-pointer transition hover:scale-115 hover:opacity-90";
    button.innerText = "Delete";
    container.appendChild(button);

    const titleAuthor = document.createElement("div");
    titleAuthor.className = "text-titles";
    titleAuthor.innerText = `${suggestion.title} | ${suggestion.author}`;
    container.appendChild(titleAuthor);

    const description = document.createElement("div");
    description.className = "text-main";
    description.innerText = suggestion.description;
    container.appendChild(description);

    return container;
}