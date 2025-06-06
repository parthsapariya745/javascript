let btn = document.getElementById("btn");
let empty = document.getElementById("empty");

btn.addEventListener("click", function () {
  let newTask = document.getElementById("newTask").value;
  let remove = document.getElementById("newTask");

  if (newTask.length > 0) {
    let ul = document.getElementById("ul");
    let li = document.createElement("li");
    ul.appendChild(li);

    li.innerHTML += `
      <span class="task-text">${newTask}</span>
      <div class="actions">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>`;
    remove.value = "";
    empty.innerText = "";
    operation(li);
  } else {
    empty.innerText = `*please enter your task`;
  }

  function operation(li) {
    li.querySelector(".delete-btn").addEventListener("click", function () {
      li.remove();
    });
    li.querySelector(".edit-btn").addEventListener("click", function () {
      li.innerHTML = `
        <div class="box"> 
          <input type="text" class="edit-task" id="editTask" placeholder="Enter a edit task">
          <button class="edit-btn" id="output">Save</button>
        </div>`;

      li.querySelector("#output").addEventListener("click", function () {
        let editTask = document.getElementById("editTask").value;
        li.innerHTML = `
          <span class="task-text">${editTask}</span>
          <div class="actions"> 
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </div>`; 
        operation(li);
      });
    });
  }
});