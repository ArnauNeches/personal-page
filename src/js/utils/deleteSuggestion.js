export function deleteSuggestion(container) {

    const id = container.dataset.id;
    container.remove();
    const suggestions = JSON.parse(localStorage.getItem("suggestions")) || [];
    const updated = suggestions.filter(s => s.id != id);
    localStorage.setItem("suggestions", JSON.stringify(updated));
    
}