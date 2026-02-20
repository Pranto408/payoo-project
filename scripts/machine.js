// Machine return value from id
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
}
// Machine return Current Balance
function getBalance() {
  const balance = document.getElementById("current-balance").innerText;
  return balance;
}
//Machine Set Current Balance
function setBalance(value) {
  document.getElementById("current-balance").innerText = value;
}

// Machine show Clicked Section only
function showOnly(id) {

    const addMoneySection = document.getElementById("add-money-section");
    const cashoutSection = document.getElementById("cashout-section");
    const transactionHistory = document.getElementById("transaction-history");
    //hide all section
    addMoneySection.classList.add("hidden");
    cashoutSection.classList.add("hidden");
    transactionHistory.classList.add("hidden");
    //show only id section
    const selected = document.getElementById(id);
    console.log(selected);
    selected.classList.remove("hidden");
}