let step1Done = false;
let step2Done = false;

function completeStep1(button) {
  step1Done = true;
  button.style.background = "green";
  button.innerText = "Downloaded";
}

function verifyStep2(button) {
  showPopup("Verify Successful!", () => {
    step2Done = true;
    button.style.background = "green";
    button.innerText = "Verified";
  });
}

function submitUID() {
  const uid = document.getElementById("uid").value.trim();
  if (!step1Done || !step2Done) {
    showPopup("First complete Step 1 or 2");
    return;
  }

  if (uid === "") {
    showPopup("Please enter UID");
    return;
  }

  showPopup("Thanks", () => {
    showPopup("Under 5 hours UC send kar diya jayega ID par");
  });
}

function showPopup(message, callback) {
  const popup = document.getElementById("popup");
  popup.innerText = message;
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
    if (callback) callback();
  }, 2000);
}
￼Enter
