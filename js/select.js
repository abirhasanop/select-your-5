function setPlayers(elementId, btnId) {
  const ol = document.getElementById("top-players-ol");
  const selectBtn = document.getElementById(btnId);
  if (ol.children.length < 5) {
    const playerNameElement = document.getElementById(elementId);
    const playerName = playerNameElement.innerText;
    let li = document.createElement("li");
    li.innerText = playerName;
    ol.appendChild(li);
    selectBtn.setAttribute("disabled", "");
  } else {
    alert("You Have Added The Maximum Number Of Players");
  }
}

// document.getElementById("cards").addEventListener("click", function (event) {
//   const selectBtnElement = event.target;
//   const messiElement = document.getElementById("messi-name");
//   const ol = document.getElementById("top-players-ol");
//   const messiName = messiElement.innerText;
//   let li = document.createElement("li");
//   li.innerText = messiName;

//   ol.appendChild(li);
// });

document.getElementById("messi-btn").addEventListener("click", function () {
  setPlayers("messi-name", "messi-btn");
});
document.getElementById("mbappe-btn").addEventListener("click", function () {
  setPlayers("mbappe-name", "mbappe-btn");
});
document.getElementById("neymar-btn").addEventListener("click", function () {
  setPlayers("neymar-name", "neymar-btn");
});
document.getElementById("ramos-btn").addEventListener("click", function () {
  setPlayers("ramos-name", "ramos-btn");
});
document.getElementById("silva-btn").addEventListener("click", function () {
  setPlayers("silva-name", "silva-btn");
});
document.getElementById("navas-btn").addEventListener("click", function () {
  setPlayers("navas-name", "navas-btn");
});
