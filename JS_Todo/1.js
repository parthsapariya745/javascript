let btn = document.getElementById("btn");
let empty = document.getElementById("empty");

btn.addEventListener("click", function () {
  let newTask = document.getElementById("newTask").value;
  let remove = document.getElementById("newTask");

  if (newTask.length > 0) {
    let ul = document.getElementById("ul");
    ul.innerHTML += `
    <li id="li" class="li">
      <span class="task-text">${newTask}</span>
      <div class="actions">
        <button class="edit-btn" onclick="edList()">Edit</button>
        <button class="delete-btn" onclick="delList()">Delete</button>
      </div>
    </li>`;
    remove.value = "";
    empty.innerText = "";
  } else {
    empty.innerText = `*please enter your task`;
  }
});
function delList() {
    let li = document.getElementById("li")
    li.querySelector(".li")
    li.remove()
}
function edList() {
    let li = document.getElementById("ll");
    li.innerHTML += `
      <input type="text" id="newTask" placeholder="Enter a edit task">
      <div class="actions">
        <button class="edit-btn" onclick="edList()">Edit</button>
        <button class="delete-btn" onclick="delList()">Delete</button>
      </div>`
}