export function isEmptyContent(html) {
  if(!html) return true

  // Safari leaves a <br>
  if(html === "<br>") return true

  return false
}