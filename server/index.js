/* eslint-disable no-console */
// Load environment variables
import logger from './logger'


require( 'dotenv-safe' ).config()

const app = require( './app' )

const port = app.get( 'port' )
const server = app.listen( port )

process.on( 'unhandledRejection', ( reason, p ) =>
  logger.error( 'Unhandled Rejection at: Promise ', p, reason )
)

server.on( 'listening', () =>
  logger.info( 'Feathers application started on http://%s:%d', app.get( 'host' ), port )
)
