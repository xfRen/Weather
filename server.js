const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(function(request, response, next) {
	if (request.headers['x-forwarded-proto'] === 'https') {
		response.redirect('http://' + request.hostname + request.url);
	} else {
		next();
	}
});
app.use(express.static('public'));
app.get('*', function(request, response) {
	response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(PORT, function() {
	console.log('This message is from server.js; Express server is up on port ' + PORT);
});
