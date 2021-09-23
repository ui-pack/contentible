import Editor, { EditorControls } from "editable"

// Auto initializer
(function() {
  const editableElement = document.querySelector(`[data-editable]`)
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