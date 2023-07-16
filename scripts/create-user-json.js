const fs = require("fs");

const createUser = ([name, username, ...repos]) => ({
  name,
  username,
  repos: repos.map(repo => ({repo, src: `.repos/${username}/${repo}`})),
});

const parseUserRepos = (rawUserRepos) => {
  return createUser(rawUserRepos.trim().split(","));
}

const parseUsers = (rawUserData) => {
  return rawUserData.trim().split("\n").map(parseUserRepos);
}

const main = () => {
  const users = parseUsers(fs.readFileSync("resources/github-usernames.csv", "utf-8"));
  fs.writeFileSync("resources/user-repo-details.json", JSON.stringify(users));
}

main();