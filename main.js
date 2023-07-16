const { analyzeReports } = require("./src/analyzer");

const main = () => {
  const lintReports = require("./resources/.reports.json");
  analyzeReports(lintReports);
}

main();