module.exports = {
	'root': true,
	'env': {
		'node': true,
		'browser': true,
		'es6': true,
	},
	'parserOptions': {
		'parser': 'babel-eslint'
	},
	'extends': [
		'plugin:vue/recommended',
		'@vue/standard'
	],
	'rules': {
		// I use tabs thank you very much
		'no-tabs': 'off',
		'indent': [ 'error', 'tab', { 'SwitchCase': 1 }],
		'no-mixed-spaces-and-tabs': [ 'error', 'smart-tabs' ],
		'vue/html-indent': 'tab',
		// standardjs is just plain wrong on these
		'comma-dangle': [
			// these prevent dumb bugs and dumber changesets
			'warn', 'always-multiline',
		],
		'space-before-function-paren': [ 'warn', {
			// spaces are a placeholder for *unnamed* fns
			'anonymous': 'always',
			'asyncArrow': 'always',
			'named': 'never',
		}],
		'operator-linebreak': [
		  'error',
		  // "before" is more readable, esp. when omitting semi-colons,
		  // and it's wierd for ?: to be an exception
		  'before',
	  		{ 'overrides': {} },
		],
		// multiline attributes look dumb, so give a little leaway
		'vue/max-attributes-per-line': [
		  'error',
		  {
			 'singleline': 3,
			 'multiline': {
				'allowFirstLine': false,
				'max': 1,
			 },
		  },
		],
		// screens are wider than they are tall
		'vue/singleline-html-element-content-newline': 'off',
	 },
}
