const { Pool } = require('pg')

const pool = new Pool({
	user: 'cloud_user',
	host: 'horijesust.beget.app',
	database: 'test',
	password: 'odr4*TpltJpB',
	port: 5432, // порт, который использует PostgreSQL (по умолчанию 5432)
})

module.exports = pool
