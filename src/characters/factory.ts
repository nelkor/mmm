import { generateId, type Fighter, type Healer } from '../shared'

export const createWarrior = (tag = '_'): Fighter => ({
  armor: 0.2,
  attack: 20,
  health: 160,
  melee: true,
  accuracy: 0.9,
  critRate: 0.1,
  maxHealth: 160,
  critMultiplier: 1.5,
  id: generateId(`${tag}-w`),
})

export const createHealer = (tag = '_'): Healer => ({
  armor: 0,
  mana: 100,
  health: 100,
  maxMana: 100,
  melee: false,
  maxHealth: 100,
  id: generateId(`${tag}-h`),
  heal: {
    cost: 1,
    power: 20,
  },
})

export const createArcher = (tag = '_'): Fighter => ({
  armor: 0.1,
  attack: 30,
  health: 110,
  melee: false,
  accuracy: 0.6,
  critRate: 0.2,
  maxHealth: 110,
  critMultiplier: 2,
  id: generateId(`${tag}-a`),
})
