import { logWarriorHit, logWarriorMiss } from '../log'
import {
  getDamage,
  randomFromArray,
  type Fighter,
  type Member,
} from '../shared'

export const warriorAction = (warrior: Fighter, enemies: Member[]) => {
  if (enemies.length === 0) {
    return
  }

  if (Math.random() > warrior.accuracy) {
    logWarriorMiss(warrior)

    return
  }

  const meleeEnemies = enemies.filter(enemy => enemy.melee)

  const target = randomFromArray(
    meleeEnemies.length > 0 ? meleeEnemies : enemies,
  )

  const isCritical = Math.random() < warrior.critRate
  const damage = getDamage(warrior, target, isCritical)

  target.health -= damage

  logWarriorHit(warrior, target, damage, isCritical)
}
