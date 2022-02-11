export function getRandomListOf<T>(size: number, entities: T[]) {
  const result: T[] = []

  if (!entities.length) return result

  for (let i = 0; i < size; i++) {
    const r = getRandomNumberBetween(0, entities.length - 1)
    result.push(entities[r])
  }

  return result
}

function getRandomNumberBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}