const sum = (a, b) => a + b;

const analyze = ([repoName, lintReport]) => {
  const files = lintReport.length;
  const errors = lintReport
    .map((file) => file.errorCount + file.warningCount)
    .reduce(sum, 0);
  const average = Math.ceil(errors / files);

  return { repoName, files, errors, average };
};

const analyzeReports = (lintReports) => {
  const reports = Object.entries(lintReports)
    .map(([username, reports]) => {
      return [username, Object.entries(reports).map(analyze)];
    });

  console.log(Object.fromEntries(reports));
};

module.exports = { analyzeReports };
