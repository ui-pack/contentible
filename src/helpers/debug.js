import icon from "./icon.js"

const debug = {}
debug.visual = function(...params) {
  let debugContainer, output, header
  debugContainer = document.querySelector('[data-editable-debugger]')
  if (!debugContainer) {
    debugContainer = document.createElement('div')
    debugContainer.dataset.editableDebugger = true
    header = document.createElement('div')
    header.dataset.editableDebuggerHeader = true
    header.append(
      "Editable Visual Debugger",
      icon("slash", {
        button: {
          'data-editable-debugger-clear': true
        }
      })
    )
    output = document.createElement('div')
    output.dataset.editableDebuggerOutput = true
    debugContainer.appendChild(header)
    document.body.appendChild(debugContainer)
  } else {
    output = debugContainer.querySelector('[data-editable-debugger-output]')
  }
  const inputNodes = new DOMParser().parseFromString(`<main>${params.map(p => `<p>${p}</p>`).join("")}</main>`, "text/html")
  output.appendChild(inputNodes.body.firstChild)
  output.scrollIntoView(false)
  // output.scrollTop += output.scrollHeight
  debugContainer.appendChild(output)
}

export default debug
