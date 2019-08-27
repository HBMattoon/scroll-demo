const express =  require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();


app.use('/', express.static(path.join(__dirname, './../client/dist')));

app.get('/api/test', (req, res) => {
  res.send('testing get').end();
})

app.listen(port, ()=> console.log(`listening to port ${port}`));
