import Editor, { EditorControls } from "./contentible.js"
import debug from "./helpers/debug.js"

// Auto initializer
(function() {
  const contentibleElement = document.querySelector(`[data-contentible]`)
  debug.visual("Initial load")
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
