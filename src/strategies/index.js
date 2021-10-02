import EventStrategy from "./event.js"
import ObserverStrategy from "./observer.js"

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
