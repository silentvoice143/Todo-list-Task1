const inputbox = $("#input-box");
const addbtn = $("#additem");
var todolist = $(".todolist");
function showTask() {
  //   console.log(localStorage.getItem("data"));
  var html = localStorage.getItem("data");
  if (html !== null) {
    $(".todolist").html(html);
  } else {
    $(".todolist").html(`<li class="todo-item" onclick="check(this)">
      <span>Welcome!</span><button class="close">X</button>
    </li>`);
  }
}

showTask();

inputbox.keyup((event) => {
  if (event.keyCode === 13) {
    addbtn.click();
  }
});

$(".todolist").on("click", ".close", (e) => {
  $(e.target).parent().remove();
  localStorage.clear();
  savedata();
});

function check(event) {
  select = event.querySelectorAll("span")[0];
  //   console.log(select);
  if (select.style.textDecoration === "line-through") {
    select.style.textDecoration = "none";
  } else {
    select.style.textDecoration = "line-through";
  }
  localStorage.clear();
  savedata();
}

function additem() {
  //   console.log(inputbox.val());
  if (inputbox.val() === "") {
    alert("You must write something!");
  } else {
    if (inputbox.val().length > 70) {
      alert("Too many character!");
      return;
    }
    let li = document.createElement("li");
    todolist.append(li);
    li.classList.add("todo-item");
    li.setAttribute("onclick", "check(this)");
    li.innerHTML +=
      `<span>${inputbox.val()}</span>` +
      '<button class="close" value="btn">X</button>';

    inputbox.val("");
    savedata();
  }
}

function savedata() {
  data = $(".todolist").html();
  //   console.log(`${data}`);
  localStorage.setItem("data", `${data}`);
}
