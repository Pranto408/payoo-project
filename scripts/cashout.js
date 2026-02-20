document.getElementById("cashout-btn").addEventListener("click", function () {
  // Get Agent Number and Validate
  const cashoutAgentNumber = getValueFromInput("cashout-agent-number");
  if (cashoutAgentNumber.length !== 11) {
    alert("Invalid Agent Number !");
    return;
  }
  // Get Money Amount
  const cashoutMoneyAmount = getValueFromInput("cashout-amount");
  // Get Current Balance
    const currentBalance = getBalance();


  // Calculate New Balance
  const newBalance = Number(currentBalance) - Number(cashoutMoneyAmount);
  if (newBalance < 0) {
    alert("Invalid Amount !");
    return;
  }
  // Get pin and validation
  const pin = getValueFromInput("input-pin");
  if (pin === "1234") {
    alert("Cashout Successful");
    setBalance(newBalance);
    // Save history
    const historyContainer = document.getElementById("history-container");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-300">
            $${(cashoutMoneyAmount)} cash out from agent account ${cashoutAgentNumber} at ${
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
