const path = require('path');
const webpack = require('webpack');

module.exports = {
	// 网站标题
	// title: 'vuepress-demo',
	// // 打包后的base路径
	// base: '/',
	themeConfig: {
		// 配置导航栏
		navbar: false,
		// 配置侧边栏
		sidebar: [
			{
				title: 'Group 1',
				path: '/',
				children: [
					'/',
				],
			},
			{
				title: 'Group 2',   // 必要的
				path: '/foo/',      // 可选的, 应该是一个绝对路径
				// collapsable: false, // 可选的, 默认值是 true,
				// sidebarDepth: 2,    // 可选的, 默认值是 1
				children: [
					['/foo/', '这是text'], // [link, text]
					'/foo/one.md',
					'/foo/two.md',
				]
			},
		],
		// 重写默认显示的侧边栏深度
		// sidebarDepth: 2,
	},
};