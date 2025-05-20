document.addEventListener("DOMContentLoaded", async () => {
  const projectsContainer = document.getElementById("projectsContainer");
  const projects = ["Project1", "Project2", "Project3"];

  for (let project of projects) {
    try {
      let response = await fetch(`Projects/${project}/info.json`);
      if (!response.ok) throw new Error("Файл info.json не найден");
      let data = await response.json();

      let projectFrame = document.createElement("div");
      projectFrame.className = "project-frame";
      projectFrame.innerHTML = `
        <div class="project-preview" style="background-image: url('Projects/${project}/preview.png');"></div>
        <div class="project-info">
          <p class="title">${data.name}</p>
          <p class="description">${data.description}</p>
        </div>
        <p class="date">${data.date}</p>
        <a href="${data.link}" class="load-button">→</a>
      `;

      projectsContainer.appendChild(projectFrame);
    } catch (error) {
      console.error(`Ошибка загрузки проекта ${project}:`, error);
    }
  }
});
