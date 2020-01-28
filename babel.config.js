module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'babel-plugin-module-resolver',
			{
				root: ['./src/'],
				alias: {
					elements: './src/elements',
					screens: './src/screens',
				},
			},
		],
		['@babel/plugin-proposal-decorators', { legacy: true }],
	],
}
