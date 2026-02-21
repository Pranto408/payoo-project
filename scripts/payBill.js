document.getElementById("bill-btn").addEventListener("click", function () {
  // Get Bank name
  const billerName = getValueFromInput("biller-name");
  if (billerName === "Select Biller Name") {
    alert("Please enter a valid biller name");
    return;
  }

  // Get Bank Account Number and Validate
  const billerNumber = getValueFromInput("biller-number");
  if (billerNumber.length !== 11) {
    alert("Invalid Biller Number !");
    return;
  }

  // Get Add money amount
  const billAmount = getValueFromInput("bill-amount");

  // Get Current Balance
  const currentBalance = getBalance();

  //Pay Bill Calculation
  const newBalance = Number(currentBalance) - Number(billAmount);
  if (newBalance < 0) {
    alert("Insufficient Balance !");
    return;
  }
  //get pin and validation
  const pin = getValueFromInput("bill-pin");
  if (pin === "1234") {
    alert("Bill Payment Successful");
    setBalance(newBalance);
    // Save history
    const historyContainer = document.getElementById("history-container");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-300">
            $${billAmount} payment to ${billerName} at ${
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
