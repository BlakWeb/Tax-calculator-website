document.getElementById("submit").addEventListener("click", function() {
  const age = document.getElementById("age").value;
  const income = parseFloat(document.getElementById("income").value);
  const deductions = parseFloat(document.getElementById("deductions").value);
  const incomeError = document.getElementById("incomeError");
  const deductionsError = document.getElementById("deductionsError");
  const resultContainer = document.getElementById("resultContainer");

  // Reset error styles
  incomeError.style.display = "none";
  deductionsError.style.display = "none";

  // Check for errors
  let hasErrors = false;
  if (isNaN(income)) {
    incomeError.style.display = "inline";
    incomeError.style.margin = "-25px";
    hasErrors = true;
  }
  if (isNaN(deductions)) {
    deductionsError.style.display = "inline";
    deductionsError.style.margin = "-25px"
    hasErrors = true;
  }

  if (hasErrors) {
    return; 
  }

  // Calculate tax
  let tax = 0;
  if (income - deductions <= 8) {
    tax = 0;
  } else if (age < 40) {
    tax = 0.3 * (income - deductions - 8);
  } else if (age >= 40 && age < 60) {
    tax = 0.4 * (income - deductions - 8);
  } else if (age >= 60) {
    tax = 0.1 * (income - deductions - 8);
  }
  
  // Show pop-up message
  showPopUp(`Your overall income will be: ${tax}`);
});

function showPopUp(message) {
  // Create pop-up container
  const popUpContainer = document.createElement("div");
  popUpContainer.classList.add("popup");

  // Create message element
  const messageElement = document.createElement("p");
  messageElement.textContent = message;

  // Create close button
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", function() {
    popUpContainer.remove();
  });

  // Append elements to container
  popUpContainer.appendChild(messageElement);
  popUpContainer.appendChild(closeButton);

  // Append container to body
  document.body.appendChild(popUpContainer);
}
