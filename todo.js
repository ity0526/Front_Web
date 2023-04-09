const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const localTodo = localStorage.getItem("Todolist");

function todoSubmit(event) {
	event.preventDefault();
	const todo = todoInput.value;
	const li = document.createElement("li");
	li.innerText = todo;
	todoList.appendChild(li);
	
	const button = document.createElement("button");
	button.innerText = "X";
	button.type = "click";
	li.appendChild(button);
	
	saveTodo(todo);
	
	todoInput.value = "";
}

function saveTodo(todo) {
		
	if(localTodo !== null){
		const newTodo = JSON.parse(localTodo);
		newTodo.push(todo);
		localStorage.setItem("Todolist", JSON.stringify(newTodo))
	}else{
		const firstTodo = [];
		firstTodo.push(todo);
		localStorage.setItem("Todolist", JSON.stringify(firstTodo));
	}
}

function reloadTodo(todo){
		const li = document.createElement("li");
		li.innerText = todo;
		todoList.appendChild(li);
		
		const button = document.createElement("button");
		button.innerText = "X";
		button.type = "click";
		li.appendChild(button);
}
document.addEventListener("submit", todoSubmit);
if(localTodo !== null) JSON.parse(localTodo).forEach(reloadTodo);
