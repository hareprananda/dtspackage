const fs = require('fs');
const path = require('path');

function main() {
  const source = fs
    .readFileSync(path.resolve('package.json'))
    .toString('utf-8');
  const sourceObj = JSON.parse(source);
  sourceObj.scripts = {};
  sourceObj.devDependencies = {};

  sourceObj.main = sourceObj.main.replace(/^dist\//g, '');
  sourceObj.module = sourceObj.module.replace(/^dist\//g, '');
  sourceObj.typings = sourceObj.typings.replace(/^dist\//g, '');

  fs.writeFileSync(
    path.resolve('dist/package.json'),
    Buffer.from(JSON.stringify(sourceObj, null, 2), 'utf-8')
  );
  fs.writeFileSync(
    path.resolve('dist/version.txt'),
    Buffer.from(sourceObj.version, 'utf-8')
  );

  fs.copyFileSync(path.resolve('.npmignore'), path.resolve('dist/.npmignore'));
}

const checkDirectory = () => {
  const folders = fs.readdirSync(path.resolve('dist'));
  console.log(folders);
};

checkDirectory();
