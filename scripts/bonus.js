document.getElementById("get-bonus-btn").addEventListener("click", function () {
  // Get Bank name
  const couponName = getValueFromInput("get-bonus-coupon");
  if (couponName !== "EID500") {
    alert("Invalid coupon");
    return;
  }
  // Get Current Balance
  const currentBalance = getBalance();

  //Coupon Money Calculation
  const newBalance = Number(currentBalance) + Number(500);
  alert("Add Coupon Successful");
  setBalance(newBalance);

  // Save history
  const historyContainer = document.getElementById("history-container");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-300">
            $${500} coupon added in your account at ${
              new Date().toDateString() +
              " Time :  " +
              new Date().toTimeString().slice(0, 8)
            }
        </div>
        `;
  historyContainer.appendChild(newHistory);
});
