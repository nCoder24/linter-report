const fs = require("fs");
const { exec } = require("node:child_process");

const generateReport = (repo, destination) => {
  console.log(repo, destination);
  const name = (repo.includes("/") ? repo.match(/.*\/(.*)/)[1] : repo).replace(
    /\..*$/,
    ".json"
  );

  exec(`npx eslint --format json ${repo} > ${destination}/${name}`);
};

const generateReports = (source, destination) => {
  const repos = fs.readdirSync(source).filter(file => !file.startsWith("."));

  repos.forEach(repo => generateReport(source + "/" + repo, destination));
};

const main = () => {
  const source = process.argv[2];
  const destination = process.argv[3] || process.env.PWD;

  if (!(fs.existsSync(source) && fs.existsSync(destination))) {
    console.error(`${source} or ${destination} doesn't exists`);
    return;
  }

  const destinationPath = destination + "/reports";
  exec(`mkdir ${destinationPath}`);

  if (fs.existsSync(source + "/")) generateReports(source, destinationPath);
  else generateReport(source, destinationPath);
};

main();
