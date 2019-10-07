/**
 * 配列の中から一番近い値を返す
 *
 * @param array {number[]}
 * @param findValue {number}
 * @returns {{index: number, value: number}}
 */
export const findClosest = (array: number[], findValue: number) => {
  const diff: number[] = []
  let index = 0

  array.forEach((val, i) => {
    diff[i] = Math.abs(findValue - val)
    index = diff[index] < diff[i] ? index : i
  })
  const value = array[index]
  return { index, value }
}

// example
//
// const findValue = 100
// const array = [1, 109, 13, 70, 251]
//
// console.log(findClosestIndex(array, findValue))
