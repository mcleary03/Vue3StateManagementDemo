// TODO remove this later, just playing with generating styles console logs
export const formattedLog = (strings, ...styles) => {
  return strings.reduce(( arr, string, i ) => {
    arr[0] += `%c${string}` // concat to base tring with style tag
    arr.push(styles[i]) // append corresponding style to array
    return arr
  }, [''])
}

const codeStyle = `
  color: #ccc;
  background-color: #333;
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;
`
const noStyle = ``

// console.log(...formattedLog`hello${'color: red;'} ${noStyle}world!${codeStyle}`)