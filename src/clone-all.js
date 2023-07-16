const { exec } = require("node:child_process");
const fs = require("fs");

const clone = ({ username, repos }) =>
  repos.forEach(({ repo, src }) => {
    const cloneCmd = `git clone https://github.com/${username}/${repo} ${src}`;
    exec(cloneCmd, (error, stderr) => {
      if (error || stderr) {
        console.error(`failed to fetch ${username}/${repo}`);
        return;
      }
    });
  });

const cloneAll = (users) => {
  fs.rmSync(".repos", {recursive: true});
  users.forEach(clone);
};

module.exports = cloneAll;
