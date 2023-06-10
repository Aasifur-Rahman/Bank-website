document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldId("deposit-amount");
  const previousDepositTotal = getElementId("deposit-total");
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  setTextElementValueById("deposit-total", newDepositTotal);

  const previousBalanceTotal = getElementId("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
