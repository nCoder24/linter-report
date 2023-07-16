const fs = require("fs");
const { exec } = require("node:child_process");

const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const generateReport = (userName, repo, callback) => {
  const { name, src } = repo;
  exec(`npx eslint --format json ${src}`, (error, report, stderr) => {
    console.log(error);
    console.log(stderr);

    callback(userName, { [name]: report });
  });
};


const main = () => {
  const lintReports = {};
  const populateReports = (user, report) => {
    const userReports = (lintReports[user] || []);
    lintReports[user] = [...userReports, report];
    console.log(user);
  }

  const userRepoDetails = readJson('./resources/user-repo-details.json');

  userRepoDetails.forEach(({ userName, repos }) => {
    repos.forEach(repo => generateReport(userName, repo, populateReports));
  });

};

main();
