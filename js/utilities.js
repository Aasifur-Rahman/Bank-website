function getInputFieldId(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldString = inputField.value;
  const inputFieldAmount = parseFloat(inputFieldString);
  inputField.value = "";
  return inputFieldAmount;
}

function getElementId(elementFieldId) {
  const elementField = document.getElementById(elementFieldId);
  const elementFieldString = elementField.innerText;
  const elementFieldTotal = parseFloat(elementFieldString);
  return elementFieldTotal;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
