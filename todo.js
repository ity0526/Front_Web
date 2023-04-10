const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");


const TODOLIST = "Todolist"

let localTodo = localStorage.getItem(TODOLIST);

function todoSubmit(event) {
	if(todoInput.value !== ""){
		console.log(todoInput.value);
		event.preventDefault();
		const todo = todoInput.value;
		const li = document.createElement("li");
		li.innerText = todo;
		todoList.appendChild(li);

		const button = document.createElement("button");
		button.innerText = "X";
		button.className = "remove";
		button.addEventListener("click", removeTodo)
		li.appendChild(button);

		saveTodo(todo);

		todoInput.value = "";
	}else{
		alert("Please write Todo");
	}
}

function saveTodo(todo) { 
		
	if(localTodo !== null){
		const newTodo = JSON.parse(localTodo);
		newTodo.push(todo);
		localTodo = JSON.stringify(newTodo);
		localStorage.setItem(TODOLIST, localTodo);
	}else{
		const firstTodo = [];
		firstTodo.push(todo);
		localTodo = JSON.stringify(firstTodo);
		localStorage.setItem(TODOLIST, localTodo);
	}
}

function removeTodo(event) {
	const removeTarget = event.currentTarget.parentNode;
	
	const todo = localStorage.getItem(TODOLIST);
	const newTodo = JSON.parse(todo).remove(removeTarget.innerText);
	localStorage.setItem(TODOLIST, JSON.stringify(newTodo));
	
	todoList.removeChild(removeTarget);
}

function reloadTodo(todo){
	const li = document.createElement("li");
	li.innerText = todo;
	todoList.appendChild(li);
		
	const button = document.createElement("button");
	button.innerText = "X";
	button.className = "remove";
	button.addEventListener("click", removeTodo)
	li.appendChild(button);
}

document.addEventListener("submit", todoSubmit);
if(localTodo !== null) JSON.parse(localTodo).forEach(reloadTodo);

//객체를 이용해서 localStorage에 저장.