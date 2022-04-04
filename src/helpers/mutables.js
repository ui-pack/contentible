export function findLast(mutations) {
  return mutations.reduce((acc, mutation) => {
    if(mutation.type === "characterData") {
      for (const prop in mutation) {
        acc[prop] = mutation[prop]
      }
    }
    // if(mutation.type === "childList" && mutation.target.innerText === "\n") {
      // const parent = mutation.target.offsetParent
      // acc[target] = { ...mutation.target, data: "\n" }
    // }
    return acc
  }, { target: {} })
}
