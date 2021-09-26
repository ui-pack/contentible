import { toAttributes } from "./utils.js"

const iconDefaults = {
  width: 24,
  height: 24,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
}

const SVG = xml => {
  return options => {
    const settings = {
      ...iconDefaults,
      ...options
    } 
    const vector = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ${toAttributes(settings)}>
    ${xml}
    </svg>
    `
    if(!settings.button) return vector

    return `
    <button ${toAttributes(settings.button)}>
      ${vector}
    </button>
    `
  }
}

// Get icon SVGs from feathericons.com

const slash = SVG`
  <circle cx="12" cy="12" r="10"></circle>
  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
`

const icons = {
  slash
}

export default function icon(name, options = {}) {
  const iconString = icons[name](options)
  const iconDocument = new DOMParser().parseFromString(iconString, "text/html")
  return iconDocument.body.firstChild
}
