const fs = require('fs')
const f = require('./src/formatters');
const schema = require('./src/package_json_default');

if (process.env.npm_package_version){
  var my_pkg = process.env.npm_package_version;
} else {
  try {
      if (fs.existsSync('./package.json')) {
        my_pkg = require('./package');
    } else {
      console.error("No package.json file could be found");
      process.exit(0);
    }
  } catch(err) {
   console.error(err)
  }
}



// AVOID TYPE ERRORS FROM MISSING VALUES IN THE USER PACKAGE.JSON
var pkg = Object.assign(Object.create(null), schema, my_pkg);
var readme = [];

// CREATE THE README OBJECT
readme.push(f.h1(pkg.name));
readme.push(f.blockquot(pkg.description ));
readme.push(f.key_value("Version", pkg.version),f.br);
readme.push(f.br);
readme.push('Topics: ');
for (word of pkg.keywords){
  readme.push(f.link(word, `https://github.com/topics/${word}`));
  readme.push(',  ');
}
readme.push(f.br);
readme.push(f.br);
readme.push(f.h2("About"));
readme.push(f.link(pkg.homepage, pkg.homepage), f.br);
readme.push(f.obj_to_list(pkg.author));
readme.push(f.br,f.br,f.line,f.br);
readme.push(f.h3("Project Repo"));
readme.push(f.obj_to_list(pkg.repository),f.br);
readme.push(f.h2("Dependencies"));
readme.push(f.obj_to_list(pkg.dependencies),f.br);
readme.push(f.h3("Config Options"));
readme.push(f.obj_to_list(pkg.config),f.br);
readme.push(f.h2("Usage"));
readme.push(f.obj_to_list(pkg.scripts),f.br);
readme.push(f.h2("Development"));
readme.push(f.obj_to_list(pkg.devDependencies),f.br);
readme.push(f.h3("Contributors"));
readme.push(f.obj_to_list(pkg.contributors),f.br);
readme.push(f.h3("Issues"));
readme.push(f.obj_to_list(pkg.bugs),f.br);
readme.push(f.br);
readme.push(f.line);
readme.push(f.br);
readme.push(f.h3("Licesnse"));
readme.push(pkg.license);
readme.push(f.link(pkg.license, `https://opensource.org/licenses/${pkg.licesnse}`));


const readme_data = readme.join('');
var readme_file = './README.md';

// CHECK IF README EXISTS
try {
  if (fs.existsSync(readme_file)) {
    readme_file = 'PACKAGE_README.md';
  }
} catch(err) {
  console.error(err)
}

// WRITE THE FILE
fs.open(readme_file, 'wx', (err, fd) => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.error(`${readme_file} already exists`);
      return;
    }
    throw err;
  }
  fs.writeFileSync(readme_file, readme_data);
});
