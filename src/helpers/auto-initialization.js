import ENV from "../environment.js"
import cleanup from "./cleanup.js"

export default function autoInitialization(config) {
  // cleanup existing instance
  if(ENV.window.contentible) {
    cleanup(ENV.window.contentible)
  }
  if(config.auto) {
    ENV.window.contentible = config
  }
}