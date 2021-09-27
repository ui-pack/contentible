import cleanup from "./cleanup.js"

export default function autoInitialization(config) {
  // cleanup existing instance
  if(window.contentible) {
    cleanup(window.contentible)
  }
  if(config.auto) {
    window.contentible = config
  }
}