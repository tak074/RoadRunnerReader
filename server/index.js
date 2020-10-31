const express = require('express');
let app = express();
const port = 2000;

app.use(express.static(__dirname + '/../client/dist'));
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());

app.get('/', (req, res) => {
  res.send('hi');
})

app.listen(port, function() {
  console.log('listening to port', port);
})