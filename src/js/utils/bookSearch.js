export function initBookSearch(books) {

    const inputValue = document.getElementById("search");
    inputValue.addEventListener("input", () => {

        const suggestionContainer = document.getElementById("searchSuggestions");
        suggestionContainer.innerHTML = "";

        if (!inputValue.value) {
            return;
        }

        let matching = matchingBooks(inputValue.value, books)
        if (matching.length === 0) {
            suggestionContainer.innerText = "No matches.";
            return;
        }
        matching.forEach(match => {
            const sug = document.createElement("div");
            sug.innerText = `${match.title} | ${match.author}`;
            sug.className = "bg-components text-sm p-2 lg:p-0 text-center";
            suggestionContainer.appendChild(sug);
        });     
    });
}

function matchingBooks(searchTerm, books) {
    const lowerTerm = searchTerm.toLowerCase();

    const results = books.filter(book => {
        return (
            book.title.toLowerCase().includes(lowerTerm) 
        );
    });

    return results.map(book => (
        {title: book.title, author: book.author}
    ))};