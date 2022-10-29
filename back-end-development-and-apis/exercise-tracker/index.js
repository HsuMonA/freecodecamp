const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

const userSchema = new mongoose.Schema({
  username: String,
});

const User = mongoose.model('User', userSchema);

const exerciseSchema = new mongoose.Schema({
  description: { type: String, required: true},
  duration: {type: Number, required: true},
  date: {type: Date, default: Date.now},
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

app.post('/api/users', function(req, res) {
  const userName = getUserName(req);
  const newUser = createAndSaveUser(userName);
  res.json({'username': newUser.username, '_id': newUser._id })
});

app.post('/api/users/:_id/exercises', async function(req, res) {
  const description = getDescription(req);
  const duration = getDuration(req);
  const date = getDate(req);
  const user = getUser(req);
  const exercise = createAndSaveExercise(description, duration, date, user);
  const searchUser = await User.findById(user).exec();
  res.json({'username': searchUser.username,'description': exercise.description, 'duration': exercise.duration, 'date': exercise.date.toDateString(), '_id': exercise.user})
});

app.get('/api/users', async function(req, res) {
  const getAllUsers = await User.find({}).select('_id username');
  res.json(getAllUsers)
});

app.get('/api/users/:id/logs', async function(req, res) {
  const id = req.params.id;
  const user = await User.findById(id).exec();
  const fromDate = getFromDate(req);
  const toDate = getToDate(req); 
  const limit = getLimit(req);
  const exercisesCount = await Exercise.countDocuments({'user': id})
  const query = Exercise.find({'user': id}).limit(limit).select('description duration date');
  if (fromDate) {
    query.where('date').gte(fromDate)
  } 
  if (toDate) {
    query.where('date').lte(toDate)
  }
  const exerciseLogs = await query;
  const exerciseLogsMap = exerciseLogs.map(element => ({'user': element.id, 'description': element.description, 'duration': element.duration, 'date': element.date.toDateString()}));
  res.json({'username': user.username, 'count': exercisesCount, '_id': id, 'log': exerciseLogsMap})
});

function createAndSaveUser(name) {
  const newUser = new User({ username: name });
  newUser.save((err) => {
    if (err) console.log(err);
  });
  return newUser;
};

function getUserName(req) {
  return req.body.username;
};

function createAndSaveExercise(description, duration, date, user) {
  const defaultDate = new Date();
  const exercise = new Exercise({
    description: description,
    duration: duration,
    date: date || defaultDate,
    user: user
  });
  exercise.save((err) => {
    if (err) console.log(err);  
  });
  return exercise;
};

function getUser(req) {
  return req.body[':_id'] || req.params._id
};

function getDescription(req) {
  return req.body.description
};

function getDuration(req) {
  return req.body.duration
};

function getDate(req) {
  return req.body.date
};

function getFromDate(req) {
  return req.query.from
};

function getToDate(req) {
  return req.query.to
};

function getLimit(req) {
  return req.query.limit
};

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
exports.UserModel = User;
exports.ExerciseModel = Exercise;
