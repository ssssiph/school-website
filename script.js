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
        <div class="project-preview">
          <iframe src="https://test-site-production-f90b.up.railway.app/Projects/${project}/index.html" 
            width="100%" height="200" frameborder="0">
          </iframe>
        </div>
        <div class="project-info">
          <p class="title">${data.name}</p>
          <p class="date">${data.date}</p>
        </div>
        <div class="project-bottom">
          <p class="description">${data.description}</p>
          <a href="${data.link}" class="load-button">→</a>
        </div>
      `;

      projectsContainer.appendChild(projectFrame);
    } catch (error) {
      console.error(`Ошибка загрузки проекта ${project}:`, error);
    }
  }
});
