var express = require( 'express' )
var fbLevel = require( './fbLevel' )
var cp = require( 'child_process' )

var app = express()
app.set('view engine', 'hjs')
app.use( express.logger('dev') )
app.use(express.json())
app.use(express.static(__dirname + '/public'))


// administrator authentication variable, user and pass.
var auth = express.basicAuth(function(user, pass) {
	return user === 'if' && pass === 'admin';
});


// main page render
app.get('/', function(req, res) {
	fbLevel.getDBVals(function(bundle) {
		res.render('index.hjs', {array: bundle})
	})
	
})


// route to flush database. Requires auth.
app.get('/flush', auth, function(req, res) {
	fbLevel.flushDB(function(res){
			console.log(res)
		})
		res.send('Database was flushed...')
	})


// admin route to main page. Requires auth.
app.get('/admin', auth, function(req, res){
	res.send("did somethin..")
	})


// admin route to download feedback db as csv
app.get('/down', auth, function(req, res){
	res.setHeader('content-type', 'text/csv')
	
	var sheetHeaders = ",Date Posted,User Input"
	var sheetBody = ""
	var arr = []
	
	fbLevel.getDBVals(function(bundle) {

		bundle.forEach(function(item){
			
			arr.push("\n")
			arr.push(Date(item.key))
			arr.push(item.value)
			sheetBody = arr.join(",")
		})
		res.send(sheetHeaders + sheetBody)
	})
})


// user posts new feedback to main page
app.post('/', function(req, res) {
	fbLevel.addToDB(req.body.key, req.body.value)
  	res.end('added input to DB')
})


app.listen(process.env.PORT || 3000)
