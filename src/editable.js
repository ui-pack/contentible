import EditorControls from "./controls.js"
import { autoInitialization, utils } from "./helpers/index.js"

const defaultConfig = {
  content: { value: "" }
}

export default function Editor(userConfig) {
  const config = {
    ...defaultConfig,
    ...userConfig
  }

  autoInitialization(config)

  const { name, content, controls } = config
  if (!name && !config.container) {
    throw new Error("Editor requires a name or container property")
  }
  const container =
    config.container || document.querySelector(`[data-editable="${name}"]`)
  const editorRoot = document.createElement("div")
  editorRoot.setAttribute("data-editable-root", true)
  const editable = document.createElement("div")
  editable.setAttribute("data-editable-editor", true)
  editable.setAttribute("contenteditable", true)
  // Make sure it's only one editor in container for every instance
  if (!container || container?.querySelector("[contenteditable]")) {
    return config
  }
  // Insert controls
  if (controls && controls instanceof Function) {
    container.appendChild(controls())
  }
  // Apply placeholder
  const placeholder = container.getAttribute("data-placeholder")
  if (!content.value) {
    const placeContainer = document.createElement("span")
    placeContainer.setAttribute("data-editable-placeholder", true)
    placeContainer.textContent = placeholder
    placeContainer.setAttribute("contenteditable", false)
    editorRoot.appendChild(placeContainer)
  }
  // Update with default value
  if (content.value) {
    editable.innerHTML = content.value
  }
  // Insert into DOM
  editorRoot.appendChild(editable)
  container.appendChild(editorRoot)
  const placeholderNode = editorRoot.querySelector(
    "[data-editable-placeholder]"
  )
  // Handle keyup events
  editable.addEventListener("keydown", (e) => {
    // Remove placeholder
    if (placeholderNode && /(Digit|Key)/.test(e.code)) {
      placeholderNode.remove()
    }
  })
  // Handle input change
  editable.addEventListener("input", (e) => {
    // Fill with placeholder if blank
    if (placeholderNode && utils.isEmptyContent(e.target.innerHTML)) {
      editorRoot.appendChild(placeholderNode)
    }
  })
  return config
}

export { EditorControls }