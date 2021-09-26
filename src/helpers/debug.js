import icon from "./icon.js"

const debug = {}
debug.visual = function(...params) {
  let debugContainer, output, outputContainer, header
  debugContainer = document.querySelector('[data-editable-debugger]')
  if (!debugContainer) {
    debugContainer = document.createElement('div')
    debugContainer.dataset.editableDebugger = true
    header = document.createElement('div')
    header.dataset.editableDebuggerHeader = true
    header.append(
      "Editable Visual Debugger",
      icon("slash", {
        width: 20,
        height: 20,
        stroke: "currentColor",
        button: {
          'data-editable-debugger-clear': true
        }
      })
    )
    debugContainer.appendChild(header)
    document.body.appendChild(debugContainer)

    // Prepare output
    output = document.createElement('div')
    outputContainer = document.createElement('div')
    output.dataset.editableDebuggerOutput = true
    outputContainer.dataset.editableDebuggerOutputContainer = true

    // Listen for clear button click
    const clearButton = document.querySelector('[data-editable-debugger-clear]')
    if(clearButton) {
      clearButton.onclick = function() {
        output.innerHTML = ""
      }
    }
  } else {
    output = debugContainer.querySelector('[data-editable-debugger-output]')
    outputContainer = debugContainer.querySelector('[data-editable-debugger-output-container]')
  }
  const inputNodes = new DOMParser().parseFromString(`<main>${params.map(p => `<p>${p}</p>`).join("")}</main>`, "text/html")
  output.appendChild(inputNodes.body.firstChild)
  outputContainer.appendChild(output)
  debugContainer.appendChild(outputContainer)
}

export default debug
