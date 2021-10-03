import EventStrategy from "./event/index.js"
import ObserverStrategy from "./observer/index.js"

const strategies = {
  event: EventStrategy,
  observer: ObserverStrategy
}

export function applyStrategy(strategy, options) {
  strategies[strategy](options)
}

export {
  EventStrategy,
  ObserverStrategy
}
