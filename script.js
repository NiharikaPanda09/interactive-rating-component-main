document.addEventListener("DOMContentLoaded", () => {
    const ratingButtons = document.querySelectorAll(".btn");
    const submitButton = document.getElementById("sub-btn");
    const rateDisplay = document.getElementById("rate");
    const ratingSection = document.querySelector(".container");
    const thankSection = document.querySelector(".thank-sec");
  
    let selectedRate = null;
  
    ratingButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        ratingButtons.forEach((btn) => btn.classList.remove("checked"));
        e.target.classList.add("checked");
        selectedRate = e.target.textContent;
      });
    });
  
    submitButton.addEventListener("click", () => {
      if (selectedRate) {
        rateDisplay.textContent = selectedRate;
        ratingSection.classList.add("hidden");
        thankSection.classList.remove("hidden");
      }
    });
  });
  