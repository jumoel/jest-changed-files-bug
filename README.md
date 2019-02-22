Repository for reproducing a bug in `jest-changed-files`.

How to reproduce:

```
$ git clone https://github.com/jumoel/jest-changed-files-bug
$ cd jest-changed-files-bug && yarn && node index.js
```

Verify that lines from the commit message are present in the output:

```
{ changedFiles:
   Set {
     '~/test/another line',
     '~/test/yet another one',
     '~/test/.gitignore',
     '~/test/index.js',
     '~/test/package.json',
     '~/test/yarn.lock' },
  repos: { git: Set { '~/test' }, hg: Set {} } }
```
