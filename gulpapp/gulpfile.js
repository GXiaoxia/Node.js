const gulp = require('gulp');
const gulpCopy = require('gulp-copy');
const minImage = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const webServer = require('gulp-webserver');


// 注意: 文件名(gulpfile.js)不能改变
/*
-- 常用方法 --
	gulp.task	-- 定义任务
	gulp.src	-- 输入文件路径
	gulp.dest	-- 输出文件路径
	gulp.watch	-- 监听文件变化 

-- node方法 --
	pipe		-- 管道
*/

// 定义默认任务
/*gulp.task('default',() => {
	console.log('default是必须这样写,才是默认任务');
});*/

// 定义具体任务
gulp.task('message',() =>{
	console.log('执行具体任务,需要在终端运行gulp message(任务名)');
});


// 定义拷贝任务
gulp.task('copyHtml',() =>{
	// 找到需要拷贝文件的路径
	gulp.src('src/*.html')		// 拷贝所有html文件 *.html
		.pipe(gulp.dest('dist'));	// 将拷贝的文件放入dist文件夹,没有会自动创建
});

// 定义压缩图片任务
gulp.task('imageMin',() => {
	gulp.src('src/images/*')
		.pipe(minImage())		//管道中压缩一下图片
		.pipe(gulp.dest("dist/images"));	// 将压缩好的文件放入某个文件夹
});

// 定义压缩js代码任务
gulp.task('uglify',() =>{
	gulp.src('src/js/*')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

// 定义sass转css任务  
gulp.task('sass',()=>{
	gulp.src('src/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/css'));
});

// 在终端输入gulp,运行完[ ]后,运行default
gulp.task('default',['message','copyHtml','imageMin','uglify','sass']);	


// 监听任务 - 运行gulp watch后改变src中的东西,dist中的内容自动随之改变
gulp.task('watch',()=>{
	gulp.watch('src/js/*.js',['uglify']);
	gulp.watch('src/images/*',['imageMin']);
	gulp.watch('src/sass/*.scss',['sass']);
	gulp.watch('src/*.html',['copyHtml']);
});

// webserver
gulp.task('webserver',()=>{
	return gulp.src('app')
			   .pipe(webServer({
			   		port:4000,
			   		livereload:true,	// 热更新
			   		open:true		// 自动打开浏览器
			   }))
});

/*
	sudo cnpm install gulp -g		安装全局gulp
	gulp —-version(-v)		查看版本号
	cd 文件夹
	npm init --yes			生成package.json
	cnpm install gulp --save
	创建gulpfile.js文件
	在终端输入gulp运行
*/
/*具体步骤
	1.下载模块 - cpm install gulp-     —save-dev
	2.引用模块 - require
	3.定义任务 - task
	4.在src中创建文件
	5.实现任务 - gulp 任务名
*/
/*
	cnpm install gulp-copy --save-dev			复制文件
	cnpm install gulp-imagemin --save-dev		压缩图片
	cnpm install gulp-uglify --save-dev			压缩js代码
	cnpm install gulp-sass --save-dev			sass转css
	cnpm install gulp-webserver --save-dev		webserver
*/
