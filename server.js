const express = require('express');
const dotEnv = require('dotenv');
const app = express();
const dbConnect = require('./config/dbConnect');
const authRouter = require('./routes/authRoutes');
const dashboardRoute = require('./routes/Dashboard/dashboardRoutes');
const homeRoutes = require('./routes/home/homeRoutes');
const homeCommentRoutes = require('./routes/home/homeCommentRoutes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.get('/', (req, res) => {
  res.send('server is running');
});
dotEnv.config({
  path: 'backend/config/config.env',
});

//use middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
//router use ...
app.use('/rest-api', authRouter);
app.use('/rest-api', dashboardRoute);
app.use('/rest-api', homeRoutes);
app.use('/rest-api', homeCommentRoutes);
//db connection
dbConnect();

const PORT = process.env.PORT || 4000;

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`server is running at port ${PORT}`);
  }
});
