// next.config.js
const withAntdLess = require('next-plugin-antd-less');
const withImages = require('next-images');
const withTM = require('next-transpile-modules')(['antd-mobile']);

module.exports = withTM(
	withImages({
		...withAntdLess({
			cssLoaderOptions: {
				mode: 'local',
				localIdentName: '[path][name]__[local]--[hash:base64:5]', // invalid! for Unify getLocalIdent (Next.js / CRA), Cannot set it, but you can rewritten getLocalIdentFn
				exportLocalsConvention: 'camelCase',
				exportOnlyLocals: false,
				getLocalIdent: (context, localIdentName, localName, options) => {
					return 'whatever_random_class_name';
				},
			},
		}),
	}),
);
