import icon from "./icon.js"
import config from "../config.js"

const debug = {}
debug.visual = function(...params) {
  let debugContainer, output, outputContainer, header
  debugContainer = document.querySelector(`[data-${config.library}-debugger]`)
  if (!debugContainer) {
    debugContainer = document.createElement('div')
    debugContainer.dataset.contentibleDebugger = true
    header = document.createElement('div')
    header.dataset.contentibleDebuggerHeader = true
    header.append(
      "Contentible Visual Debugger",
      icon("slash", {
        width: 20,
        height: 20,
        stroke: "currentColor",
        button: {
          [`data-${config.library}-debugger-clear`]: true,
          title: 'Clear the debugger console'
        }
      })
    )
    debugContainer.appendChild(header)
    document.body.appendChild(debugContainer)

    // Prepare output
    output = document.createElement('div')
    outputContainer = document.createElement('div')
    output.dataset.contentibleDebuggerOutput = true
    outputContainer.dataset.contentibleDebuggerOutputContainer = true

    // Listen for clear button click
    const clearButton = document.querySelector(`[data-${config.library}-debugger-clear]`)
    if(clearButton) {
      clearButton.onclick = function() {
        output.innerHTML = ""
      }
    }
  } else {
    output = debugContainer.querySelector(`[data-${config.library}-debugger-output]`)
    outputContainer = debugContainer.querySelector(`[data-${config.library}-debugger-output-container]`)
  }
  const inputNodes = new DOMParser().parseFromString(`<main>${params.map(p => `<p>${p}</p>`).join("")}</main>`, "text/html")
  output.appendChild(inputNodes.body.firstChild)
  outputContainer.appendChild(output)
  debugContainer.appendChild(outputContainer)
}

export default debug
