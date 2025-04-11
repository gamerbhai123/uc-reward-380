let step1Completed = false;
let step2Completed = false;

document.getElementById('downloadBtn').addEventListener('click', function () {
  step1Completed = true;
  setTimeout(() => {
    this.classList.add('completed');
    this.innerText = 'Downloaded';
  }, 1000);
  window.location.href = 'https://rooter.sng.link/D46b2/p641?pcid=2085839952';
});

document.getElementById('verifyBtn').addEventListener('click', function () {
  showPopup('Verify Successful!', () => {
    this.classList.add('completed');
    this.innerText = 'Verified';
    step2Completed = true;
  });
});

document.getElementById('submitBtn').addEventListener('click', function () {
  const uid = document.getElementById('uidInput').value.trim();

  if (!step1Completed || !step2Completed) {
    showPopup('First complete Step 1 or 2');
    return;
  }

  if (uid === '') {
    showPopup('Please enter UID');
    return;
  }

  showPopup('Thanks!', () => {
    showPopup('UC will be sent to your ID within 5 hours.');
  });
});

function showPopup(text, callback) {
  const popup = document.getElementById('popup');
  const popupText = document.getElementById('popupText');
  const popupOk = document.getElementById('popupOk');

  popupText.innerText = text;
  popup.style.display = 'flex';

  popupOk.onclick = function () {
    popup.style.display = 'none';
    if (callback) callback();
  };
}
// ✅ Step 3: Submit button turns green when clicked (if Step 1 & 2 completed)
document.getElementById("submitBtn").addEventListener("click", function () {
  if (step1Completed && step2Completed) {
    this.classList.add("completed");
  }
});
