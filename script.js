const toggle_dark_mode = document.querySelector(".toggle-dark-mode");
const body = document.querySelector("body");

let get_mode = localStorage.getItem("mode");

if (get_mode && get_mode === "dark") {
  body.classList.add("dark-theme");
}

toggle_dark_mode.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (!body.classList.contains("dark-theme")) {
    localStorage.setItem("mode", "light");
  } else {
    localStorage.setItem("mode", "dark");
  }
});

function check_toggle() {
  let check_box = document.querySelector(".checkbox");
  let nav = document.querySelector(".overlay");
  if (check_box.checked == true) {
    nav.classList.add("show");
  } else {
    nav.classList.remove("show");
  }
}
