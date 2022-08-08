import { showSection, updateNav } from "./util.js";
import { homePage } from "./home.js";

const sec = document.getElementById("form-sign-up");
const form = sec.querySelector("form");

form.addEventListener("submit", onSubmit);

export function registerPage() {
  showSection(sec);
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);

  const email = formData.get("email").trim();
  const password = formData.get("password").trim();
  const repass = formData.get("repeatPassword").trim();

  if (!email || !password) {
    return alert("All fields are required!");
  }
  if (password != repass) {
    return alert("Passwords don't match!");
  }

  await register(email, password);
  form.reset();
  updateNav();
  homePage();
}

async function register(email, password) {
  try {
    const res = await fetch(
      `http://localhost:3030/users/register`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (res.ok == false) {
      const error = await res.json();
      throw new Error(error.message);
    }
    console.log(res);
    let data = await res.json();
    const userData = {
      email: data.email,
      id: data._id,
      token: data.accessToken,
    };
    localStorage.setItem("user", JSON.stringify(userData));
  } catch (err) {
    alert(err.message);
    throw err;
  }
}
