document.getElementById("convertBtn").addEventListener("click", convertNumber);

function convertNumber() {
  const fromBase = parseInt(document.getElementById("fromBase").value);
  const toBase = parseInt(document.getElementById("toBase").value);
  const input = document.getElementById("inputNumber").value.trim();
  const resultDiv = document.getElementById("result");

  resultDiv.className = ""; // reset classes

  if (!input) {
    showError("Please enter a number.");
    return;
  }

  try {
    const decimal = parseInt(input, fromBase);
    if (isNaN(decimal)) throw new Error();

    const converted = decimal.toString(toBase).toUpperCase();
    showSuccess(`Result: ${converted}`);
  } catch (err) {
    showError("Invalid input! Please check your number or base.");
  }

  function showSuccess(message) {
    resultDiv.textContent = message;
    resultDiv.classList.add("success");
  }

  function showError(message) {
    resultDiv.textContent = message;
    resultDiv.classList.add("error");
  }
}
