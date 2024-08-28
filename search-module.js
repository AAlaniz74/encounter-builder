export function setupSearchBar(searchInputId, listId) {
    const searchBar = document.getElementById(searchInputId);
    const listItems = document.querySelectorAll(`#${listId} li`);

    searchBar.addEventListener('input', function() {
        let filter = this.value.toLowerCase();

        listItems.forEach(function(item) {
            let text = item.textContent.toLowerCase();
            if (text.includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
}
