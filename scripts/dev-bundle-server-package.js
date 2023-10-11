// This file contains a package.json for the dependencies of the *BUNDLED
// SERVER* (not the command-line tool).

// We put this in a JS file so that it can contain comments. It is processed
// into a package.json file by generate-dev-bundle.sh.

var packageJson = {
  name: "meteor-dev-bundle",
  private: true,
  dependencies: {
    // Keep the versions of these packages consistent with the versions
    // found in dev-bundle-tool-package.js.
    fibers: "5.0.1",
    "meteor-promise": "0.9.0",
    promise: "8.1.0",
    "@meteorjs/reify": "0.24.0",
    "@babel/parser": "7.15.3",
    "@types/underscore": "1.11.2",
    underscore: "1.13.1",
    "source-map-support": "https://github.com/meteor/node-source-map-support/tarball/81bce1f99625e62af73338f63afcf2b44c6cfa5e",
    "@types/semver": "5.4.0",
    semver: "5.4.1"
  },
  // These are only used in dev mode (by shell.js) so end-users can avoid
  // needing to install them if they use `npm install --production`.
  devDependencies: {
    split2: "3.2.2",
    multipipe: "1.0.2",
    chalk: "4.1.1"
  }
};

process.stdout.write(JSON.stringify(packageJson, null, 2) + '\n');
