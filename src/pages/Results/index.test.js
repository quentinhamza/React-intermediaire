import { formatJobList } from './'
import { formatQueryParams } from './'

describe('The formatJobList function', () => {
  it('should add a comma to a word', () => {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
  })
  it('should not add a comma to the last element of the list', () => {
    const expectedState = 'item3'
    expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
  })
})

describe('formatQueryParams', () => {
  test('should format query params correctly with one answer', () => {
    const answers = { 1: true }
    const result = formatQueryParams(answers)
    expect(result).toBe('a1=true')
  })

  test('should format query params correctly with multiple answers', () => {
    const answers = { 1: true, 2: false, 3: true }
    const result = formatQueryParams(answers)
    expect(result).toBe('a1=true&a2=false&a3=true')
  })
})
