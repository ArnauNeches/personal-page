import { renderSuggestion } from "./components/renderSuggestion.js";

export function renderSuggestions() {
    
    const storage = localStorage.getItem("suggestions");
    if (!storage) return;

    const arraySuggestions = JSON.parse(storage);

    const container = document.getElementById("recent-suggestions");

    arraySuggestions.forEach(sug => {
        const node = renderSuggestion(sug);
        container.appendChild(node);
    });
};