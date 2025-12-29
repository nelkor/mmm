import type { Fighter, Healer, Member } from '../shared'

export const logArcherMiss = ({ id }: Fighter) => {
  console.log(`Лучник ${id} выстрелил и промахнулся.`)
}

export const logWarriorMiss = ({ id }: Fighter) => {
  console.log(`Воин ${id} промахнулся ударом!`)
}

export const logArcherHit = (
  { id }: Fighter,
  target: Member,
  damage: number,
  isCritical: boolean,
) => {
  const healthBefore = target.health + damage

  console.log(
    [
      isCritical ? 'Критическое попадание!' : '',
      `Лучник ${id}`,
      target.health ? 'наносит урон' : 'убивает',
      `${target.id}: (${healthBefore} -> ${target.health})/${target.maxHealth}`,
      '.',
    ]
      .filter(Boolean)
      .join(' '),
  )
}

export const logWarriorHit = (
  { id }: Fighter,
  target: Member,
  damage: number,
  isCritical: boolean,
) => {
  const healthBefore = target.health + damage

  console.log(
    [
      isCritical ? 'Критический удар!' : '',
      `Воин ${id}`,
      target.health ? 'наносит урон' : 'убивает',
      `${target.id}: (${healthBefore} -> ${target.health})/${target.maxHealth}`,
      '.',
    ]
      .filter(Boolean)
      .join(' '),
  )
}

export const logHeal = (healer: Healer, target: Member, heal: number) => {
  const healthBefore = target.health - heal

  console.log(
    [
      `Лекарь ${healer.id} вылечил ${target.id}:`,
      `(${healthBefore} -> ${target.health})/${target.maxHealth}.`,
      `Осталось маны: ${healer.mana}/${healer.maxMana}.`,
    ].join(' '),
  )
}
