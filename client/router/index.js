// @flow strict
import m from 'mithril'
import { routes } from './routes'

// Define root
const root = document.querySelector( '#root' )

// Configure
//m.route.prefix( '' )

// Route
m.route( root, '/', routes )
