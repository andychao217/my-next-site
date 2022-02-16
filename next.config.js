// next.config.js
const withAntdLess = require('next-plugin-antd-less');
const withImages = require('next-images');
const withTM = require('next-transpile-modules')(['antd-mobile', 'echarts', 'zrender']);

module.exports = withTM(
	withImages({
		...withAntdLess({
			cssLoaderOptions: {
				mode: 'local',
				localIdentName: '[path][name]__[local]--[hash:base64:5]',
				exportLocalsConvention: 'camelCase',
				exportOnlyLocals: false,
				getLocalIdent: (context, localIdentName, localName, options) => {
					return 'whatever_random_class_name';
				},
			},
		}),
	}),
);
