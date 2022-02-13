import { ColorID } from '@/logic/constants'

import { calculateHints, MATCH } from '@/logic/game'

describe('calculateHint', () => {
  it('should return correct hints base on passed guess and answer', () => {
    const GUESS: ColorID[] = ["3", "2", "4", "7"]
    const ANSWER: ColorID[] = ["1", "2", "3", "4"]
    const EXPECTED = [MATCH.MISPLACED, MATCH.OK, MATCH.MISPLACED, MATCH.WRONG]

    const result = calculateHints(GUESS, ANSWER)

    expect(result).toEqual(EXPECTED)
  })

  it('should return correct hints base on passed guess and answer', () => {
    const GUESS: ColorID[] = ["2", "3", "3", "2"]
    const ANSWER: ColorID[] = ["2", "2", "3", "3"]
    const EXPECTED = [MATCH.OK, MATCH.MISPLACED, MATCH.OK, MATCH.MISPLACED]

    const result = calculateHints(GUESS, ANSWER)

    expect(result).toEqual(EXPECTED)
  });

  it("should return all WRONG if the guess is empty", () => {
    const GUESS: ColorID[] = []
    const ANSWER: ColorID[] = ["1", "2", "3", "4"]
    const EXPECTED = [MATCH.WRONG, MATCH.WRONG, MATCH.WRONG, MATCH.WRONG]

    const result = calculateHints(GUESS, ANSWER)

    expect(result).toEqual(EXPECTED)
  })

  it("should return all OK if the guess is correct", () => {
    const GUESS: ColorID[] = ["1", "2", "3", "4"]
    const ANSWER: ColorID[] = ["1", "2", "3", "4"]
    const EXPECTED = [MATCH.OK, MATCH.OK, MATCH.OK, MATCH.OK]

    const result = calculateHints(GUESS, ANSWER)

    expect(result).toEqual(EXPECTED)
  })

  it("should return all MISPLACED if the guesses are in wrong order", () => {
    const GUESS: ColorID[] = ["4", "3", "2", "1"]
    const ANSWER: ColorID[] = ["1", "2", "3", "4"]
    const EXPECTED = [MATCH.MISPLACED, MATCH.MISPLACED, MATCH.MISPLACED, MATCH.MISPLACED]

    const result = calculateHints(GUESS, ANSWER)

    expect(result).toEqual(EXPECTED)
  })
})