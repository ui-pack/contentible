export function findLast(mutations) {
  return mutations.reduce((acc, mutation) => {
    if(mutation.type === "characterData") {
      for (const prop in mutation) {
        acc[prop] = mutation[prop]
      }
    }
    // if(mutation.type === "childList") {
    //   const parent = mutation.target.offsetParent
    // }
    return acc
  }, { target: {} })
}
