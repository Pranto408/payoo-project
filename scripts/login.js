document.getElementById("login-btn").addEventListener("click", function () {
  const mobileNumber = document.getElementById("input-mobile");
  const numberValue = mobileNumber.value;
  console.log(numberValue);

  const pinNumber = document.getElementById("input-pin");
  const pinValue = pinNumber.value;
  console.log(pinValue);

  if (numberValue == "01234567890" && pinValue == "1234") {
      alert("Login Successful");
      window.location.assign("./home.html");
  } else {
    alert("Login Failed");
    return;
  }
});
