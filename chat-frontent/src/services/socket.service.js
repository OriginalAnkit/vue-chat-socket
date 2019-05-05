var connectionOptions = {
    "force new connection": true,
    "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
    "timeout": 10000, //before connect_error and connect_timeout are emitted.
    "transports": ["websocket"]
};
var socket = io.connect('http://localhost:3000', connectionOptions);

var numberOfUser = 0;
var users = []; 

socket.on('numberOfActiveUsers',  (num)=> {
    console.log("++++++", num)
    
    numberOfUser = num.numberOfUser;
    console.log('----->', numberOfUser)
})

export default{
    joinChat:(name)=>{
      socket.emit('newUser',name);
    },
    numUser:numberOfUser
}


 
