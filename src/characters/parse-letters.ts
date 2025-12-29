import type { Member } from '../shared'
import { createArcher, createHealer, createWarrior } from './factory'

export const parseLetters = (tag: string, letters: string): Member[] =>
  [...letters].map(letter => {
    switch (letter) {
      case 'w': {
        return createWarrior(tag)
      }

      case 'a': {
        return createArcher(tag)
      }

      case 'h': {
        return createHealer(tag)
      }

      default: {
        throw new Error('Unexpected letter in the parser')
      }
    }
  })
