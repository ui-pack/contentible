export default function ObserverStrategy({
  editor,
  editorRoot,
  placeholderNode,
  settings,
}) {
  function observerCallback(mutations) {
    console.log(editor.textContent, mutations)
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
}
