function getValueFromInput(inputId) {
  const inputElement = document.getElementById(inputId);
  const inputValue = parseFloat(inputElement.value);
  console.log(inputValue);
  if (isNaN(inputValue)) {
    alert("Please Provide a valid number");
    return 0;
  } else {
    return inputValue;
  }

  // return inputValue;
}

function getValueFromElement(elementId) {
  const element = document.getElementById(elementId);
  const elementValue = parseFloat(element.innerText);

  if (isNaN(elementValue)) {
    // alert("Please provide a valid number");
    return 0;
  } else {
    return elementValue;
  }
}

function setValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

document.getElementById("btn-calculate").addEventListener("click", function () {
  let perPlayerAmount = getValueFromInput("per-player-field");
  const ol = document.getElementById("top-players-ol");
  let totalPlayerExpence = perPlayerAmount * ol.children.length;
  setValue("player-expence", totalPlayerExpence);
});

document
  .getElementById("btn-calculate-total")
  .addEventListener("click", function () {
    const totalPlayerExpence = getValueFromElement("player-expence");
    const managerAmount = getValueFromInput("manager-field");
    const coachAmount = getValueFromInput("coach-field");

    const total = totalPlayerExpence + managerAmount + coachAmount;
    setValue("total", total);
  });
