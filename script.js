window.onscroll = function () {
  const scrollToTopButton = document.getElementById("scroll");
  const scrollPercentage =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;

  if (scrollPercentage > 15) {
    // When scrolled more than 5%
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

// Scroll back to top when the button is clicked
document.getElementById("scroll").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
