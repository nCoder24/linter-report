const fs = require("fs");
const { exec } = require("node:child_process");

const generateReport = (userName, repository, callback) => {
  const { repo, src } = repository;
  exec(`npx eslint --format json "${src}"`, (_, stdout, stderr) => {
    if (stderr) console.error(stderr);

    callback(userName, { [repo]: JSON.parse(stdout) });
  });
};

const generateReports = (userRepoDetails) => {
  const lintReports = {};

  const populateReports = (user, report) => {
    const userReports = lintReports[user] || [];

    lintReports[user] = [...userReports, report];

    if (Object.keys(lintReports).length === userRepoDetails.length) {
      fs.writeFileSync("resources/.reports.json", JSON.stringify(lintReports));
    }
  };

  userRepoDetails.forEach(({ username, repos }) => {
    repos.forEach((repo) => generateReport(username, repo, populateReports));
  });
};

module.exports = generateReports;
