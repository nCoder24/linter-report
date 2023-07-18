const { analyzeReports } = require("./src/analyzer");
const { generateUserErrorSummary } = require("./src/detailed-error-summary");


const main = (option) => {
  const lintReports = require("./resources/.reports.json");

  if (option === 'overview')
    console.log(analyzeReports(lintReports));
  else
    console.log(generateUserErrorSummary(lintReports));
}

main(process.argv[2]);