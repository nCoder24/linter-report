const fs = require("fs");
const { exec } = require("node:child_process");

const generateReports = directory => {
  if (!fs.existsSync(directory)) {
    console.error(`${directory} doesn't exists`);
    return;
  }

  exec("mkdir reports");
  let repos;

  try {
    repos = fs.readdirSync(directory);
  } catch (e) {
    exec(`npx eslint --format json ${directory} > reports/${directory}.json`);
    return;
  }

  repos.filter(name => !name.startsWith("."));

  repos.forEach(repo => {
    const repoName = repo + ".json";
    const repoPath = directory + "/" + repo;
    exec(`npx eslint --format json ${repoPath} > reports/${repoName}`);
  });
};

generateReports(process.argv[2]);
