document.addEventListener("DOMContentLoaded", function () {
    let step1Completed = false;
    let step2Completed = false;

    const downloadBtn = document.getElementById("downloadBtn");
    const verifyBtn = document.getElementById("verifyBtn");
    const submitBtn = document.getElementById("submitBtn");

    downloadBtn.addEventListener("click", function () {
        step1Completed = true;
        downloadBtn.classList.add("completed");
        downloadBtn.innerText = "Downloaded";
    });

    verifyBtn.addEventListener("click", function () {
        const popup = document.createElement("div");
        popup.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        background: #fff; padding: 20px; border-radius: 10px; text-align: center;
        box-shadow: 0 0 15px rgba(0,0,0,0.3); z-index: 9999;">
        <p style="color: green; font-weight: bold;">Verify Successful!</p>
        <button id="thanksOK" style="padding: 5px 15px; margin-top: 10px;">OK</button>
        </div>
        `;
        document.body.appendChild(popup);

        document.getElementById("thanksOK").addEventListener("click", function () {
            document.body.removeChild(popup);
            verifyBtn.classList.add("completed");
            verifyBtn.innerText = "Verified";
            step2Completed = true;
        });
    });

    submitBtn.addEventListener("click", function () {
        const uid = document.getElementById("uidInput").value;

        if (!step1Completed || !step2Completed) {
            const errorPopup = document.createElement("div");
            errorPopup.innerHTML = `
            <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: #fff; padding: 20px; border-radius: 10px; text-align: center;
            box-shadow: 0 0 15px rgba(0,0,0,0.3); z-index: 9999;">
            <p style="color: red; font-weight: bold;">First complete Step 1 or 2</p>
            </div>
            `;
            document.body.appendChild(errorPopup);
            setTimeout(() => {
                document.body.removeChild(errorPopup);
            }, 2000);
            return;
        }

        const thankPopup = document.createElement("div");
        thankPopup.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        background: #fff; padding: 20px; border-radius: 10px; text-align: center;
        box-shadow: 0 0 15px rgba(0,0,0,0.3); z-index: 9999;">
        <p style="color: green; font-weight: bold;">Thanks</p>
        <button id="thanksOK" style="padding: 5px 15px; margin-top: 10px;">OK</button>
        </div>
        `;
        document.body.appendChild(thankPopup);

        document.getElementById("thanksOK").addEventListener("click", function () {
            document.body.removeChild(thankPopup);

            const finalPopup = document.createElement("div");
            finalPopup.innerHTML = `
            <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: #fff; padding: 20px; border-radius: 10px; text-align: center;
            box-shadow: 0 0 15px rgba(0,0,0,0.3); z-index: 9999;">
            <p style="color: green; font-weight: bold;">UC will be sent to your ID within 5 hours.</p>
            </div>
            `;
            document.body.appendChild(finalPopup);
            setTimeout(() => {
                document.body.removeChild(finalPopup);
            }, 3000);
        });
    });
});
￼Enter
