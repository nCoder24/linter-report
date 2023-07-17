const _ = require("lodash");

const generateErrorSummary = linterReport => {
  const errors = _.flatMap(linterReport, "messages");
  const groupedErrors = Object.entries(_.groupBy(errors, "messageId"));

  return Object.fromEntries(
    groupedErrors.map(([errorName, errors]) => [errorName, errors.length])
  );
};

module.exports = { generateErrorSummary };
