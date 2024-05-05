/*document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("myProgressBar");
  
    window.addEventListener("scroll", function () {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      progressBar.style.width = progress + "%";
    });
  }); */

//Skills Page
/*import Swal from 'sweetalert2'

document.addEventListener('DOMContentLoaded', function() {
  const tecnologias = [
    {
      "tecnologia": "CSS3",
      "descripcion": "Cascading Style Sheets (CSS) es un lenguaje de hojas de estilo utilizado para controlar la presentación de documentos HTML."
    },
    {
      "tecnologia": "GIT",
      "descripcion": "Git es un sistema de control de versiones distribuido, diseñado para manejar todo, desde proyectos pequeños hasta muy grandes, con rapidez y eficiencia."
    },
    // ... Otros elementos
  ];

  const buttons = document.querySelectorAll('.skillsPage button');

  buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
      const tecnologia = tecnologias[index].tecnologia;
      const descripcion = tecnologias[index].descripcion;

      Swal.fire({
        title: tecnologia,
        text: descripcion,
        icon: 'info',
        confirmButtonText: 'Entendido'
      });
    });
  });
});
 */

document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.animated-text');

  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function toggleAnimation() {
      elements.forEach(function(element) {
          if (isInViewport(element)) {
              element.classList.add('in');
              element.classList.remove('out');
          } else {
              element.classList.add('out');
              element.classList.remove('in');
          }
      });
  }

  window.addEventListener('scroll', toggleAnimation);
  toggleAnimation();
});

// language selector (doesn't work)
/*const flagsElement = document.getElementById("flags")

const changeLanguage = async (language) => {
  const requestJson = await fetch (`./assets/Languages/${language}.json`)
  const texts = await requestJson.json()

  console.log(texts)
}


flagsElement.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language)
})*/