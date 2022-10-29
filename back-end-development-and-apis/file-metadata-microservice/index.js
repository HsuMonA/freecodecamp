const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/'})
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res) {
  const fileName = req.file.originalname;
  const fileType = req.file.mimetype;
  const fileSize = req.file.size;
  res.json({'name': fileName, 'type': fileType, 'size': fileSize})
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
