// Load express -- in quotations is name of what we imported
// require brings functionality into this file
// Require modules (general steps)
const express = require('express')

// Create our express app -- invoking a function here (general steps)
const app = express()


// Configure the app (app.set)
const fs = require('fs') // this engine requires the fs module
app.engine('jackson', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#msg#', '<h1>' + options.message + '</h1>')
      .replace('#content#', '<div>' + options.content + '</div>')
    return callback(null, rendered)
  })
})

// Template1
app.set('views', './views') // specify the views directory (first one is string second is the path ie directory)
app.set('view engine', 'jackson') // register the hypatia view engine


// Template2
// app.set('views2', './views2') // specify the views directory (first one is string second is the path ie directory)
// app.set('view engine', 'jennifer')


// Mount routes (general stesps)
// Define a "root" route directly on app
// Next time, we'll use best practice routing
// req - request
// res - response
// app.get('/', function (req, res) {
//   res.send('<h1>Hello World!</h1>')
// })

app.get('/', (req, res) => {
  res.render('template1', { title: 'Hey', message: 'Hello there!', content: 'I am the Boss Jackson Hughes!' })
})

app.get('/about-life', (req, res) => {
  res.render('template1', { title: 'Welcome', message: 'Jackson Hughes!', content: 'I am the mayor of this town' })
})

app.get('/another-you', (req, res) => {
  res.render('template1', { title: 'We Are Here to Serve', message: 'This Community!', content: 'We love our home, our community, and our town!' })
})

app.get('/chicken-dinner', (req, res) => {
  res.render('template1', { title: 'Join Us For A Meal', message: 'Free Dinner', content: 'Join us for a lovely chicken dinner this evening at the community center!' })
})

app.get('/good-life', (req, res) => {
  res.render('template1', { title: 'Happiness', message: 'Mine and Yours!', content: 'We want to make the most of every day!' })
})


// Template 2


app.get('/happy-days', (req, res) => {
  res.render('template2', { title: 'Oh, Happy Days!', message: 'Bring it On!', content: 'We are ready to make the most of our time together!' })
})

app.get('/forever-young', (req, res) => {
  res.render('template2', { title: 'Good Music', message: 'Phil Collins in the House!', content: 'Let us stay forever Young!' })
})

app.get('/whats-good', (req, res) => {
  res.render('template2', { title: 'Whats happening?!', message: 'New Activities in Town!', content: 'Join us for all new activities and gatherings!' })
})

app.get('/new-year', (req, res) => {
  res.render('template2', { title: 'The Year Is Coming To A Close!', message: 'What is your New Year resolution?', content: 'Make sure you stick to it, this year!' })
})

app.get('/father-mine', (req, res) => {
  res.render('template2', { title: 'Happy life!', message: 'We are more than ready!', content: 'It does not get any better than this!' })
})


// Tell the app to liste on port 3000 (general steps)
// FOr HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000')
})