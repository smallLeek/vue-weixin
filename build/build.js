require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')
const spawn = require('child_process');

/**
 * config
 */
const root_path = path.join(__dirname,'../dist');

try {
//清除本地修改
  execSync('git reset HEAD --hard');
//拉去最新版本
  execSync('git pull');
//删除dist下所有文件 不包括.git文件夹
  execSync('rm -rf *');
  console.log("dist 文件夹初始化完成")
}catch (err){
  console.log(err)
}


var spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})


/**
 * 在root path 下执行脚本
 * @param cmd
 */
function execSync(cmd) {
  return spawn.execSync(cmd,{cwd:root_path}).toString();
}
