document.getElementById("downloadBtn").addEventListener("click", function () {
  localStorage.setItem("step1Completed", "true");
  window.location.href = "https://rooter.sng.link/D46b2/p641?pcid=2085839952";
});

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("step1Completed") === "true") {
    const btn = document.getElementById("downloadBtn");
    btn.classList.add("completed");
    btn.innerText = "Downloaded";
  }
});

document.getElementById("verifyBtn").addEventListener("click", function () {
  showPopup("Verify Successful!", () => {
    const verifyBtn = document.getElementById("verifyBtn");
    verifyBtn.classList.add("completed");
    verifyBtn.innerText = "Verified";
    localStorage.setItem("step2Completed", "true");
  });
});

document.getElementById("submitBtn").addEventListener("click", function () {
  const uid = document.getElementById("uidInput").value.trim();
  if (!localStorage.getItem("step1Completed") || !localStorage.getItem("step2Completed")) {
    showPopup("Please complete Step 1 and Step 2 first.");
    return;
  }
  if (uid === "") {
    showPopup("Please enter your BGMI ID.");
    return;
  }
  showPopup("Thanks!", () => {
    setTimeout(() => {
      showPopup("Your 380 UC will be sent to your ID within 5 hours.");
    }, 500);
  });
});

function showPopup(message, callback) {
  const popup = document.getElementById("popup");
  const messageBox = document.getElementById("popupMessage");
  messageBox.innerText = message;
  popup.classList.add("show");

  popup.querySelector("button").onclick = function () {
    popup.classList.remove("show");
    if (callback) callback();
  };
}
