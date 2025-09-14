const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You Must Write Something!");
  } else {
    let li = document.createElement("li"); // Create new Elenmtnt li
    li.innerHTML = inputBox.value; // Get The velu from input inside li innerHtml
    listContainer.appendChild(li); // appendChild li insed ul
    let span = document.createElement("span"); // to creat reomv task
    span.innerHTML = "\u00d7"; // x icon ,can user remov the task
    li.appendChild(span); //appendd child remov inside the li
  }
  inputBox.value = ""; // Clear The input after add the task
  saveData(); // Sava all elemin insid the ul elemint in the local storge
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      //chiek the event form the li elemnet
      e.target.classList.toggle("checked"); // this toggle he add(<li class="checked">Task1</li> = "cecked") & reomve (<li>Task1</li>)
      saveData();
    } else if (e.target.tagName === "SPAN") {
      //chech the event form the span elemnt
      e.target.parentElement.remove();
      saveData();
    }
  },
  true
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML); //set Data in the localstorge
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data"); //get data in the localStorge
}

showTask(); // get data insed the local sorge ex: data:<li class="checked">task 1<span>×</span></li>
