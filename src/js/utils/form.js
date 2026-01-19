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
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const description = document.getElementById("description");
    const textError = document.getElementById("error-message");

    submit.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!title.value || !author.value || description.value.length <= 10){
            textError.innerText = "Error: Fields can't be empty and description needs to have 10 characters.";
        } else {
            textError.innerText = "";
            let arraySuggestions;

            const suggestion = {
                title: title.value, 
                author: author.value, 
                description: description.value
            };

            let storage = localStorage.getItem("suggestions");
            if (!storage) {
                arraySuggestions = [];
            } else {
                arraySuggestions = JSON.parse(storage);
                
            }
            arraySuggestions.push(suggestion);

            let stringSuggestions = JSON.stringify(arraySuggestions);
            localStorage.setItem("suggestions", stringSuggestions);
        }
    });
}