const show = document.getElementById("show");
const hide = document.getElementById("hide");
const div = document.getElementById("div");

show.addEventListener("click", () => {
  div.classList.remove("hide");
  div.classList.add("show-div");
  show.classList.add("hide-showarrow");
  hide.classList.add("show-hidearrow");
});

hide.addEventListener("click", () => {
  div.classList.add("hide-bar");
  div.classList.remove("show-div");
  show.classList.remove("hide-showarrow");
  hide.classList.remove("show-hidearrow");
});
