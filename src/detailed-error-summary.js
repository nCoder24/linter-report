const _ = require("lodash");

const generateRepoErrorSummary = linterReport => {
  const errors = _.flatMap(linterReport, "messages");
  const groupedErrors = Object.entries(_.groupBy(errors, "messageId"));

  return Object.fromEntries(
    groupedErrors.map(([errorName, errors]) => [errorName, errors.length])
  );
};

const generateReposErrorSummary = reports => {
  return Object.fromEntries(
    Object.entries(reports).map(([repoName, report]) => {
      const errorSummary = generateRepoErrorSummary(report);

      return [repoName, errorSummary];
    })
  );
};

const generateUserErrorSummary = users => {
  return Object.fromEntries(
    Object.entries(users).map(([username, reports]) => {
      const reportsErrorSummaries = generateReposErrorSummary(reports);
      return [username, reportsErrorSummaries];
    })
  );
};

module.exports = {
  generateRepoErrorSummary,
  generateReposErrorSummary,
  generateUserErrorSummary
};
