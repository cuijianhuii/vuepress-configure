const path = require('path');
const webpack = require('webpack');

module.exports = {
	// 自动生成侧边栏
	title: '网站的标题如果是图片怎么办',  // 设置网站标题
	description: '我的个人网站',
	head: [
		['link', { rel: 'icon', href: '/logo.jpg' }]
	],
	base: '/',
	markdown: {
		lineNumber: false,
	},
	themeConfig: {
		nav: [ // 添加导航栏
			{ text: '菜单1', link: '/apiword' },
			{ text: '菜单2', link: '/api' },
			{ text: '菜单3', link: '/error' },
			{
				text: '菜单4',
				items: [
					{ text: '菜单4-1', link: '/ers1' },
					{ text: '菜单4-2', link: '/ers2' },
				]
			}
		],
		// 添加侧边栏
		sidebar: 'auto',
		sidebarDepth: 2
	}
	// 自定义侧边栏
	// 网站标题
	// title: 'vuepress-demo',
	// // 打包后的base路径
	// base: '/',
	// themeConfig: {
	// 	// 配置导航栏
	// 	navbar: false,
	// 	// 配置侧边栏
	// 	sidebar: [
	// 		{
	// 			title: 'Group 1',
	// 			path: '/',
	// 			children: [
	// 				'/',
	// 			],
	// 		},
	// 		{
	// 			title: 'Group 2',   // 必要的
	// 			path: '/foo/',      // 可选的, 应该是一个绝对路径
	// 			// collapsable: false, // 可选的, 默认值是 true,
	// 			// sidebarDepth: 2,    // 可选的, 默认值是 1
	// 			children: [
	// 				['/foo/', '这是text'], // [link, text]
	// 				'/foo/one.md',
	// 				'/foo/two.md',
	// 			]
	// 		},
	// 	],
	// 	// 重写默认显示的侧边栏深度
	// 	// sidebarDepth: 2,
	// },
};