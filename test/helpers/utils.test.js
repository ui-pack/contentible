const esmImport = require('esm')(module)
const toAttributes = esmImport('../../src/helpers/utils.js').toAttributes

describe('Helper utils', () => {
  describe.only('toAttributes', () => {
    it('converts object to a string of browser element attributes', () => {
      const expectation = toAttributes({ title: 'My title', 'data-throttle': false })
      expect(expectation).toEqual('title="My title" data-throttle="false"')
    })
  })
})
