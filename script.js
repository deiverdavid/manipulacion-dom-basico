const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#age");
const btn = document.querySelector("#btnRes");
const result = document.querySelector("#result");
const form = document.querySelector('#form')

 form.addEventListener("submit", EsMayorEdad);

function EsMayorEdad(event) {
  //  let resul = "Hola, {$inp1}" + Number(inp2.value);
  //   result.innerText = resul;
  event.preventDefault();
  inp2.value >= 18
    ? (result.innerText = "Hola " + inp1.value + " puedes pasar")
    : (result.innerText = inp1.value + " No puedes pasar");
}
