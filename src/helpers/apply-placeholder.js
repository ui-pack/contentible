import * as utils from "./utils.js"

export default function applyPlaceholder(root, node, value) {
  if(node) {
    if(utils.isEmptyContent(value)) {
      // Fill with placeholder if blank
      root.appendChild(node)
    } else {
      // Remove placeholder
      node.remove()
    }
  }
}
