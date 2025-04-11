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
    document.getElementById('verifyBtn').
