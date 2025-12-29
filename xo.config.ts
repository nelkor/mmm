import { type FlatXoConfig } from 'xo'
import perfectionist from 'eslint-plugin-perfectionist'

export default [
  {
    space: true,
    prettier: true,
    plugins: { perfectionist },
    rules: {
      'import-x/order': 0,
      'import-x/extensions': 0,
      'unicorn/no-array-reduce': 0,
      '@typescript-eslint/no-unused-vars': 2,
      'perfectionist/sort-objects': [2, { order: 'asc', type: 'line-length' }],
      'perfectionist/sort-interfaces': [
        2,
        { order: 'asc', type: 'line-length' },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          order: 'asc',
          newlinesBetween: 1,
          type: 'line-length',
          tsconfig: { rootDir: '.' },
          fallbackSort: { order: 'asc', type: 'line-length' },
          groups: [
            ['type-builtin', 'value-builtin'],
            ['type-internal', 'value-internal', 'tsconfig-path'],
            [
              'type-parent',
              'type-sibling',
              'type-index',
              'value-parent',
              'value-sibling',
              'value-index',
              'unknown',
            ],
          ],
        },
      ],
    },
  },
] satisfies FlatXoConfig
