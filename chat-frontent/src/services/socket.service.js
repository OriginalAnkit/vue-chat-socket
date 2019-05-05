var connectionOptions = {
    "force new connection": true,
    "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
    "timeout": 10000, //before connect_error and connect_timeout are emitted.
    "transports": ["websocket"]
};
var socket = io.connect('http://localhost:3000', connectionOptions);


export default{
    joinChat:(name)=>{
      socket.emit('newUser',name);
    },
    numUser:()=>{
        return 1
    }
}

var numberOfUser = 0;
var users = [];
 
socket.on('numberOfActiveUsers',function (num) {
    this.numberOfUser = num.numberOfUser;
    console.log('----->',this.numberOfUser)
})