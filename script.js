const username = "your-github-username";  // Replace with your GitHub username
const container = document.getElementById("github-projects");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(data => {
    data.forEach(repo => {
      const project = document.createElement("div");
      project.classList.add("project");
      project.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description || "No description provided."}</p>
      `;
      container.appendChild(project);
    });
  })
  .catch(error => console.error("Error fetching GitHub repos:", error));
