const fs = require("fs");
const { exec } = require("node:child_process");

const createUser = ([name, username, ...repos]) => ({
  name,
  username,
  repos,
});

const readRepos = () =>
  fs
    .readFileSync("github-usernames.csv", "utf-8")
    .trim()
    .split("\n")
    .map((userData) => createUser(userData.trim().split(",")));

const clone = ({ username, repos }) =>
  repos.forEach((repo) =>
    exec(
      `git clone https://github.com/${username}/${repo} repos/${username}/${repo}`
    )
  );

const main = () => {
  readRepos().forEach(clone);
};

main();
