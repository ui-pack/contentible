import debug from "../../helpers/debug.js"
import { applyPlaceholder } from "../../helpers/index.js"

export default function EventStrategy({
  editor,
  editorRoot,
  placeholderNode,
  settings,
}) {

  // Handle input change
  editor.addEventListener("input", (e) => {
    debug.visual(e.target.innerHTML, e.inputType)
    applyPlaceholder(editorRoot, placeholderNode, e.target.innerHTML)
  })

  return settings
}
