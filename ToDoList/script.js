const listContainer = document.querySelector("[data-list]");
const newListForm = document.querySelector("[data-new-list-form]");
const newListInput = document.querySelector("[data-new-list-input]");

let lists = [];

newListForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName === null || listName === "") {
    return;
  } else {
    const list = createList(listName);
    newListInput.value = null;
    lists.push(list);
    render();
  }
});

function render() {
  clearElement(listContainer);
  lists.forEach((it) => {
    const itens = document.createElement("li");
    itens.classList.add("item");
    itens.innerText = it.name;
    listContainer.appendChild(itens);
  });
}

function createList(name) {
  return {
    id: Date.now().toString(),
    name: name,
  };
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
