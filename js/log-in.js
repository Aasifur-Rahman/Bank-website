document.getElementById("btn-login").addEventListener("click", function () {
  console.log("submit btn click");
  const email = document.getElementById("user-email").value;
  const password = document.getElementById("user-password").value;

  console.log(email);
  if (email === "tanbir1@gmail.com" && password === "gaytanbir") {
    console.log("valid user");
  } else {
    console.log("invalid user");
  }
});
