export const randomFromArray = <T>(array: T[]) => {
  if (array.length === 0) {
    throw new Error('Array is empty')
  }

  return array[Math.floor(Math.random() * array.length)]
}
