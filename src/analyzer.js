const sum = (a, b) => a + b;

const analyze = (lintReport) => {
  const [report] = lintReport;
  const files = report.length;
  const errors = report.map(file => file.errorCount + file.warningCount).reduce(sum, 0);
  const average = Math.ceil(errors / files);

  return { files, errors, average };
};

const analyzeReports = (lintReports) => {
  const reports = Object.entries(lintReports).
    map(([username, reports]) => {
      return [
        username, reports.map((report) => analyze(Object.values(report)))
      ];
    });

  console.log(Object.fromEntries(reports));
}

const main = () => {
  const lintReports = require("../resources/.reports.json");
  analyzeReports(lintReports);
}

main();