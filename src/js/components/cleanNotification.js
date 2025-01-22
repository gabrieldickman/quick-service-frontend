export function showNotification() {
  const main = document.querySelector(".body");
  const span = document.createElement("span");
  span.setAttribute("class", "notificacao-campos-limpos");
  span.innerText = "Os campos foram limpos";
  main.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 3000);
}