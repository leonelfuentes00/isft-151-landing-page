/* Carreras disponibles */
const courses = [
    { name: "Tecnicatura Superior en Análisis de Sistemas",
      description: "Los que estudian la Tecnicatura en Analisis de Sistemas son gente crack. Estarás capacitado/a para realizar prácticas para la operación, programación y análisis de sistemas; desarrollar y gestionar sistemas, como así también, desenvolverte en diferentes entornos informáticos. Desarrollarás, también, la capacidad de coordinación y trabajo en equipo. ",},
    { name: "Tecnicatura Superior en Gestión Ambiental",
      description: "El ambiente es muy importante, cuidar el ecosistema es fundamental, me duermo. Es el profesional con formación científica, tecnológica y ética, competente para la intervención en los procesos técnicos específicos del campo de la gestión ambiental. Diseñará y ejecutará planes y programas tendientes a la vigilancia ambiental y sanitaria,en ámbitos urbanos y rurales. ",},
    { name: "Tecnicatura Superior en Emergencias de Salud",
      description: "La salud es algo indispensable para todos, sino estaríamos en mal estado, para no decir otras cosas El Técnico Superior en Emergencias de Salud estará preparado  para organizar sistemas de respuesta ante emergencias, prestar atención de soporte vital ante riesgos de vida, contención psicológica en el entorno prehospitalario, llevar a cabo tareas de Radiooperación y/o despacho médico priorizado o triage telefónico, colaborar en la organización y desarrollo de planes de emergencia, de los dispositivos de riesgo previsibles y de logística sanitaria ante una emergencia individual, colectiva o catástrofe.",},
    { name: "Tecnicatura Superior en Logística",
      description: "La logistica es una técnica militar que se ocupa del movimiento de los ejércitos, de su transporte y de su mantenimiento. Digo.... actividad que planifica, gestiona, controla el almacenamiento y envío de bienes en una cadena de suministro. La Tecnicatura Universitaria en Logística busca formar recursos humanos capaces de planificar, organizar y controlar el conjunto de las actividades de movimiento y almacenamiento que facilitan el flujo de materiales, productos y de información relacionada, desde el proveedor hasta el cliente. ",},
    { name: "Tecnicatura Superior en Turismo",
      description: "Mar del plata, turismo, mar del plata, los presento. La diversidad de la actividad turística abre un amplio espectro de posibilidades para la inserción laboral en diferentes áreas y con distintos niveles de responsabilidad. El título de Técnico Superior en Turismo habilita al profesional para trabajar en relación de dependencia o en forma autónoma, tanto en el ámbito de las organizaciones públicas, privadas como de la sociedad civil del ámbito del turismo. Entre los ámbitos específicos de su incumbencia se encuentran las organizaciones públicas y privadas de turismo, oficinas de información turística, prestatarias de servicios turísticos, de transporte de pasajeros, organizaciones culturales y de la sociedad civil, educativas, deportivas, del entretenimiento y los negocios, áreas protegidas, espacios rurales, parques, sitios patrimoniales y museos.",},
  ];
  
  window.onload = function () {
    generateCourseOptions();
    document.getElementById("registration-form").addEventListener("submit", handleFormSubmit);
  
    // Agregar descripciones detalladas de las carreras
    const courseDescriptionsContainer = document.getElementById("course-descriptions");
    courseDescriptions.forEach((course, index) => {
      const description = document.createElement("div");
      description.id = `course-description-${index}`;
      description.innerHTML = `<h3>${courses[index].name}</h3><p>${course.description}</p>`;
      courseDescriptionsContainer.appendChild(description);
    });
  };

// Función para generar las opciones de carrera en el formulario
function generateCourseOptions() {
    const courseSelect = document.getElementById("course-select");
    const coursesList = document.getElementById("courses-list");
    const courseDescriptionsContainer = document.getElementById("course-descriptions");

    courses.forEach((course, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = course.name;
        courseSelect.appendChild(option);

        const listItem = document.createElement("li");
        const courseLink = document.createElement("a");
        courseLink.href = `#course-description-${index}`;
        courseLink.textContent = course.name;
        listItem.appendChild(courseLink);
        coursesList.appendChild(listItem);

        const description = document.createElement("div");
        description.id = `course-description-${index}`;
        description.className = "course-description"; // Agregamos una clase CSS
        description.innerHTML = `
          <h3>${course.name}</h3>
          <p>${course.description}</p>
        `;
        courseDescriptionsContainer.appendChild(description);
    });
}

// Función para manejar el envío del formulario de inscripción
function handleFormSubmit(event) {
    event.preventDefault();

    const course = document.getElementById("course-select").value;
    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;

    if (course && name && email) {
        // Aquí puedes realizar la lógica para enviar el formulario
        console.log("Formulario enviado");
        console.log("Carrera:", course);
        console.log("Nombre:", name);
        console.log("Email:", email);

        // Restablecer los campos del formulario
        document.getElementById("course-select").selectedIndex = 0;
        document.getElementById("name-input").value = "";
        document.getElementById("email-input").value = "";

        // Mostrar un mensaje de éxito
        alert("Formulario enviado correctamente");
    } else {
        // Mostrar un mensaje de error
        alert("Por favor, completa todos los campos");
    }
}

// Cargar las opciones de carrera al cargar la página 
window.onload = function () {
    generateCourseOptions();
    document.getElementById("registration-form").addEventListener("submit", handleFormSubmit);
};
