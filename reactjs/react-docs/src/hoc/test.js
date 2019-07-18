const express = require('express');

const cors = require('cors');
const app = express();

app.use(cors());

app.get('/cat', (req, res) => {
	res.json({data:[{name:'meow-one'},{name:'meow-two'}]});
});

app.get('/puppy', (req, res) => {
	res.json({data:[{name:'bowbow-one'},{name:'bowbow-two'},{name:'bowbow-seven'}]});
});

app.get('/human', (req, res) => {
	res.json({data:[{name:'amar'},{name:'ram'},{name:'surya'},{name:'kandhan'}]});
});

app.listen(3002, () => {
  console.log('Listening on localhost:3002')
})
