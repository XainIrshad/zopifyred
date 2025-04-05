// Make product images clickable
document.querySelectorAll("section.container img").forEach((img, index) => {
  img.style.cursor = "pointer";
  img.addEventListener("click", () => {
    const productId = index + 1; // Just a dummy id, for now
    window.location.href = `product.html?id=${productId}`;
  });
});

// Footer subscription alert
document.querySelector("footer form").addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInput = e.target.querySelector('input[type="email"]');
  if (emailInput.value.trim() !== "") {
    alert(`Thanks for subscribing, ${emailInput.value}!`);
    emailInput.value = "";
  } else {
    alert("Please enter a valid email address.");
  }
});
