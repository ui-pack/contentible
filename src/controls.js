export default function EditorControls() {
  const container = document.createElement("div")
  container.setAttribute("data-editable-controls", true)
  container.style.setProperty("display", "flex")
  container.style.setProperty("gap", "10px")
  const boldButton = document.createElement("button")
  boldButton.style.setProperty("font-weight", "bold")
  boldButton.textContent = "B"
  const italicButton = document.createElement("button")
  italicButton.style.setProperty("font-style", "italic")
  italicButton.textContent = "I"
  container.appendChild(boldButton)
  container.appendChild(italicButton)
  return container
}