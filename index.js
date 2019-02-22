const { getChangedFilesForRoots } = require("jest-changed-files");

getChangedFilesForRoots(["."], { lastCommit: true }).then(console.log);
