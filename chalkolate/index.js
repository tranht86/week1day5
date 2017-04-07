// // var chalk = require("chalk");

// // var message = "Hello " + chalk.yellow("World");
// console.log(message);

const chalk = require('chalk');
const log = console.log;

// combine styled and normal strings
log(chalk.blue('Hello') + 'World' + chalk.red('!'));

// compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// nest styles of the same type even (color, underline, background)
log(chalk.green(
  'I am a green line ' +
  chalk.blue.underline.bold('with a blue substring') +
  ' that becomes green again!'
));
