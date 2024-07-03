document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll(".forActive");

  menuItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default link behavior
      var currentActive = document.querySelector(".active");
      currentActive.classList.remove("active"); // Remove the active class from the current active item
      this.parentNode.classList.add("active"); // Add the active class to the clicked item's parent (<li>)
      window.location.href = this.getAttribute("href"); // Change the URL as per the link's href
    });
  });
});
