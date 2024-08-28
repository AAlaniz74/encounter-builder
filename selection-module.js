export function setupItemClick(listId, selectedListId) {
  const listItems = document.querySelectorAll(`#${listId} li`);
  const selectedMonsterList = document.getElementById(selectedListId);

  listItems.forEach(function(item) {
      item.addEventListener('click', function() {
          let newItem = document.createElement('li');
          newItem.textContent = this.textContent;

          let alreadySelected = Array.from(selectedMonsterList.children).some(function(li) {
              return li.textContent === newItem.textContent;
          });

          if (!alreadySelected) {
              selectedMonsterList.appendChild(newItem);
          }
      });
  });
}
