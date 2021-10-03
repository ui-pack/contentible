import { applyPlaceholder, mutables } from "../../helpers/index.js"

export default function ObserverStrategy({
  editor,
  editorRoot,
  placeholderNode,
  settings,
}) {
  function observerCallback(mutations) {
    const characterData = mutables.findLast(mutations)
    console.log({ mutations, characterData, settings })
    applyPlaceholder(editorRoot, placeholderNode, characterData.target.data)
  }

  const observer = new MutationObserver(observerCallback)
  observer.observe(editor, {
    childList: true,
    characterData: true,
    characterDataOldValue: true,
    attributes: true,
    attributeOldValue: true,
    subtree: true
  })

  return settings
}
