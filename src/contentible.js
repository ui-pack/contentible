import EditorControls from "./controls.js"
import { autoInitialization, applyPlaceholder } from "./helpers/index.js"
import debug from "./helpers/debug.js"
import config from "./config.js"

const { library, editor: editorSettings } = config

export default function Editor(userSettings) {
  const settings = {
    ...editorSettings,
    ...userSettings
  }

  autoInitialization(settings)

  const { name, content, controls } = settings
  if (!name && !settings.container) {
    throw new Error("Editor requires a name or container property")
  }
  const container =
    settings.container || document.querySelector(`[data-${library}="${name}"]`)
  const editorRoot = document.createElement("div")
  editorRoot.setAttribute(`data-${library}-root`, true)
  const editor = document.createElement("div")
  editor.setAttribute(`data-${library}-editor`, true)
  editor.setAttribute("contenteditable", true)
  // Make sure it's only one editor in container for every instance
  if (!container || container?.querySelector("[contenteditable]")) {
    return settings
  }
  // Insert controls
  if (controls && controls instanceof Function) {
    container.appendChild(controls({ library }))
  }
  // Apply placeholder
  const placeholder = container.getAttribute("data-placeholder")
  if (!content.value) {
    const placeContainer = document.createElement("span")
    placeContainer.setAttribute(`data-${library}-placeholder`, true)
    placeContainer.textContent = placeholder
    editorRoot.appendChild(placeContainer)
  }
  // Update with default value
  if (content.value) {
    editor.innerHTML = content.value
  }
  // Insert into DOM
  editorRoot.appendChild(editor)
  container.appendChild(editorRoot)
  const placeholderNode = editorRoot.querySelector(
    `[data-${library}-placeholder]`
  )
  // Handle input change
  editor.addEventListener("input", (e) => {
    debug.visual(e.target.innerHTML, e.inputType)
    applyPlaceholder(editorRoot, placeholderNode, e.target.innerHTML)
  })
  return settings
}

export { EditorControls }