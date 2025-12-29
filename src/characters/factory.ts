import { generateId, type Fighter, type Healer } from '../shared'

export const createWarrior = (tag = '_'): Fighter => ({
	id: generateId(`${tag}-w`),
	maxHealth: 160,
	health: 160,
	melee: true,
	armor: 0.2,
	attack: 20,
	accuracy: 0.9,
	critRate: 0.1,
	critMultiplier: 1.5,
})

export const createHealer = (tag = '_'): Healer => ({
	id: generateId(`${tag}-h`),
	maxHealth: 100,
	health: 100,
	melee: false,
	armor: 0,
	heal: {
		cost: 1,
		power: 20,
	},
	mana: 100,
	maxMana: 100,
})

export const createArcher = (tag = '_'): Fighter => ({
	id: generateId(`${tag}-a`),
	maxHealth: 110,
	health: 110,
	melee: false,
	armor: 0.1,
	attack: 30,
	accuracy: 0.6,
	critRate: 0.2,
	critMultiplier: 2,
})
