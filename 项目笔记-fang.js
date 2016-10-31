/*
1:下载TODO模板

命令行:
git clone https://github.com/tastejs/todomvc-app-template.git todomvc-fang -b master --depth 1


	todomvc-fang 是目的地文件名

	-b 是要克隆哪个分支

	--depth 不复制老项目之前的提交记录

2: npm install 安装项目依赖

3: index.html 中 todomvc-common的文件没用 是官网上侧边的说明。 可以注释掉。 项目依赖中也可以删除。

	npm uninstall todomvc-common --save


4: 下载angular  并在index引入angular

	npm install angular --save


5: app.js中  默认的Windows 改成 angular。  一个自定义函数 把angular作为参数传进来

(function (window) {
	'use strict';
})(window);



6: 可以把 browser-sync 加载到开发依赖中.   node_modules 会多出来一堆文件夹
	npm install browser-sync --save-dev


7: 启动browser-sync服务  可以讲命令加载到npm 的 package.json文件中 自定义脚本用来简化命令输入



"scripts": {
	"start": "node_modules/.bin/browser-sync start --server --files \"*.html, js/*.js,css/*.css\"",
	"test":"echo 111",
	"fang":"echo 222",
	"pretest":"echo 333",
	"posttest":"echo 444"
},

然后命令行中直接输入  npm start 就可以启动browser-sync服务
注: a: 只有  start  和 test 可以直接用 npm start     npm test
	b: 其他要用 npm run +name   如 npm run fang
	c: pretest 和 posttest  会分别在npm test前后执行





*/
