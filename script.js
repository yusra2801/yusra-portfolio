const emailBtn = document.getElementById("email-btn");

emailBtn.addEventListener("click", function (e) {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (!isMobile) {
    e.preventDefault();
    window.open(
      "https://mail.google.com/mail/?view=cm&to=yusraimran1435@gmail.com&su=Portfolio%20Inquiry",
      "_blank"
    );
  }
});