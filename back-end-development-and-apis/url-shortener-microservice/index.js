const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
const dns = require('dns');
const { nanoid } = require('nanoid');

mongoose.connect(process.env.MONGO_URI);

// Basic Configuration
const port = process.env.PORT || 3000;

const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true
  }
});

const Url = mongoose.model('Url', urlSchema);

app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/shorturl', function(req, res) {
  const url = getUrl(req);
  const errorRes = errorResponse();
  const host = getHost(url);
  const shortUrl = generateShortId();
  
  dns.lookup(host, (error, address, family) => {
    //when error, the input url won't be saved
    if (error) {
       res.json(errorRes);
    } else {
      //create and save the url
      createAndSaveUrl(url, shortUrl);
      res.json({'original_url': url, 'short_url': shortUrl });
    }
  });  
});

app.get('/api/shorturl/:shorturl', async function(req, res) {
  //redirect the original url
  //await with async
  const url = await Url.findOne({
    shortUrl : req.params.shorturl
  });
  
  if (url != null) {
    res.redirect(url.originalUrl)
  } else {
    res.json({'error': 'invalid url' })
  }
});

function errorResponse() {
  return { error: 'invalid url' };
};

function getUrl(req) {
  return req.body.url;
};

function getHost(stringUrl) {
  const url = new URL(stringUrl);
  return url.hostname;
};

function generateShortId() {
  return nanoid();
}

function createAndSaveUrl(originalUrl, shortUrl) {
  const inputUrl = new Url({
    originalUrl : originalUrl,
    shortUrl : shortUrl
  });
  
  inputUrl.save((err) => {
    if (err) console.log(err);
  })
};

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

exports.URLModel = URL;