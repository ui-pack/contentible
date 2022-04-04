import Editor, { EditorControls } from "./contentible.js"
import ENV from "./environment.js"
import debug from "./helpers/debug.js"

// Auto initializer
(function() {
  const contentibleElement = ENV.document.querySelector(`[data-contentible]`)
  debug.visual("Initial load", navigator.userAgent)
  if(contentibleElement) {
    Editor({
      container: contentibleElement,
      controls: contentibleElement.dataset.controls === "true" ? EditorControls : null,
      auto: true,
      content: {
        value: ""
      }
    })
  }
}())

export default Editor
export {
  EditorControls,
  debug
}
