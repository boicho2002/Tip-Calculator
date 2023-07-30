const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");
const btn = document.querySelector("#calculate");
const total = document.querySelector("#total");
btn.addEventListener("click", () => {
  total.textContent = (bill.value * (1 + tip.value / 100)).toFixed(2);
  Reset();
});

function Reset() {
  bill.value = "";
  tip.value = "";
}

tip.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});

bill.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});
