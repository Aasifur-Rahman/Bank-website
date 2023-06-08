document.getElementById("btn-login").addEventListener("click", function () {
  const email = document.getElementById("user-email").value;
  const password = document.getElementById("user-password").value;

  console.log(email);
  if (email === "tanbir1@gmail.com" && password === "gaytanbir") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid User");
  }
});
