import { logHeal } from '../log'
import type { Healer, Member } from '../shared'

export const healerAction = (healer: Healer, allies: Member[]) => {
  const needHealing = allies.filter(member => member.health < member.maxHealth)

  if (needHealing.length === 0 || healer.mana < healer.heal.cost) {
    return
  }

  const target =
    needHealing.length === 1
      ? needHealing[0]
      : needHealing.reduce((acc, cur) =>
          acc.maxHealth - acc.health > cur.maxHealth - cur.health ? acc : cur,
        )

  const heal = Math.min(target.maxHealth - target.health, healer.heal.power)

  healer.mana -= healer.heal.cost
  target.health += heal

  logHeal(healer, target, heal)
}
