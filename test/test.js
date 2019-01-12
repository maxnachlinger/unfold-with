const unfold = require('../')

describe('Unit tests', () => {
  it('handles missing initial value', () => {
    const value = unfold((x) => x ? [x, x - 1] : null)
    expect(value).toEqual([])
  })

  it('handles missing nextValue value', () => {
    const value = unfold((x) => x ? [x] : null, 0)
    expect(value).toEqual([])
  })

  it('handles missing nextValue and value values', () => {
    const value = unfold((x) => x ? [] : null, 0)
    expect(value).toEqual([])
  })

  it('handles missing fn', () => {
    const value = unfold()
    expect(value).toEqual([])
  })

  it('unfolds an integer down to zero', () => {
    const downToZero = (start) => unfold((x) => x >= 0 ? [x, x - 1] : null, start)
    const value = downToZero(5)
    expect(value).toEqual([5, 4, 3, 2, 1, 0])
  })
})
