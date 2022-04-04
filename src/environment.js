function getWindow() {
  if(typeof window !== "undefined") {
    return window
  }
  return {}
}

const ENV = {
  window: getWindow(),
  document: getWindow().document,
}

export default ENV
