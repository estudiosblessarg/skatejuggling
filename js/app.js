const content = document.getElementById("content");
const buttons = document.querySelectorAll("[data-section]");
const hamburger = document.getElementById("hamburger");
const navMobile = document.getElementById("navMobile");

/* ================= EMAILJS INIT ================= */
(function () {
  emailjs.init("V_AAaVXHx7XF8cio4");
})();

/* ================= SECTIONS ================= */
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

  location: `
    <h1>Ubicación</h1>
    <p>
      Entrenamos en el <strong>Skatepark de Villa Luro</strong>.
    </p>

    <div style="margin-top:40px; border:1px solid #e5e5e5;">
      <iframe
        src="https://www.google.com/maps?q=Skatepark%20Villa%20Luro%20Buenos%20Aires&output=embed"
        width="100%"
        height="400"
        style="border:0;"
        loading="lazy">
      </iframe>
    </div>
  `,

  turns: `
    <h1>Turnos</h1>
    <p>Reservá tu clase de skate freestyle.</p>

    <form id="turnosForm">
      <label>Día</label>
      <input type="date" name="day" required>

      <label>Horario</label>
      <select name="hour" required>
        <option value="">Seleccionar</option>
        <option>10:00</option>
        <option>11:30</option>
        <option>15:00</option>
        <option>16:30</option>
      </select>

      <input type="text" name="name" placeholder="Nombre" required>
      <input type="email" name="email" placeholder="Email" required>

      <button class="submit" type="submit">Reservar turno</button>
    </form>
  `,

  gallery: `
    <section class="gallery-section">
      <h1>Galería</h1>
      <div class="gallery-grid">
        <img src="img/Gallery1.jpg" class="gallery-item">
        <img src="img/Gallery2.jpg" class="gallery-item">
        <img src="img/Gallery3.jpg" class="gallery-item">
        <img src="img/Gallery4.jpg" class="gallery-item">
        <img src="img/Gallery5.jpg" class="gallery-item">
        <img src="img/Gallery6.jpg" class="gallery-item">
      </div>
    </section>

    <div class="lightbox" id="lightbox">
      <span class="lightbox-close">&times;</span>
      <img class="lightbox-img">
    </div>
  `,

  contact: `
    <h1>Contacto</h1>
    <p>Escribinos y te respondemos a la brevedad.</p>

    <form id="contactForm">
      <input type="text" name="name" placeholder="Nombre" required>
      <input type="email" name="email" placeholder="Email" required>
      <textarea name="message" rows="5" placeholder="Consulta" required></textarea>
      <button class="submit" type="submit">Enviar</button>
    </form>
  `
};

/* ================= GALLERY ================= */
function initGallery() {
  const images = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  if (!images.length) return;

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("open");
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("open");
  });

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) lightbox.classList.remove("open");
  });
}

/* ================= EMAIL FORMS ================= */

  /* TURNOS */
  document.addEventListener("submit", function (e) {

  if (e.target.id === "turnosForm") {
    e.preventDefault();

    emailjs.sendForm(
      "service_slo1od8",
      "template_2iers47",
      e.target
    ).then(() => {
      alert("Turno enviado correctamente");
      e.target.reset();
    }).catch(err => {
      console.error(err);
      alert("Error al enviar el turno");
    });
  }

  if (e.target.id === "contactForm") {
    e.preventDefault();

    emailjs.sendForm(
      "service_slo1od8",
      "template_99mpo3f",
      e.target
    ).then(() => {
      alert("Mensaje enviado correctamente");
      e.target.reset();
    }).catch(err => {
      console.error(err);
      alert("Error al enviar el mensaje");
    });
  }

});

/* ================= NAV ================= */
function loadSection(section) {
  content.style.opacity = 0;

  setTimeout(() => {
    content.innerHTML = sections[section];
    content.style.opacity = 1;
    initGallery();
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
