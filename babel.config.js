module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'babel-plugin-module-resolver',
			{
				root: ['./'],
				alias: {
					elements: './src/elements',
					locales: './src/locales',
					models: './src/models',
					screens: './src/screens',
					services: './src/services',
					types: './src/types'
				},
			},
		],
		['@babel/plugin-proposal-decorators', { legacy: true }],
	],
}
