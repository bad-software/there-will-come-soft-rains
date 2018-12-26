import path from 'path'
import cors from 'cors'
import compress from 'compression'
import helmet from 'helmet'

import feathers from '@feathersjs/feathers'
import express from '@feathersjs/express'
import socketio from '@feathersjs/socketio'
import rx from 'feathers-reactive'

import middleware from './middleware'
import services from './services'

import appHooks from './app.hooks'
import authentication from './authentication'
import channels from './channels'
import logger from './logger'

// Change NODE_CONFIG_DIR='server/config'
process.env['NODE_CONFIG_DIR'] = path.join( __dirname, 'config/' )
import configuration from '@feathersjs/configuration'

const app = express( feathers())

// Load app configuration
app.configure( configuration())

// Enable security, CORS, compression, favicon and body parsing
app.use( helmet())
app.use( cors())
app.use( compress())
app.use( express.json())
app.use( express.urlencoded({ extended: true }))
//app.use( favicon( path.join( app.get( 'public' ), 'favicon.ico' )))

// Host the public folder
app.use( '/', express.static( app.get( 'public' )))

// Set up Plugins and providers
app.configure( express.rest())
app.configure( socketio())
app.configure( rx({
  idField: process.env.DATABASE_ID_FIELD
}))

// Configure other middleware (see `middleware/index.js`)
app.configure( middleware )
app.configure( authentication )
// Set up our services (see `services/index.js`)
app.configure( services )

// Set up event channels (see channels.js)
app.configure( channels )

// Configure a middleware for 404s and the error handler
app.use( express.notFound())
app.use( express.errorHandler({ logger }))

app.hooks( appHooks )

module.exports = app
