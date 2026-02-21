document.getElementById("transfer-btn").addEventListener("click", function () {
  // Get User Number and Validate
  const userNumber = getValueFromInput("user-number");
  if (userNumber.length !== 11) {
    alert("Invalid User Number !");
    return;
  }
  // Get Money Amount
  const transferAmount = getValueFromInput("transfer-amount");
  // Get Current Balance
  const currentBalance = getBalance();

  // Calculate New Balance
  const newBalance = Number(currentBalance) - Number(transferAmount);
  if (newBalance < 0) {
    alert("Invalid Amount !");
    return;
  }
  // Get pin and validation
  const pin = getValueFromInput("transfer-pin");
  if (pin === "1234") {
    alert("Transfer Successful");
    setBalance(newBalance);
    // Save history
    const historyContainer = document.getElementById("history-container");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-300">
            $${transferAmount} transfer to ${userNumber} at ${
              new Date().toDateString() +
              " Time :  " +
              new Date().toTimeString().slice(0, 8)
            }
        </div>
        `;
    historyContainer.appendChild(newHistory);
  } else {
    alert("Invalid Pin !");
    return;
  }
});
