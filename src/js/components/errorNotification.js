export function showNotification(errorMessage) {
  const main = document.querySelector(".body");
  const span = document.createElement("span");
  span.setAttribute("class", "notificacao-erros");
  span.innerText = `${errorMessage}`;
  main.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 3000);
}