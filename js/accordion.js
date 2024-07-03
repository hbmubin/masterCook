document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const accordionItem = this.parentElement;
      const isActive = accordionItem.classList.contains("active");

      // Close all open accordion items
      document.querySelectorAll(".accordion-item").forEach((item) => {
        item.classList.remove("active");
        item.querySelector(".accordion-content").style.display = "none";
        item.querySelector(".accordion-button").classList.remove("active");
      });

      // Toggle the clicked accordion item
      if (!isActive) {
        accordionItem.classList.add("active");
        accordionItem.querySelector(".accordion-content").style.display =
          "block";
        this.classList.add("active");
      }
    });
  });
});
