const isEmptyContent = html => {
  if(!html) return true

  // Safari leaves a <br>
  if(html === "<br>") return true

  return false
}

const type = literal => {
  const name = literal.constructor.name
  return {
    get is() {
      return name
    },
    isArray:  name === "Array",
    isLiteralObject: name === "Object",
    isMap: name === "Map",
    isNumber: name === "Number",
    isObject: literal instanceof Object,
    isPromise: name === "Promise",
    isSet: name === "Set",
    isString: name === "String",
    isFunction: name === "Function"
  }
}

const words = string => {
  switch (true) {
    case /_/.test(string):
      return string.match(/[a-zA-Z]+(?=(_|$))/g)
    case /-/.test(string):
      return string.match(/[a-zA-Z]+(?=(-|$))/g)
    default:
      return string.match(/[A-Z]?[a-z]+(?=([A-Z]|$))/g)
  }
}

const snakeCase = string => {
  return words(string.replace(/['\u2019]/g, '')).reduce((result, word, index) => (
    result.concat(`${index ? '_' : ''}${word.toLowerCase()}`)
  ), '')
}

const kebabCase = string => {
  return words(string.replace(/['\u2019]/g, '')).reduce((result, word, index) => (
    result.concat(`${index ? '-' : ''}${word.toLowerCase()}`)
  ), '')
}

const camelCase = string => {
  return words(string.replace(/['\u2019]/g, '')).reduce((result, word, index) => (
    result.concat(index ? word : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  ), '')
}

const toAttributes = options => {
  return Object.keys(options).reduce((result, attribute, index) => {
    if(type(options[attribute]).isLiteralObject) return result

    const prefix = index === 0 ? '' : ' '
    return result.concat(`${prefix}${kebabCase(attribute)}=${options[attribute]}`)
  }, '')
}

export {
  camelCase,
  isEmptyContent,
  kebabCase,
  snakeCase,
  toAttributes,
  type
}
