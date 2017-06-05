/* eslint-disable global-require */
const _ = require( "lodash" );
const requirePath = require( "require-path" );

const requires = requirePath( {
	path: [ __dirname ],
	include: [ "**/*.js" ],
	exclude: [ "index.js" ]
} );

module.exports = {
	async init( app ) {
		const modules = await requires;
		_.forEach( modules, ( module, fileName ) => {
			module( app );
		} );
	}
};
