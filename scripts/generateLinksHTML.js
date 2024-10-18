generateLinksHTML();

async function generateLinksHTML() {
  const projects = await getProjects();

  const linksListElem = document.querySelector('#links-list');

  projects.forEach((project) => {
    const listElem = document.createElement('li');
    const titleElem = document.createElement('p');
    const linkElem = document.createElement('a');
    const imgElem = document.createElement('img');

    linkElem.href = project.link;

    titleElem.textContent = project.name;

    imgElem.src = `/thumbnails/${project.name}.gif`;

    listElem.append(linkElem);
    listElem.append(titleElem);
    listElem.append(imgElem);
    linksListElem.append(listElem);
  });
}

async function getProjects() {
  const response = await fetch('projectsLinks.json');

  if (!response.ok) return;

  return await response.json();
}
