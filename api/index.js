require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const movieRouter = require('./routers/movie_router.js');
const path = require('path');

const PORT = process.env.PORT || 1234
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('A user connected', socket.id);
    require('./socket_helpers/setup_listeners.js')(socket);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/public')));

app.use('/movies', movieRouter);
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client/public/index.html')));

server.listen(PORT, () => console.log('serving static files on port', PORT));