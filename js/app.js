const content = document.getElementById("content");
const buttons = document.querySelectorAll("[data-section]");
const hamburger = document.getElementById("hamburger");
const navMobile = document.getElementById("navMobile");

const sections = {
  home: `
    <h1>Skate Juggling – Academia de Skate Freestyle</h1>
    <p>
      Skate Juggling es una <strong>academia de skate</strong> enfocada en el desarrollo
      del equilibrio, el control y la expresión artística sobre la tabla.
      Formación, práctica y cultura urbana en un solo lugar.
    </p>
  `,

  about: `
    <h1>Quiénes Somos</h1>
    <p>
      Somos una <strong>academia de skate freestyle</strong> dedicada a enseñar y
      difundir el Skate Juggling como disciplina.
      Entrenamos equilibrio, técnica y creatividad, acompañando a skaters
      de todos los niveles en su evolución sobre la tabla.
    </p>
    <p>
      Nuestra metodología combina práctica progresiva, conciencia corporal
      y exploración artística del movimiento.
    </p>
  `,

  gallery: `
    <section class="gallery-section">
      <h1>Galería</h1>
      <p class="gallery-desc">
        Entrenamientos, sesiones y momentos de nuestra academia de skate.
      </p>

      <div class="gallery-grid">
        <img src="img/Gallery1.jpg" alt="Academia Skate Juggling entrenamiento freestyle" class="gallery-item">
        <img src="img/Gallery2.jpg" alt="Clases de skate freestyle Skate Juggling" class="gallery-item">
        <img src="img/Gallery3.jpg" alt="Skate Juggling equilibrio y control" class="gallery-item">
        <img src="img/Gallery4.jpg" alt="Entrenamiento de skate artístico" class="gallery-item">
        <img src="img/Gallery5.jpg" alt="Skate freestyle academia urbana" class="gallery-item">
        <img src="img/Gallery6.jpg" alt="Práctica de equilibrio sobre skate" class="gallery-item">
     
      </div>
    </section>

    <div class="lightbox" id="lightbox">
      <span class="lightbox-close">&times;</span>
      <img class="lightbox-img" src="" alt="">
    </div>
  `,

  contact: `
    <h1>Contacto</h1>
    <p>
      ¿Querés entrenar con nosotros o recibir información sobre la academia?
      Escribinos y te respondemos a la brevedad.
    </p>

    <form action="https://formspree.io/f/TU_ID_AQUI" method="POST">
      <input type="text" name="name" placeholder="Nombre" required>
      <input type="email" name="email" placeholder="Email" required>
      <textarea name="message" rows="5" placeholder="Consulta" required></textarea>
      <button class="submit" type="submit">Enviar</button>
    </form>
  `
};
function initGallery() {
  const images = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("open");
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("open");
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("open");
    }
  });
}

function loadSection(section) {
  content.style.opacity = 0;
  setTimeout(() => {
    content.innerHTML = sections[section];
    content.style.opacity = 1;
  }, 200);
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    loadSection(btn.dataset.section);
    navMobile.classList.remove("open");
    hamburger.classList.remove("active");
  });
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMobile.classList.toggle("open");
});

loadSection("home");