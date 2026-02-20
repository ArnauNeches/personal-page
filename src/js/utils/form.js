import { renderSuggestion } from "../components/renderSuggestion.js";
import { supabase } from "./supabaseClient.js";

export function validateForm() {
    const description = document.getElementById("description");
    const textError = document.getElementById("error-message");

    description.addEventListener("input", () => {
        const len = description.value.length;

        if (0 < len && len <= 10) {
            textError.innerText = `Error: Description has to be longer (${len}/10 chars).`;
        } else {
            textError.innerText = "";
        } 
    });
}

export function handleFormSubmit() {
    const submit = document.getElementById("submit-books");
    const textError = document.getElementById("error-message");

    submit.addEventListener("submit", async (event) => {
        event.preventDefault();

        const form = new FormData(submit);
        const title = form.get("title");
        const author = form.get("author");
        const description = form.get("description");

        if (!title || !author || description.length <= 10){
            textError.innerText = "Error: Fields can't be empty and description needs to have 10 characters.";
        } else {
            textError.innerText = "";

            const { error } = await supabase.from('book_suggestions').insert([{ title, author, description }]);
            if (error){
                console.error("Error sending to Supabase: ", error);
            }

            const suggestion = {
                title: title, 
                author: author, 
                description: description,
                id: Date.now()
            };

            form.set("title", "");
            form.set("author", "");
            form.set("description", "");
            
            const container = document.getElementById("recent-suggestions");
            const node = renderSuggestion(suggestion);
            container.appendChild(node);

            let arraySuggestions = JSON.parse(localStorage.getItem("suggestions")) || [];
            arraySuggestions.push(suggestion);
            localStorage.setItem("suggestions", JSON.stringify(arraySuggestions));
        }
    });
}