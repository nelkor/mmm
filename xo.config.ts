import { type FlatXoConfig } from 'xo'

export default [
	{
		prettier: true,
		rules: {
			'import-x/extensions': 0,
			'unicorn/no-array-reduce': 0,
			// Неиспользуемые переменны в красную ошибку.
		},
	},
] satisfies FlatXoConfig
