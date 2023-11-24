var express = require('express');
var cors = require('cors');
var multer = require('multer');;
const upload = multer({ dest: '/public' });

require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/api/fileanalyze', upload.single('upfile'), (req,res)=>{
  console.log(req.file);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
