import { readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname} from 'node:path';
import { fileURLToPath } from 'node:url';
import fse from 'fs-extra';
import inquirer from 'inquirer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectsPath = resolve(__dirname, '..', 'projects');
const bolerplatePath = resolve(__dirname, '..', 'boilerplate');

generate();

async function generate() {
  const userInput = await inquirer
    .prompt({
      type: 'input',
      message: 'Enter a project name (kebab-case):',
      name: 'name',
      validate(stdout) {
        return !!stdout.trim();
      },
      filter(stdout) {
        return stdout.toLowerCase();
      },
      transformer(stdout) {
        return stdout.toLowerCase();
      },
    });

  const currentProjectFolder = resolve(projectsPath, userInput.name);

  const exists = await fse.exists(currentProjectFolder);

  if (exists) {
    throw Error(`${userInput.name} project is already exists in ${currentProjectFolder} directory`);
  }

  await fse.copy(bolerplatePath, currentProjectFolder);

  const indexFilePath = resolve(currentProjectFolder, 'index.html');
  const indexFileContent = await readFile(indexFilePath, { encoding: 'utf8' });

  const formattedContent = indexFileContent.replace('{{title}}', userInput.name);

  await writeFile(indexFilePath, formattedContent);
}
