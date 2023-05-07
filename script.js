AOS.init({
  delay: 500,
  duration: 1000, // values from 0 to 3000, with step 50ms
});

const toggle_dark_mode = document.querySelector(".toggle-dark-mode");
const body = document.querySelector("body");

let get_mode = localStorage.getItem("mode");

if (get_mode && get_mode === "dark") {
  body.classList.add("light-theme");
}

toggle_dark_mode.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (!body.classList.contains("light-theme")) {
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

const stikcy_nav = document.querySelector("header");

window.addEventListener("scroll", function () {
  stikcy_nav.classList.toggle("sticky", window.scrollY > 100);
});

// CONTACT FORM
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwgpAj_vsSjawZIVM4TgK7UBvrig0sjK5oVlvcc6rd2EPAKDpoOoWbGua6g3NaJodxj/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.querySelector(".alert-success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.style.display = "block";
      msg.innerHTML = "Message has successfully sent!";
      setTimeout(() => {
        msg.style.display = "none";
      }, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
