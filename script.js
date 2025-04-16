document.getElementById("downloadBtn").addEventListener("click", function () {
  window.open("https://shashankk.xyz/c?o=1&a=147", "_blank");
});

document.getElementById("verifyBtn").addEventListener("click", function () {
  alert("Verification process started...");
});

document.getElementById("submitBtn").addEventListener("click", function () {
  const uid = document.getElementById("uidInput").value;
  if (uid.trim() === "") {
    alert("Please enter a valid UID.");
    return;
  }
  document.getElementById("popupText").innerText = "380 UC will be sent to UID: " + uid + " within 24 hours.";
  document.getElementById("popup").style.display = "block";
});

document.getElementById("popupOk").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});
