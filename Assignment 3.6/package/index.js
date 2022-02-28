function flash() {
  const text = document.getElementById("mytext");
  text.style.color = text.style.color == "red" ? "green" : "red";
}
const clr = setInterval(flash, 300);
