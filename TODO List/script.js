const addUserBtn = document.querySelector("#addUser");
const btnText = addUserBtn.innerText;
const userInputTextField = document.querySelector("#userInput");
const recordsDisplay = document.querySelector("#records");
let userArray = [];
let edit_id = null;

let objStr = localStorage.getItem("Task");
if (objStr != null) {
  userArray = JSON.parse(objStr);
}
displayInfo();
addUserBtn.addEventListener("click", (e) => {
  const todo = userInputTextField.value;
  if (todo.length != 0) {
    if (edit_id != null) {
      // edit
      userArray.splice(edit_id, 1, { Task: todo });
      edit_id = null;
    } else {
      // insert
      userArray.push({ Task: todo });
    }
  } else {
    alert("Please Enter Your Task");
  }
  saveInfo(userArray);
  userInputTextField.value = "";
  addUserBtn.innerText = btnText;
});

function saveInfo(userArray) {
  let str = JSON.stringify(userArray);
  localStorage.setItem("Task", str);
  displayInfo();
}
function displayInfo() {
  let statement = "";
  userArray.forEach((user, i) => {
    statement += `<tr>
    <th scope="row">${i + 1}</th>
    <td>${user.Task}</td>
    <td> <i class="fa fa-edit btn btn-info text-white mx-2" onclick="editInfo(${i})"></i> <i class="fa fa-trash btn btn-danger text-white" onclick="deleteInfo(${i})"></i></td>
  </tr>`;
  });
  recordsDisplay.innerHTML = statement;
}
function editInfo(id) {
  edit_id = id;
  userInputTextField.value = userArray[id].Task;
  addUserBtn.innerText = "Save Changes";
}
function deleteInfo(id) {
  userArray.splice(id, 1);
  saveInfo(userArray);
}

// Search Feature
const allTr = document.querySelectorAll("#records tr");
const searchInputField = document.querySelector("#search");

searchInputField.addEventListener("input", (e) => {
  const searchStr = e.target.value.toLowerCase();
  recordsDisplay.innerHTML = "";
  allTr.forEach((tr) => {
    const td_in_tr = tr.querySelectorAll("td");
    if (td_in_tr[0].innerText.toLowerCase().indexOf(searchStr) > -1) {
      recordsDisplay.appendChild(tr);
    }
  });
  if (recordsDisplay.innerHTML == "") {
    recordsDisplay.innerHTML = "No Records Found";
  }
});
