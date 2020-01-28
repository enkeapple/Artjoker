module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'babel-plugin-module-resolver',
			{
				root: ['./src/'],
				alias: {
					elements: './src/elements',
					models: './src/models',
					screens: './src/screens',
					themes: './src/themes',
				},
			},
		],
		['@babel/plugin-proposal-decorators', { legacy: true }],
	],
}
