const cloneAll = require("./src/clone-all");
const generateReports = require("./src/generate-report");

const main = () => {
  const users = require("./resources/user-repo-details.json");
  cloneAll(users);
  generateReports(users);
}

main();