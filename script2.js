var audio = new Audio("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHh.mp3");

audio.loop = true
audio.play()
document.getElementById("nana").addEventListener("click", function() {window.location.href = "https://www.youtube.com/playables/UgkxytGBPWPaTj-4F9cRGT8X1JB-j_mbFsN4"});

/*Username:ElonMusk
Password:Money$
Gmail:elonmusk@gmail.com
Birthdays:June 28, 1971*/

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "ElonMusk" && pass === "Money$") {
    alert("Access Granted ✅");
  } else {
    alert("Locked Out ❌");
  }
}
