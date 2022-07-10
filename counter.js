let newNum = 0;

document.getElementById("btn").addEventListener("click", counter);
function counter() {
  newNum++;
  document.querySelector("#count").innerHTML = `<p>${newNum}</p>`;
}

document.getElementById("reset").addEventListener("click",resetButton);

function resetButton() {
  location.reload()
}

