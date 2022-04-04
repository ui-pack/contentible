import ENV from "./environment.js"

export default function EditorControls({ library }) {
  const container = ENV.document.createElement("div")
  container.setAttribute(`data-${library}-controls`, true)
  container.style.setProperty("display", "flex")
  container.style.setProperty("gap", "10px")
  const boldButton = ENV.document.createElement("button")
  boldButton.style.setProperty("font-weight", "bold")
  boldButton.textContent = "B"
  const italicButton = ENV.document.createElement("button")
  italicButton.style.setProperty("font-style", "italic")
  italicButton.textContent = "I"
  container.appendChild(boldButton)
  container.appendChild(italicButton)
  return container
}
