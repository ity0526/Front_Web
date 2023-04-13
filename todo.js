const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

if(localStorage.getItem("todolist") === null){
	localStorage.setItem("todolist", "{}")
}
	
function submitTodo(event) {
	event.preventDefault();
	const obj = {
		key : new Date().getTime(),
		todo : todoInput.value
	};
	
	if(obj.todo !== ""){
		writeTodo(obj);
		saveTodo(obj);
		
		todoInput.value = "";
	}else{
		alert("Please write todo")
	}
}

function writeTodo(obj) {
	const li = document.createElement("li");
	li.innerText = obj.todo;
	li.id = obj.key;
	
	const button = document.createElement("button")
	button.innerText = "X"
	li.appendChild(button);
	button.addEventListener("click", delTodo);
	
	todoList.appendChild(li);
}

function saveTodo(obj) {
	const saveTodolist = JSON.parse(localStorage.getItem("todolist"));
	saveTodolist[obj.key] = obj.todo;
	
	localStorage.setItem("todolist", JSON.stringify(saveTodolist));
}

function delTodo(event) {
	const delTarget = event.currentTarget.parentNode;
	const delTodoList = JSON.parse(localStorage.getItem("todolist"));
	delete delTodoList[delTarget.id];
	localStorage.setItem("todolist", JSON.stringify(delTodoList));
	
	todoList.removeChild(delTarget);
}

function reloadTodo() {
	const reloadObj = JSON.parse(localStorage.getItem("todolist"));
	for(key in JSON.parse(localStorage.getItem("todolist"))){
		const li = document.createElement("li");
		li.innerText = reloadObj[key];
		li.id = key;

		const button = document.createElement("button")
		button.innerText = "X"
		li.appendChild(button);
		button.addEventListener("click", delTodo);

		todoList.appendChild(li);
	};

}

todoForm.addEventListener("submit", submitTodo);
reloadTodo();