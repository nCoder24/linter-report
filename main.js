const { analyzeReports } = require("./src/analyzer");
const { generateErrorSummary } = require("./src/detailed-error-summary");

const main = () => {
  const lintReports = require("./resources/.reports.json");
  console.log(generateErrorSummary(lintReports));
}

main();