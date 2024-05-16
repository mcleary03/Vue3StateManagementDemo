export const capitalize = str => {
  // const firstLetterIndex = str.match(/[a-zA-z]/)?.index
  // return firstLetterIndex && firstLetterIndex !== -1 ? str.slice(0, firstLetterIndex) + str.charAt(firstLetterIndex).toUpperCase() + str.slice(firstLetterIndex+1) : str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const capitalizeAll = str => str.split(' ').map( subStr => capitalize(subStr)).join(' ')