const assert = require( 'assert' )
const app = require( '../../server/app' )

describe( '\'testService\' service', () => {
  it( 'registered the service', () => {
    const service = app.service( 'test-service' )

    assert.ok( service, 'Registered the service' )
  })
})
