import EditorControls from "./controls.js"
import { autoInitialization } from "./helpers/index.js"
import { applyStrategy } from "./strategies/index.js"
import config from "./config.js"

const { library, editor: editorSettings } = config

export default function Editor(userSettings) {
  const settings = {
    ...editorSettings,
    ...userSettings
  }

  autoInitialization(settings)

  const { name, content, controls, strategy } = settings

  // Checks
  if (!name && !settings.container) {
    throw new Error("Editor requires a name or container property")
  }
  if(!strategy) {
    throw new Error('A strategy is required to run an editor instance')
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

  applyStrategy(strategy, {
    editor,
    editorRoot,
    placeholderNode,
    settings,
  })

  return settings
}

export { EditorControls }