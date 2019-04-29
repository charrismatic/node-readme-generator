// AN EXAMPLE OF POSSIBLE PARAMETERS FOR PACKAGE.JSON
module.exports = {
  name: "package.json template",
  version: "1.0.0",
  description: "abc",
  keywords: ["apple", "pineapple", "pen"],
  homepage:"asd.com",
  bugs : {
    "url" : "https://github.com/owner/project/issues",
    "email" : "project@hostname.com"
  },
  license : "BSD-3-Clause" ,
  author : {
     "name" : "Barney Rubble",
     "email" : "b@rubble.com",
     "url" : "http://barnyrubble.tumblr.com/"
  },
  contributors: {
    "name" : "Barney Rubble",
    "email" : "b@rubble.com",
    "url" : "http://barnyrubble.tumblr.com/",
  },
  files: [],
  main: "lib/app.js",
  browser: "chrome",
  bin: {
    "myapp" : "./cli.js"
  },
  man: {
    "name" : "foo",
    "version" : "1.2.3",
    "description" : "A packaged foo fooer for fooing foos",
    "main" : "foo.js",
    "man" : "./man/doc.1"
  },
  directories: [],
  repository: {
    "type" : "git",
    "url" : "https://github.com/npm/cli.git",
  },
  scripts: {
    "dev": "run this",
    "serve": "serve that"
  },
  config: {
    "name" : "foo",
    "config" : {
      "port" : "8080"
    }
  },
  dependencies: {
    "package/browserify": "^12.0.36",
    "package/chrome": "^0.0.60",
    "package/configstore": "^2.1.1",
    "package/cpy": "^5.1.0",
  },
  devDependencies: [],
  peerDependencies: [],
  bundledDependencies: [],
  optionalDependencies: [],
  engines: "",
  os : [ "darwin", "linux" ],
  private: "false"
}
