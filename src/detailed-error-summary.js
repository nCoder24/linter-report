const _ = require("lodash");

const generateRepoErrorSummary = linterReport => {
  const errors = _.flatMap(linterReport, "messages");
  const groupedErrors = Object.entries(_.groupBy(errors, "messageId"));

  return Object.fromEntries(
    groupedErrors.map(([errorName, errors]) => [errorName, errors.length])
  );
};

const generateUserReposErrorSummary = reposReports => {
  return Object.fromEntries(
    Object.entries(reposReports).map(([repoName, repoReport]) => {
      const repoErrorReport = generateRepoErrorSummary(repoReport);

      return [repoName, repoErrorReport];
    })
  );
};

const generateErrorSummary = users => {
  return Object.fromEntries(
    Object.entries(users).map(([username, reposreports]) => {
      const errorReports = generateUserReposErrorSummary(reposreports);
      return [username, errorReports];
    })
  );
};

module.exports = {generateRepoErrorSummary,  generateErrorSummary};
