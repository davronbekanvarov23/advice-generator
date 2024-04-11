const templete = document.querySelector("template");
const url = "https://api.adviceslip.com/advice";
const ul = document.querySelector("ul");
const btn = document.getElementById("btn");

function getInfo() {
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((advices) => {
      updateUI(advices);
    })
    .catch();
}
getInfo();
function updateUI(advices) {
  ul.innerHTML = "";
  const clone = templete.content.cloneNode(true);
  const slipe_id = clone.querySelector("#slic_id");
  const text = clone.querySelector("#slic_advice");

  slipe_id.textContent = advices.slip.id;
  text.textContent = advices.slip.advice;

  ul.appendChild(clone);
}

btn.addEventListener("click", () => {
  getInfo();
});
