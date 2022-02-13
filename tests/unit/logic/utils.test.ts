import { getRandomListOf } from "@/logic/utils"

describe('getRandomListOf', () => {
  it('should return a list of correct length', () => {
    const result = getRandomListOf(5, [1])

    expect(result).toHaveLength(5)
  })

  it('should contain entities in the returned list', () => {
    const result = getRandomListOf(2, ["a", "b"])

    const ALL_POSSIBILITIES = [
      ["a", "a",],
      ["a", "b",],
      ["b", "a",],
      ["b", "b",],
    ]

    expect(ALL_POSSIBILITIES).toContainEqual(result)
  })

  it('should return empty list of the entities list is empty', () => {
    const result = getRandomListOf(4, [])
    
    expect(result).toHaveLength(0)
  })
})