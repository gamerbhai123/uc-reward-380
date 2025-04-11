document.addEventListener("DOMContentLoaded", function () {
  let step1Completed = false;
  let step2Completed = false;

  document.getElementById("downloadBtn").addEventListener("click", function () {
    step1Completed = true;
    this.classList.add("completed");
    this.innerText = "Downloaded";
  });

  document.getElementById("verifyBtn").addEventListener("click", function () {
    // Show popup
    const popup = document.createElement("div");
    popup.innerHTML = `
      <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
      background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.3); z-index: 9999;">
        <p style="color: green; font-weight: bold;">Verify Successful!</p>
        <button id="okBtn">OK</button>
      </div>`;
    document.body.appendChild(popup);

    document.getElementById("okBtn").addEventListener("click", () => {
      document.body.removeChild(popup);
      this.classList.add("completed");
      this.innerText = "Verified";
      step2Completed = true;
    });
  });

  document.getElementById("submitBtn").addEventListener("click", function () {
    const uid = document.getElementById("uidInput").value;
    if (!step1Completed || !step2Completed) {
      alert("First complete Step 1 or 2");
      return;
    }

    // Show thanks popup
    const popup1 = document.createElement("div");
    popup1.innerHTML = `
      <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
      background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.3); z-index: 9999;">
        <p style="color: green; font-weight: bold;">Thanks</p>
        <button id="okBtn2">OK</button>
      </div>`;
    document.body.appendChild(popup1);

    document.getElementById("okBtn2").addEventListener("click", () => {
      document.body.removeChild(popup1);

      const popup2 = document.createElement("div");
      popup2.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.3); z-index: 9999;">
          <p style="color: green; font-weight: bold;">Under 5 hours UC send kar diya jayega ID par</p>
        </div>`;
      document.body.appendChild(popup2);

      setTimeout(() => {
        document.body.removeChild(popup2);
      }, 3000);
    });
  });
});
