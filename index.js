const todoTitleInput = document.getElementById("todoTitleInput");
const todoDescInput = document.getElementById("todoDescInput");
const addTodoItem = document.getElementById("addTodoItem");
const todoList = document.getElementById("todoList");

const todoItems = [];

addTodoItem.addEventListener("click", function() {
  const title = todoTitleInput.value.trim();
  const description = todoDescInput.value.trim();

  if (title === "") {
    alert("Please enter a title for the to-do item.");
    return;
  }

  
  const newTodo = {
    title: title,
    description: description,
  };

  
  todoItems.push(newTodo)




  for (let i = 0; i < todoItems.length; i++) {
    const todo = todoItems[i];
    const li = document.createElement("li");
    li.textContent = `${todo.title}: ${todo.description}`;
    todoList.appendChild(li);
  }


  todoTitleInput.value = '';
  todoDescInput.value = '';
});