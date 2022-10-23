const loginButton = document.getElementById("submit");

async function getLogin() {
  const form = document.getElementById("loginform");
  const formData = new FormData(form);

  const response = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });

  if (response.ok) {
    const data = await response.json();
    sessionStorage.setItem("userId", data.data);
    window.location.replace("/admin");
  } else {
    document.getElementById("wrongPassword").textContent = "Forkert email eller password"
  }
}

loginButton.addEventListener("click", getLogin);

let session = sessionStorage.getItem("userId")
console.log(session)
if (session) {
  window.location.replace("/admin");
}