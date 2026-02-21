document.getElementById("add-money-btn").addEventListener("click", function () {
  // Get Bank name
  const bankName = getValueFromInput("add-money-bank-name");
  if (bankName === "Select bank") {
    alert("Please enter a valid bank name");
    return;
  }

  // Get Bank Account Number and Validate
  const bankAccountNumber = getValueFromInput("add-money-bank-number");
  if (bankAccountNumber.length !== 11) {
    alert("Invalid Bank Account Number !");
    return;
  }

  // Get Add money amount
  const addMoneyAmount = getValueFromInput("add-money-amount");
  if (addMoneyAmount < 0) {
    alert("Invalid Amount");
    return;
  }
  // Get Current Balance
  const currentBalance = getBalance();

  //Add money Calculation
  const newBalance = Number(currentBalance) + Number(addMoneyAmount);

  //get pin and validation
  const pin = getValueFromInput("add-money-pin");
  if (pin === "1234") {
    alert("Add Money Successful");
    setBalance(newBalance);
    // Save history
    const historyContainer = document.getElementById("history-container");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-300">
            $${addMoneyAmount} added in your ${bankName} bank account at ${
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
