const cloneAll = require("./scripts/clone-all");
const generateReports = require("./scripts/generate-report");

const main = () => {
  const users = require("./resources/user-repo-details.json");
  cloneAll(users);
  generateReports(users);
}

main();