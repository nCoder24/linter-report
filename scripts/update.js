const fs = require("fs");
const cloneAll = require("../scripts/clone-all");
const generateReports = require("../scripts/generate-report");

const update = () => {
  const users = require("../resources/user-repos.json");

  if(fs.existsSync("resources/.repos")) fs.rmSync("resources/.repos", {recursive: true});
  cloneAll(users);

  generateReports(users);
}

update();