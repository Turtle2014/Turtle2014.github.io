var audio = new Audio("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHh.mp3");

audio.loop = true
audio.play()
document.getElementById("nana").addEventListener("click", function() {window.location.href = "https://www.youtube.com/playables/UgkxytGBPWPaTj-4F9cRGT8X1JB-j_mbFsN4"});

/*Username:ElonMusk
Password:Money$
Gmail:elonmusk@gmail.com
Website:Look in the omni bar
Phone Number: 1(803)566-6875
Birthdays:June 28, 1971, 11:58 PM
he does not own a masion or a yacht But he owns a Tesla.*/ 
const ELONUSERNAME = 'ElonMusk';
const ELONPASSWORD  = 'Money$';
const form = document.getElementById('loginForm');
const msg = document.getElementById('message);
const secret= document.getElementById('secret');

form.addEventListener('submit', function (e) {
  e.preventDefault();
const user = document.getElementById('username').value;
const pass = document.getElementById('password').value;

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "ElonMusk" && pass === "Money$") {
    alert("Access Granted ✅");
  } else {
    alert("Locked Out ❌");
  }
}
