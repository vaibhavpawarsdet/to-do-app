const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

let tasks = []

// GET home page
app.get('/', (req, res) => {
  res.render('index', { tasks })
})

// POST new task
app.post('/add', (req, res) => {
  const task = req.body.task.trim()
  if (task !== '') {
    tasks.push(task)
  }
  res.redirect('/')
})

// POST delete task
app.post('/remove/:index', (req, res) => {
  const index = req.params.index
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1)
  }
  res.redirect('/')
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})