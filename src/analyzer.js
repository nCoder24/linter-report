const fs = require("fs");

const sum = (a, b) => a + b;

const analyze = (lintReport) => {
  const files = lintReport.length;
  const errors = lintReport.map(file => file.errorCount).reduce(sum, 0);
  const average = Math.ceil(errors / files);

  return { files, errors, average };
};

const analyzeReports = () => {
  const users = fs.readdirSync('reports');
  const reports = users.map(user => {
    const filePath = './reports/' + user;
    const report = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    return { [user]: analyze(report) };
  });

  console.log(reports);
}

analyzeReports();