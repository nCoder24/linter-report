const { exec } = require("node:child_process");

const clone = ({ username, repos }) =>
  repos.forEach(({repo, src}) => {
    const cloneCmd = `git clone https://github.com/${username}/${repo} ${src}`;
    exec(cloneCmd, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }

      console.log(stdout);
      console.error(stderr);
    });
  });

const main = () => {
  require("../resources/user-repo-details.json").forEach(clone);
};

main();
