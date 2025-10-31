function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "ElonMusk" && pass === "Money$") {
    alert("Access Granted ✅");
  } else {
    alert("Locked Out ❌");
  }
}
