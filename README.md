## webpack
npx webpack 命令不指定文件默认在当前文件夹下读取webpack.config.js配置文件
可以通过npx webpack --config webpackconfig.js 指定配置文件名
在package.json script配置字段 运行 webpack 命令 此时 webpack 会在当前node_module寻找
### webpack 输出参数
Hash  根据打包内容生成的哈希摘要
Time  打包时间
Build at  构建时间
Asset  output文件名
Size  output文件大小
Chunk Names  entry key

## commander
[node脚本命令行学习](https://juejin.im/post/5af2a2cbf265da0b9c109f59)
