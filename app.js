var express =require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = 3000;
app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
server.listen(port, () => {
    console.log(`listening on ${port}`)
})

users=[];
io.sockets.on('connection',(socket)=>{
    socket.on('newUser',function(data) {
        // console.log(data);
        users.push({
            name:data,
            socket:socket
        })
        io.sockets.emit('numberOfActiveUsers',{
            numberOfUser:users.length-1,
            names:users.map(u=>u.name)
        })
    })

    socket.on('disconnect',function(data) {
        console.log('-->',data)
        users=users.filter(u=>u.socket!=socket);
        io.sockets.emit('numberOfActiveUsers', {
            numberOfUser: users.length - 1,
            names: users.map(u => u.name)
        })
    })
})