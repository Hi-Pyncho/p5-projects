import { readdir, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectsFolderName = 'projects';
const __dirname = dirname(fileURLToPath(import.meta.url));
const projectsPath = resolve(__dirname, '..', projectsFolderName);

readdir(projectsPath).then((projects) => {
  const links = projects.map((project) => {
    return {
      name: project,
      link: `${projectsFolderName}/${project}`,
    };
  });

  writeFile(resolve(__dirname, '..', 'projectsLinks.json', ), JSON.stringify(links));
});
