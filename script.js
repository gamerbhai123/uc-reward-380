let step1Done = false;
let step2Done = false;

function completeStep1(button) {
  step1Done = true;
  button.style.background = "green";
  button.innerText = "Downloaded";
}

document.getElementById('verifyBtn').addEventListener('click', function () {
    const popup = document.createElement('div');
    popup.innerHTML = `
      <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                  background: #1e1e1e; padding: 20px; border-radius: 10px; z-index: 9999; text-align: center;">
        <p style="color: lime; font-weight: bold; font-size: 18px;">Verify Successful!</p>
        <button id="okBtn" style="margin-top: 10px; padding: 5px 15px; border: none; background: lime; color: black; border-radius: 5px;">OK</button>
      </div>
    `;
    document.body.appendChild(popup);

    document.getElementById('okBtn').addEventListener('click', () => {
        document.getElementById('verifyBtn').classList.add('completed');
        document.getElementById('verifyBtn').innerText = 'Verified';
        popup.remove();
    });
});

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
