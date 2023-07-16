const fs = require("fs");
const { exec } = require("node:child_process");
const { analyzeReports } = require("./analyzer");

const generateReport = (userName, repository, callback) => {
  const { repo, src } = repository;
  exec(`npx eslint --format json "${src}"`, (_, stdout, stderr) => {
    if (stderr) console.error(stderr);

    callback(userName, { [repo]: JSON.parse(stdout) });
  });
};

const main = () => {
  const lintReports = {};
  const userRepoDetails = require('../resources/user-repo-details.json');

  const populateReports = (user, report) => {
    const userReports = (lintReports[user] || []);

    lintReports[user] = [...userReports, report];

    if (Object.keys(lintReports).length === userRepoDetails.length) {
      analyzeReports(lintReports);
    }
  }

  userRepoDetails.forEach(({ username, repos }) => {
    repos.forEach(repo => generateReport(username, repo, populateReports));
  });

};

main();
