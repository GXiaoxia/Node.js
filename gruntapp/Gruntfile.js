module.exports = function(grunt){
	// 配置grunt方法
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			combine:{
				files: {
					'app/css/style.css': ["app/css/background.css","app/css/fontsize.css"]
				}
			}
		},
		uglify: {
			dist:{
				files:{
					'app/js/main.min.js': ['app/js/main.js']
				}
			}
		}
	});
	// 加载包含'cssmin'任务的插件
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// 默认被执行的任务列表
	grunt.registerTask('default',['cssmin','uglify']);



	/*grunt.registerTask('default','',()=>{	
		grunt.log.write('在终端运行grunt命令就会执行这句话');
	});*/
}

// 注意: Gruntfile.js是必须创建的,和package.json在同一目录层级