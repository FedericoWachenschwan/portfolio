/* =========================================================
   JAVASCRIPT DEL PORTFOLIO DE FEDERICO WACHENSCHWAN
   1) Menú hamburguesa   2) Año del pie de página
   3) Validación del formulario   4) Cambio de idioma ES / EN
   5) Ventana para ver los videos de los proyectos
   6) Menú: resaltar la sección actual   7) Aparición suave al hacer scroll
   8) Contadores de la sección Práctica
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
    "menu.sobre": "About",
    "menu.conocimientos": "Skills",
    "menu.proyectos": "Projects",
    "menu.practica": "Practice",
    "menu.redes": "Links",
    "menu.contacto": "Contact",

    "inicio.saludo": "Hi, I'm",
    "inicio.titulo": "Developer in training · C++ · C# / .NET · SQL",
    "inicio.descripcion": "I build desktop applications, console programs and video games in C++ and C# / .NET.",
    "inicio.verProyectos": "See projects",
    "inicio.contactame": "Contact me",
    "inicio.cv": "Download CV",
    "inicio.disponible": "Available for my first role as a developer",

    "sobre.titulo": "About me",
    "sobre.texto": "Student of the University Technical Degree in Programming at UTN. I program in C++ and C# / .NET: from console applications and data structures to Windows Forms desktop apps with SQL Server, and 2D video games. I learn by doing: I turned every topic of my degree into code, with more than 300 programs of my own. I’m looking for my first role as a developer, in a team where I can contribute and keep growing.",
    "sobre.dato1": "Programming degree — UTN (2024 – present)",
    "sobre.dato2": "Buenos Aires, Argentina",
    "sobre.dato3": "English: advanced written · intermediate spoken",
    "sobre.dato4": "Available for my first role as a developer",

    "conocimientos.titulo": "Skills",
    "conocimientos.intro": "Technologies, tools and concepts applied in academic and personal projects.",
    "conocimientos.lenguajes": "Languages",
    "conocimientos.js": "JavaScript",
    "conocimientos.paradigmas": "Paradigms and concepts",
    "conocimientos.poo": "Object-oriented programming",
    "conocimientos.memoria": "Dynamic memory",
    "conocimientos.estructuras": "Data structures and algorithms",
    "conocimientos.archivos": "Text and binary files",
    "conocimientos.patrones": "Patterns: state machine, layers",
    "conocimientos.frameworks": "Frameworks and libraries",
    "conocimientos.bases": "Databases",
    "conocimientos.abm": "Queries and CRUD",
    "conocimientos.herramientas": "Tools",
    "conocimientos.metodologias": "Methodologies",
    "conocimientos.equipo": "Teamwork with version control",
    "conocimientos.jira": "Jira (task tracking)",
    "conocimientos.scrum": "Agile methodologies: Scrum",

    "proyectos.titulo": "My projects",
    "proyectos.intro": "A selection of my most complete work. Each one includes a video demo and its source code.",
    "proyectos.contiene": "Features",
    "daetherial.etiqueta": "Featured project · 2D video game",
    "daetherial.descripcion": "Top-down 2D action-adventure game set in an ice world. Built as a team in C++ with SFML for Programming II: about 6,000 lines of code organized in modules.",
    "daetherial.modalidad": "Team project",
    "daetherial.contiene": "Features",
    "daetherial.c1": "State machine for screen navigation: intro, menu, illustrated story, gameplay, achievements and credits.",
    "daetherial.c2": "Playable character with directional animations, health, mana and gold systems, and magic attacks.",
    "daetherial.c3": "Final boss with smart pursuit using a custom implementation of the A* algorithm.",
    "daetherial.c4": "Shop and inventory, a Tiled map with collisions loaded from CSV, dynamic camera and fog.",
    "daetherial.c5": "Achievements persisted in binary files and a class hierarchy with inheritance (EntidadViva → Personaje, Enemigo, Golem, Mascota).",
    "daetherial.verTrailer": "Watch the trailer · 1:40",
    "grupos.escritorio": "Desktop application · C# / .NET · Windows Forms",
    "grupos.consola": "Console applications · C++ · No graphical interface",

    "modalidad.grupal": "Team project",
    "modalidad.individual": "Individual",
    "botones.video": "Watch video",
    "botones.codigo": "View code",
    "chips.consola": "Console",
    "chips.funciones": "Functions and arrays",
    "chips.modulos": ".h / .cpp modules",
    "chips.herencia": "Inheritance",
    "chips.encapsulamiento": "Encapsulation",
    "chips.matrices": "Matrices",
    "chips.memoria": "Dynamic memory",

    "winforms.titulo": "Product catalog",
    "winforms.descripcion": "Desktop application to manage a store's product catalog, connected to a SQL Server database.",
    "winforms.c1": "Create, edit and delete products with data validation.",
    "winforms.c2": "Combined-filter search and an image gallery for each product.",
    "winforms.c3": "Brand and category management, with a layered architecture.",
    "enfrendados.descripcion": "Turn-based console dice game: two 12-sided dice set a target and each player must combine dice that add up to exactly that value.",
    "enfrendados.c1": "Two-step turns with validation of every choice.",
    "enfrendados.c2": "Penalty system and a \"last chance\" tiebreaker.",
    "enfrendados.c3": "Console interface with frames, colors and drawn dice.",
    "nsfy.descripcion": "Turn-based dice game for two players: every combination is an ingredient of the soup and, if a roll scores nothing, here comes the dreaded \"No soup for you!\".",
    "nsfy.c1": "Combination detection with 6 dice: pairs, three of a kind, three pairs and straight.",
    "nsfy.c2": "A risk decision on every roll (cash in or keep going) and a confidence system that caps points per round.",
    "nsfy.c3": "End-of-game milestones, a results table and last-game statistics.",
    "chips.vectores": "Arrays and matrices",
    "generala.descripcion": "Console version of the classic dice game, for one or two players, with a complete score sheet.",
    "generala.c1": "10 rounds with 3 rolls per turn and selection of the dice to keep.",
    "generala.c2": "Detection of all 10 combinations, first-roll bonus and session high score.",
    "generala.c3": "Code split into modules: game logic and screen drawing.",

    "practica.titulo": "Practice",
    "practica.intro": "Console programs in C++ and C# and SQL Server database scripts: guides, exercises and assignments from my degree, solved and executed.",
    "practica.n1": "programs",
    "practica.n2": "lines of code",
    "practica.n3": "assignments solved",
    "practica.videoTitulo": "The full walkthrough",
    "practica.videoTexto": "A short sample: folders, assignments, more than 127 programs running and databases · 5 min",
    "practica.destacados": "Featured exercises",
    "practica.github": "See all the exercises on GitHub",
    "inmobiliaria.titulo": "Real estate system",
    "inmobiliaria.descripcion": "Registry of properties for sale or rent, modeled with two levels of inheritance.",
    "postulantes.titulo": "Applicant screening",
    "postulantes.descripcion": "Applicant registry with automatic evaluation of minimum requirements.",
    "bd.titulo": "Databases in SQL Server",
    "bd.descripcion": "Relational model with keys and constraints, data loading and action queries.",
    "cadena.titulo": "String class",
    "cadena.descripcion": "A custom text class that manages its own memory with new and delete.",
    "csharp.titulo": "Object models in C#",
    "csharp.descripcion": "Automatic gate, bank account and coffee machine, with properties and validation.",
    "guias.titulo": "Programming I guides",
    "guias.descripcion": "8 complete guides: sequential, conditionals, loops, functions, arrays, matrices and structs.",

    "redes.titulo": "Links",
    "redes.intro": "Professional profiles and contact details.",
    "redes.verPerfil": "View profile",
    "redes.verRepos": "View repositories",
    "redes.escribime": "Email me",
    "practica.verGithub": "View on GitHub",

    "contacto.titulo": "Contact",
    "contacto.texto": "For job offers or questions, fill in the form or email me. I'll get back to you shortly.",
    "contacto.nombre": "Name",
    "contacto.email": "Email",
    "contacto.asunto": "Subject",
    "contacto.opcional": "(optional)",
    "contacto.mensaje": "Message",
    "contacto.enviar": "Send",
    "contacto.gracias": "Thanks! I'll get back to you shortly.",
    "contacto.errorEnvio": "The message could not be sent. Email me directly at",

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

// El sitio no tiene servidor propio: el mensaje se envía por mail con el servicio gratuito FormSubmit
const direccionDeEnvio = "https://formsubmit.co/ajax/fedew10@outlook.com.ar";
const botonEnviar = formulario.querySelector("button[type='submit']");
const mensajeErrorEnvio = document.getElementById("mensaje-error-envio");

formulario.addEventListener("submit", async function (evento) {
    evento.preventDefault();
    formularioYaEnviado = true;
    mensajeGracias.hidden = true;
    mensajeErrorEnvio.hidden = true;

    if (!validarFormulario()) {
        // Lleva el foco al primer campo con error
        formulario.querySelector("[aria-invalid='true']").focus();
        return;
    }

    // Mientras se envía, el botón queda deshabilitado
    const textoOriginal = botonEnviar.textContent;
    botonEnviar.disabled = true;
    botonEnviar.textContent = idiomaActual === "es" ? "Enviando..." : "Sending...";

    try {
        const respuesta = await fetch(direccionDeEnvio, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({
                nombre: campoNombre.value.trim(),
                email: campoEmail.value.trim(),
                _subject: document.getElementById("campo-asunto").value.trim() || "Nuevo mensaje desde el portfolio",
                mensaje: campoMensaje.value.trim(),
                _template: "table",
                _captcha: "false"
            })
        });
        if (!respuesta.ok) {
            throw new Error("Respuesta " + respuesta.status);
        }
        mensajeGracias.hidden = false;
        formulario.reset();
        formularioYaEnviado = false;
    } catch (error) {
        // Si el servicio no responde, se ofrece escribir directo al mail
        mensajeErrorEnvio.hidden = false;
    } finally {
        botonEnviar.disabled = false;
        botonEnviar.textContent = textoOriginal;
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

/* ===== 6) MENÚ: MARCAR EN QUÉ SECCIÓN ESTÁ EL USUARIO ===== */
// Cuando una sección ocupa el centro de la pantalla, su link del menú queda resaltado
const seccionesConLink = document.querySelectorAll("main section[id]");

const observador = new IntersectionObserver(function (entradas) {
    for (const entrada of entradas) {
        if (entrada.isIntersecting) {
            for (const link of linksDelMenu) {
                link.classList.toggle("activo", link.getAttribute("href") === "#" + entrada.target.id);
            }
        }
    }
}, { rootMargin: "-45% 0px -50% 0px" });

for (const seccion of seccionesConLink) {
    observador.observe(seccion);
}

/* ===== LUZ QUE SIGUE AL MOUSE EN LAS TARJETAS ===== */
// Guarda la posición del mouse dentro de la tarjeta; el CSS dibuja un brillo suave en ese punto
for (const tarjeta of document.querySelectorAll(".con-luz")) {
    tarjeta.addEventListener("pointermove", function (evento) {
        const caja = tarjeta.getBoundingClientRect();
        tarjeta.style.setProperty("--luz-x", (evento.clientX - caja.left) + "px");
        tarjeta.style.setProperty("--luz-y", (evento.clientY - caja.top) + "px");
    });
}

/* ===== 7) ANIMACIÓN: LOS BLOQUES APARECEN SUAVEMENTE AL HACER SCROLL ===== */
// La clase se agrega desde acá: si el JavaScript no carga, todo se ve igual (sin animación)
const bloquesQueAparecen = document.querySelectorAll(
    ".titulo-seccion, .intro-seccion, .cinta-tecnologias, .sobre-mi-texto, .sobre-mi-datos li, .tarjeta-conocimiento, " +
    ".proyecto-destacado, .proyecto-vitrina, .contadores-practica, .practica-video, .tarjeta-ejercicio, .tarjeta-red, .contacto-texto, .formulario-contacto"
);

const observadorDeAparicion = new IntersectionObserver(function (entradas) {
    for (const entrada of entradas) {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            observadorDeAparicion.unobserve(entrada.target);
        }
    }
}, { threshold: 0.12 });

for (const bloque of bloquesQueAparecen) {
    // Los elementos de una misma grilla aparecen uno detrás de otro
    const posicion = Array.from(bloque.parentElement.children).indexOf(bloque);
    bloque.style.transitionDelay = (posicion % 3) * 0.12 + "s";
    bloque.classList.add("revelar");
    // Cuando ya apareció, se saca la demora para que el efecto al pasar el mouse sea inmediato
    bloque.addEventListener("transitionend", function () {
        bloque.style.transitionDelay = "0s";
    }, { once: true });
    observadorDeAparicion.observe(bloque);
}

/* ===== 8) SECCIÓN PRÁCTICA: LOS CONTADORES SUBEN AL APARECER EN PANTALLA ===== */
const contadores = document.querySelectorAll("[data-contar]");

function animarContador(elemento) {
    const final = Number(elemento.dataset.contar);
    const prefijo = elemento.dataset.prefijo || "";
    const duracion = 1600;
    const inicio = performance.now();
    function paso(ahora) {
        const avance = Math.min(1, (ahora - inicio) / duracion);
        // Arranca rápido y frena al final
        const suavizado = 1 - Math.pow(1 - avance, 3);
        elemento.textContent = prefijo + Math.round(final * suavizado).toLocaleString("es-AR");
        if (avance < 1) {
            requestAnimationFrame(paso);
        }
    }
    requestAnimationFrame(paso);
}

const observadorDeContadores = new IntersectionObserver(function (entradas) {
    for (const entrada of entradas) {
        if (entrada.isIntersecting) {
            animarContador(entrada.target);
            observadorDeContadores.unobserve(entrada.target);
        }
    }
}, { threshold: 0.6 });

for (const contador of contadores) {
    observadorDeContadores.observe(contador);
}
