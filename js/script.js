/* =========================================================
   JAVASCRIPT DEL PORTFOLIO DE FEDERICO WACHENSCHWAN
   1) Menú hamburguesa   2) Año del pie de página
   3) Validación del formulario   4) Cambio de idioma ES / EN
   5) Ventana para ver los videos de los proyectos
   ========================================================= */

/* ===== 1) MENÚ HAMBURGUESA: ABRIR Y CERRAR EN EL CELULAR ===== */
const botonHamburguesa = document.getElementById("boton-hamburguesa");
const menuLinks = document.getElementById("menu-links");

botonHamburguesa.addEventListener("click", function () {
    const estaAbierto = menuLinks.classList.toggle("abierto");
    botonHamburguesa.classList.toggle("abierto", estaAbierto);
    botonHamburguesa.setAttribute("aria-expanded", estaAbierto);
});

// Al tocar un link del menú, el menú se cierra solo
const linksDelMenu = menuLinks.querySelectorAll("a");
for (const link of linksDelMenu) {
    link.addEventListener("click", function () {
        menuLinks.classList.remove("abierto");
        botonHamburguesa.classList.remove("abierto");
        botonHamburguesa.setAttribute("aria-expanded", false);
    });
}

/* ===== 2) PIE DE PÁGINA: AÑO ACTUAL ===== */
document.getElementById("anio-actual").textContent = new Date().getFullYear();

/* ===== 4) CAMBIO DE IDIOMA: TEXTOS EN INGLÉS ===== */
// Cada clave coincide con un atributo data-i18n del index.html.
// Los textos en español no se repiten acá: se guardan solos al cargar la página.
const textosEnIngles = {
    "menu.sobre": "About me",
    "menu.conocimientos": "Skills",
    "menu.proyectos": "Projects",
    "menu.redes": "Links",
    "menu.contacto": "Contact",

    "inicio.saludo": "Hi, I'm",
    "inicio.titulo": "Junior developer in training · C++ · C# / .NET · SQL",
    "inicio.descripcion": "I'm studying the University Technical Degree in Programming at UTN. I like understanding how things work under the hood and writing clear, tidy code.",
    "inicio.verProyectos": "See projects",
    "inicio.contactame": "Contact me",
    "inicio.cv": "Download CV",

    "sobre.titulo": "About me",
    "sobre.texto": "I'm a student of the University Technical Degree in Programming at UTN. During the degree I've worked with C++ (object-oriented programming, dynamic memory, files) and with C# and .NET (desktop applications with Windows Forms and SQL Server databases). Together with my team I built Daetherial, a 2D game in C++ with SFML. I'm interested in software development and video games, and I'm looking for my first professional experience as a developer.",
    "sobre.dato1": "Programming degree — UTN (2024 – present)",
    "sobre.dato2": "Buenos Aires, Argentina",
    "sobre.dato3": "English: advanced written · intermediate spoken",
    "sobre.dato4": "Looking for my first developer role",

    "conocimientos.titulo": "Skills",
    "conocimientos.lenguajes": "Languages",
    "conocimientos.js": "JavaScript (basic)",
    "conocimientos.paradigmas": "Paradigms and concepts",
    "conocimientos.poo": "Object-oriented programming",
    "conocimientos.memoria": "Dynamic memory",
    "conocimientos.estructuras": "Data structures and algorithms (A*)",
    "conocimientos.archivos": "Text and binary files",
    "conocimientos.patrones": "Patterns: state machine, layers",
    "conocimientos.frameworks": "Frameworks and libraries",
    "conocimientos.bases": "Databases",
    "conocimientos.abm": "Queries and CRUD",
    "conocimientos.herramientas": "Tools",
    "conocimientos.metodologias": "Methodologies",
    "conocimientos.equipo": "Teamwork with version control",
    "conocimientos.jira": "Jira (task tracking)",

    "proyectos.titulo": "Projects",
    "daetherial.etiqueta": "Featured project · 2D video game",
    "daetherial.descripcion": "Top-down 2D action-adventure game set in an ice world. We built it as a team in C++ with SFML for Programming II: about 6,000 lines organized in modules.",
    "daetherial.modalidad": "Team project · 4 members",
    "daetherial.queTiene": "What it includes",
    "daetherial.c1": "State machine for the screens: intro, menu, a 20-illustration story, gameplay, achievements and credits.",
    "daetherial.c2": "A playable wizard with animations, health, mana, gold and a fireball attack.",
    "daetherial.c3": "Final boss, the Ice Golem, which chases the player using the A* algorithm (our own pathfinding).",
    "daetherial.c4": "Shop and inventory, a map made with Tiled with collisions read from CSV, camera and fog.",
    "daetherial.c5": "Achievements saved to a binary file and inheritance between entities (EntidadViva → Personaje, Enemigo, Golem, Mascota).",
    "daetherial.videoPronto": "Gameplay video: coming soon",

    "modalidad.grupal": "Team project",
    "modalidad.individual": "Individual",
    "botones.video": "Watch video",
    "botones.codigo": "View code",
    "botones.verCodigoVideo": "See it in the video",
    "chips.consola": "Console",
    "chips.funciones": "Functions and arrays",
    "chips.modulos": ".h / .cpp modules",
    "chips.herencia": "Inheritance",
    "chips.encapsulamiento": "Encapsulation",
    "chips.constructores": "Constructors",
    "chips.matrices": "Matrices",
    "chips.validaciones": "Validation",

    "winforms.titulo": "Product catalog",
    "winforms.descripcion": "Desktop app to manage a store's catalog: create, edit and delete products, filtered search, image gallery and brand and category management.",
    "enfrendados.descripcion": "Turn-based console dice game: two 12-sided dice set the target and you have to combine dice that add up exactly. With penalties, tiebreaker and a UI with boxes and colors.",
    "generala.descripcion": "The classic dice game for 1 or 2 players: 10 rounds, 3 rolls per turn, dice you can keep, a score sheet with the 10 combinations, bonus for first-roll hands and a session high score.",
    "inmobiliaria.titulo": "Real estate system",
    "inmobiliaria.descripcion": "Console program to register properties for sale or rent: houses, country houses, apartments, stores and land, with two levels of inheritance.",
    "postulantes.titulo": "Applicant screening",
    "postulantes.descripcion": "System for a company to register job applicants, check whether they meet the minimum requirements and keep count of evaluated and rejected ones.",
    "torneo.titulo": "Lightning tournament",
    "torneo.descripcion": "Manages a 4-player round-robin tournament: entering results, a match table and reset, validating that nobody plays against themselves.",

    "practica.titulo": "Practice and exercises",
    "practica.texto": "Besides these projects, I solved the complete Programming I exercise guides (sequential, conditionals, loops, functions, arrays, matrices and structs) and Programming II and III exercises: a String class with dynamic memory, a Date class with validation, class composition, a monthly sales analysis done as a team and object models in C#.",
    "practica.video": "Watch the code walkthrough",
    "practica.github": "See my GitHub",

    "redes.titulo": "Links",

    "contacto.titulo": "Contact",
    "contacto.texto": "Have an offer or a question? Write to me and I'll get back to you shortly.",
    "contacto.nombre": "Name",
    "contacto.email": "Email",
    "contacto.asunto": "Subject",
    "contacto.opcional": "(optional)",
    "contacto.mensaje": "Message",
    "contacto.enviar": "Send",
    "contacto.gracias": "Thanks! I'll get back to you shortly.",

    "pie.hecho": "Made with HTML, CSS and JavaScript"
};

// Mensajes de error del formulario en los dos idiomas
const mensajesDeError = {
    es: {
        nombre: "Escribí tu nombre.",
        emailVacio: "Escribí tu email.",
        emailInvalido: "El email no parece válido (ejemplo: nombre@correo.com).",
        mensaje: "Escribí un mensaje."
    },
    en: {
        nombre: "Please enter your name.",
        emailVacio: "Please enter your email.",
        emailInvalido: "That email doesn't look valid (example: name@mail.com).",
        mensaje: "Please write a message."
    }
};

let idiomaActual = "es";
const elementosTraducibles = document.querySelectorAll("[data-i18n]");

// Guarda el texto original (en español) de cada elemento
for (const elemento of elementosTraducibles) {
    elemento.dataset.textoEspanol = elemento.textContent;
}

const botonIdioma = document.getElementById("boton-idioma");

botonIdioma.addEventListener("click", function () {
    idiomaActual = idiomaActual === "es" ? "en" : "es";

    for (const elemento of elementosTraducibles) {
        const clave = elemento.dataset.i18n;
        if (idiomaActual === "en" && textosEnIngles[clave]) {
            elemento.textContent = textosEnIngles[clave];
        } else {
            elemento.textContent = elemento.dataset.textoEspanol;
        }
    }

    // Actualiza el idioma de la página y el propio botón
    document.documentElement.lang = idiomaActual;
    botonIdioma.textContent = idiomaActual === "es" ? "EN" : "ES";
    botonIdioma.setAttribute("aria-label", idiomaActual === "es" ? "Cambiar el idioma a inglés" : "Switch language to Spanish");

    // Si había errores a la vista, se vuelven a escribir en el idioma nuevo
    if (formularioYaEnviado) {
        validarFormulario();
    }
});

/* ===== 3) FORMULARIO DE CONTACTO: VALIDACIÓN ===== */
const formulario = document.getElementById("formulario-contacto");
const campoNombre = document.getElementById("campo-nombre");
const campoEmail = document.getElementById("campo-email");
const campoMensaje = document.getElementById("campo-mensaje");
const mensajeGracias = document.getElementById("mensaje-gracias");
let formularioYaEnviado = false;

// Muestra (o borra, si el mensaje está vacío) el error de un campo
function mostrarError(campo, idDelError, mensaje) {
    document.getElementById(idDelError).textContent = mensaje;
    campo.parentElement.classList.toggle("campo-con-error", mensaje !== "");
    campo.setAttribute("aria-invalid", mensaje !== "");
}

// Revisa los campos obligatorios y devuelve true si está todo bien
function validarFormulario() {
    const textos = mensajesDeError[idiomaActual];
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let todoBien = true;

    if (campoNombre.value.trim() === "") {
        mostrarError(campoNombre, "error-nombre", textos.nombre);
        todoBien = false;
    } else {
        mostrarError(campoNombre, "error-nombre", "");
    }

    if (campoEmail.value.trim() === "") {
        mostrarError(campoEmail, "error-email", textos.emailVacio);
        todoBien = false;
    } else if (!formatoEmail.test(campoEmail.value.trim())) {
        mostrarError(campoEmail, "error-email", textos.emailInvalido);
        todoBien = false;
    } else {
        mostrarError(campoEmail, "error-email", "");
    }

    if (campoMensaje.value.trim() === "") {
        mostrarError(campoMensaje, "error-mensaje", textos.mensaje);
        todoBien = false;
    } else {
        mostrarError(campoMensaje, "error-mensaje", "");
    }

    return todoBien;
}

formulario.addEventListener("submit", function (evento) {
    // El formulario no tiene servidor: se valida y se muestra el agradecimiento
    evento.preventDefault();
    formularioYaEnviado = true;
    mensajeGracias.hidden = true;

    if (validarFormulario()) {
        mensajeGracias.hidden = false;
        formulario.reset();
        formularioYaEnviado = false;
    } else {
        // Lleva el foco al primer campo con error
        formulario.querySelector("[aria-invalid='true']").focus();
    }
});

// Mientras el usuario corrige, los errores se actualizan en el momento
for (const campo of [campoNombre, campoEmail, campoMensaje]) {
    campo.addEventListener("input", function () {
        if (formularioYaEnviado) {
            validarFormulario();
        }
    });
}

/* ===== 5) VENTANA DE VIDEO: ABRIR AL TOCAR UNA TARJETA ===== */
const ventanaVideo = document.getElementById("ventana-video");
const reproductor = document.getElementById("reproductor");
const botonCerrarVideo = document.getElementById("ventana-video-cerrar");
const botonesDeVideo = document.querySelectorAll("[data-video]");

for (const boton of botonesDeVideo) {
    boton.addEventListener("click", function () {
        reproductor.src = boton.dataset.video;
        // Algunos botones abren el video en un momento justo (data-inicio, en segundos)
        const inicio = Number(boton.dataset.inicio || 0);
        reproductor.addEventListener("loadedmetadata", function () {
            reproductor.currentTime = inicio;
        }, { once: true });
        ventanaVideo.showModal();
        reproductor.play();
    });
}

// Cerrar: con la X, tocando afuera del video o con Escape (lo hace el propio <dialog>)
botonCerrarVideo.addEventListener("click", function () {
    ventanaVideo.close();
});

ventanaVideo.addEventListener("click", function (evento) {
    if (evento.target === ventanaVideo) {
        ventanaVideo.close();
    }
});

// Al cerrarse la ventana, el video se detiene
ventanaVideo.addEventListener("close", function () {
    reproductor.pause();
    reproductor.removeAttribute("src");
    reproductor.load();
});
