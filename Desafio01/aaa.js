const btn = document.getElementById("send");
btn.addEventListener("click", function (event) {
  mostrar(event);
});

function mostrar(event) {
  event.preventDefault();
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  window.localStorage.setItem("nome", nome);
  window.localStorage.setItem("email", email);
}
