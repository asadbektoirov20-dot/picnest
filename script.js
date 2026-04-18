
function openPage() {
  window.location.href = "design.html";
}
function openHome() {
  window.location.href = "index.html";
}
function openBell() {
  window.location.href = "bell.html"
}
function openUser() {
  window.location.href = "person.html"
}
function saveProfile() {
  let name = document.getElementById("name").value;
  let username = document.getElementById("username").value;

  localStorage.setItem("name", name);
  localStorage.setItem("username", username);

  showProfile();

  document.getElementById("formBox").style.display = "none";
}

function showProfile() {
  let name = localStorage.getItem("name");
  let username = localStorage.getItem("username");

  if (name && username) {
    document.getElementById("showName").innerText = name;
    document.getElementById("showUsername").innerText = "@" + username;

    document.getElementById("formBox").style.display = "none";
  }
}

// 🔥 EDIT PROFILE FUNCTION
function editProfile() {
  // inputlarni qayta chiqaramiz
  document.getElementById("formBox").style.display = "block";

  // oldingi ma’lumotlarni inputga yuklab qo‘yamiz
  document.getElementById("name").value = localStorage.getItem("name");
  document.getElementById("username").value = localStorage.getItem("username");
}

// sahifa ochilganda
showProfile();
