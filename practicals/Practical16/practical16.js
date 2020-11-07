// selectors

var taskInput = document.querySelector(".task-input");
var todoBtn = document.querySelector(".btn");
var todoList = document.querySelector(".todo-list");

// Event Handlers

todoBtn.onclick = create;
todoList.onclick = checkDelete;

// Functions

function create(e) {
  // Stop data submission
  e.preventDefault();

  if (taskInput.value !== "") {
    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    var newLi = document.createElement("li");
    newLi.classList.add("todo-item");
    newLi.innerHTML = `${taskInput.value}`;
    newDiv.appendChild(newLi);

    var checkbtn = document.createElement("button");
    checkbtn.classList.add("check-btn");
    checkbtn.innerHTML = "<i class='fa fa-check'></i>";
    newDiv.appendChild(checkbtn);

    var deletebtn = document.createElement("button");
    deletebtn.classList.add("delete-btn");
    deletebtn.innerHTML = "<i class='fa fa-trash'></i>";
    newDiv.appendChild(deletebtn);
  }

  todoList.appendChild(newDiv);
  taskInput.value = "";
}

function checkDelete(e) {
  var item = e.target;
  if (item.classList[0] === "delete-btn") {
    var parent = item.parentNode;
    parent.remove();
  }
  if (item.classList[0] === "check-btn") {
    var parent = item.parentNode;
    parent.classList.toggle("completed");
  }
}
