const express = require('express')
const app = express()
const ejs = require('ejs')
const pool = require('./db') // Подключаемся к базе данных

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	pool.query('SELECT * FROM "Themes"', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const themes = result.rows
		res.render('index', { themes: themes })
	})
})

// Устанавливаем движок шаблонов EJS
app.set('view engine', 'ejs')

// Маршрут для обработки запроса к index.ejs
app.get('/', (req, res) => {
	res.render('index')
})

// Маршрут для обработки запроса к theory.ejs
app.get('/theory1', (req, res) => {
	res.render('theory1')
})

app.get('/Z1-1', (req, res) => {
	res.render('Z1-1')
})

app.get('/theory2', (req, res) => {
	res.render('theory2')
})

app.get('/theory3', (req, res) => {
	res.render('theory3')
})

app.get('/Z2-1', (req, res) => {
	res.render('Z2-1')
})

app.get('/Z2-2', (req, res) => {
	res.render('Z2-2')
})

app.get('/theory4', (req, res) => {
	res.render('theory4')
})

app.get('/Z4-1', (req, res) => {
	res.render('Z4-1')
})

app.get('/Z4-2', (req, res) => {
	res.render('Z4-2')
})

app.get('/theory5', (req, res) => {
	res.render('theory5')
})

app.get('/Z5-1', (req, res) => {
	res.render('Z5-1')
})

app.get('/Z5-2', (req, res) => {
	res.render('Z5-2')
})

app.get('/theory6', (req, res) => {
	res.render('theory6')
})

app.get('/Z6-1', (req, res) => {
	res.render('Z6-1')
})

app.get('/Z6-2', (req, res) => {
	res.render('Z6-2')
})

app.get('/theory7', (req, res) => {
	res.render('theory7')
})

app.get('/Z7-1', (req, res) => {
	res.render('Z7-1')
})

app.get('/Z7-2', (req, res) => {
	res.render('Z7-2')
})

app.get('/theory8', (req, res) => {
	res.render('theory8')
})

app.get('/Z8-1', (req, res) => {
	res.render('Z8-1')
})

app.get('/Z8-2', (req, res) => {
	res.render('Z8-2')
})

app.get('/Z1', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z1', { tasks: tasks })
	})
})
app.get('/Z2', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z2', { tasks: tasks })
	})
})
app.get('/Z3', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z3', { tasks: tasks })
	})
})
app.get('/Z4', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z4', { tasks: tasks })
	})
})
app.get('/Z5', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z5', { tasks: tasks })
	})
})
app.get('/Z6', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z6', { tasks: tasks })
	})
})
app.get('/Z7', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z7', { tasks: tasks })
	})
})
app.get('/Z8', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z8', { tasks: tasks })
	})
})
app.get('/Z9', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z9', { tasks: tasks })
	})
})
app.get('/Z10', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z10', { tasks: tasks })
	})
})
app.get('/Z11', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z11', { tasks: tasks })
	})
})
app.get('/Z12', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z12', { tasks: tasks })
	})
})
app.get('/Z13', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z13', { tasks: tasks })
	})
})

app.get('/theory-empty', (req, res) => {
	res.render('theory-empty')
})
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`)
	console.log(process.version)
})
