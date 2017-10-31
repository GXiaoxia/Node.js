###安装及运行步骤:
cd ~								安装全局的环境
sudo cnpm install -g webpack		安装全局webpack
webpack  -v							查看版本
cd 文件夹
npm init --yes						生成package.json
cnpm install webpack --save-dev		安装本地

webpack app.js(入口文件) bundle.js(出口文件)	    运行
webpack app.js bundle.js --watch         		持续监听并打包

cnpm install jquery --save-dev					安装query
cnpm install style-loader css-loader --save-dev 安装css需要的加载器  

创建webpack.config.js文件 

### css运行:
1. 下载style-loader css-loader
2. 在入口文件中通过require引入
3. 配置webpack.config.js文件
4. 在index.html中引入出口文件
5. 在终端运行webpack

npm run build						配置package.json的scripts(build)后 运行(相当于输入webpack运行)

### webpack-dev-server
cnpm install webpack-dev-server --save-dev  	搭建服务器/实现热更新
npm run start						配置package.json的scripts(start)后 运行

cnpm install babel-core babel-loader babel-preset-es2015 --save-dev   安装babel
