import Editor, { EditorControls } from "./editable.js"
import debug from "./helpers/debug.js"

// Auto initializer
(function() {
  const editableElement = document.querySelector(`[data-editable]`)
  debug.visual("Initial load")
  if(editableElement) {
    Editor({
      container: editableElement,
      controls: editableElement.dataset.controls === "true" ? EditorControls : null,
      auto: true,
      content: {
        value: ""
      }
    })
  }
}())