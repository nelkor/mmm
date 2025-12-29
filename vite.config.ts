import { defineConfig } from 'vite'

const aliasToSrc = '@'

export default defineConfig({
  resolve: {
    alias: {
      [aliasToSrc]: './src',
    },
  },
})
