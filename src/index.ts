import { Command } from 'commander'
import { version } from '../package.json'
import create from './command/create'
// 这里我们用 dawei 当作我的指令名称
// 命令行中使用 sheyu xxx 即可触发
const program = new Command('sheyu');
// .vesion 表示可以使用 -V --version 参数查看当前SDK版本
// 我们直接使用 package.json 中的 version 即可
// program
  // .version(version);
// 调用 version 的参数可以自定义
program.version(version, '-v --version')

program
  .command('update')
  .description('更新 sheyu 至最新版本')
  .action(async () => {
    console.log('update command')
  });

program
  .command('create')
  .description('创建一个新项目')
  .argument('[name]', '项目名称')
  .action(async (dirName) => {
    // 添加create方法
    await create(dirName);
  });

program.parse();
