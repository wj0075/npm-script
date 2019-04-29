const {rm, cp, mkdir, exec} = require('shelljs');
const chalk = require('chalk');

console.log(chalk.green('1. remove old voverage reports...'));
rm('-rf', 'coverage');
rm('-rf', '.nyc_output');

console.log(chalk.green('2. run test and collect new coverage...'));
exec('nyc --reporter=html npm run test');

console.log(chalk.green('3. archive coverage report by version...'));
mkdir('-p', 'coverage_archive/$npm_package_version');
cp('-r', 'coverage/*', 'coverage_archive/$npm_package_version');

console.log(chalk.green('4. open coverage report fot preview...'));
exec('npm-run-all --parallel cover:serve cover:open');

