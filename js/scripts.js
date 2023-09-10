document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("myProgressBar");
  
    window.addEventListener("scroll", function () {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      progressBar.style.width = progress + "%";
    });
  });