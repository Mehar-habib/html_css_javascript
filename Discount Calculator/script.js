const calculate = document.querySelector(".calculate");
const resetBtn = document.querySelector(".reset");

calculate.addEventListener("click", (e) => {
  e.preventDefault();

  let billAmt = document.querySelector("#amount").value;
  let percentage = document.querySelector("#discount-percentage").value;
  let discountAmt = document.querySelector("#discount-amount");
  let finalPay = document.querySelector("#pay");

  discountAmt.value = (billAmt * percentage) / 100;
  finalPay.value = billAmt - discountAmt.value;
});

resetBtn.addEventListener("click", () => {
  window.location.reload();
});
