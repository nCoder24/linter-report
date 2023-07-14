const fs = require("fs");
const {exec} = require("node:child_process");

const readRepos = () => {
  const parseUsernames = (userData) => userData.trim().split(",")[1];
  const usernames =  fs.readFileSync("github-usernames.csv", "utf-8").trim().split("\n").map(parseUsernames);
  return usernames.map(username => ({username, repo: "vending-machine"}))
}

const clone = ({username, repo}) => exec(`git clone https://github.com/${username}/${repo} ${repo}-${username}`);

const main = () => {
  readRepos().forEach(clone);
  // [{username:"b-rajkumar", repo: "vending-machine"}].forEach(clone);
}

main();