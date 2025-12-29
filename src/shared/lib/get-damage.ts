import type { Fighter, Character } from '../types'

export const getDamage = (
  fighter: Fighter,
  target: Character,
  isCritical: boolean,
): number => {
  const damage = Math.ceil(
    (isCritical ? fighter.attack * fighter.critMultiplier : fighter.attack) *
      (1 - target.armor),
  )

  return Math.min(target.health, damage)
}
