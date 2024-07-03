
/*
import gendiff from "./src/gendiff.js";

const diff = gendiff('filepath1', 'filepath2');
console.log(diff);
*/

/*
  import { program } from 'commander';

  const command = (names) => {
    for (const name of names) {
      console.log(`Hello, ${name}!`);
    }
  };
  
  program
    .version('0.0.1')
    .arguments('<names...>')
    .action(command)
    .parse(process.argv);
*/

/*import { program } from 'commander';

 
  const hello = (name) => {
    return `Hello, ${name}!`;
  };
  
  const command = (names, lower, upper) => {
    for (const name of names) {
      const msg = hello(name);
      if (lower) {
        console.log(msg.toLowerCase());
      } else if (upper) {
        console.log(msg.toUpperCase());
      } else {
        console.log(msg);
      }
    }
  };
  
  program
    .option('-l, --lower', 'only use lowercase letters')
    .option('-u, --upper', 'only use uppercase letters')
    .parse(process.argv);
  
   // console.log('program.option',  program.option)
  const { args } = program;
  console.log('args',args)
  const options = program.opts();
  console.log('options',options)

  console.log('process.argv',process.argv)
  const { lower, upper } = options;
  console.log('lower',lower)
  console.log('upper',upper)
  
  command(args, lower, upper);
  */

  /*program
  .version('0.2.1')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'Output format', 'stylish')
  .description('Compares two configuration files and shows a difference.')
  .action((firstConfig, secondConfig) => {
    console.log(genDiff(firstConfig, secondConfig, program.format));
  })
  .parse(process.argv);*/