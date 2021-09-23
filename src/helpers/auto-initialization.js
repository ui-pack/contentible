import cleanup from "./cleanup.js"

export default function autoInitialization(config) {
  // cleanup existing instance
  if(window.editable) {
    cleanup(window.editable)
  }
  if(config.auto) {
    window.editable = config
  }
}