export type Character = {
  id: string
  health: number
  melee: boolean
  maxHealth: number
  armor: number // 0-1
}

export type Fighter = {
  attack: number
  accuracy: number // 0-1
  critRate: number // 0-1
  critMultiplier: number
} & Character

export type Healer = {
  mana: number
  maxMana: number
  heal: {
    cost: number
    power: number
  }
} & Character

export type Member = Fighter | Healer
