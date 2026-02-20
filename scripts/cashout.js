document.getElementById("cashout-btn").addEventListener("click", function () {
  // Get Agent Number and Validate
  const cashoutAgentNumber = document.getElementById(
    "cashout-agent-number",
  ).value;
  console.log(cashoutAgentNumber);

  if (cashoutAgentNumber.length !== 11) {
    alert("Invalid Agent Number !");
    return;
  }

  // Get Money Amount
  const cashoutMoneyAmount = document.getElementById("cashout-amount").value;
  console.log(cashoutMoneyAmount);

  // Get Current Balance
  const currentBalance = document.getElementById("current-balance").innerText;
  console.log(currentBalance);
  // Calculate New Balance
  const newBalance = Number(currentBalance) - Number(cashoutMoneyAmount);

  if (newBalance < 0) {
    alert("Invalid Amount !");
    return;
  }
  // Get pin and validation
  const pin = document.getElementById("input-pin").value;
  if (pin === "1234") {
    alert("Cashout Successful");
  } else {
    alert("Invalid Pin !");
    return;
  }
  console.log(newBalance);
  document.getElementById("current-balance").innerText = newBalance;
});
