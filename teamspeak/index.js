var TeamSpeakClient = require("node-teamspeak"),
    util = require("util");

var cl = new TeamSpeakClient("ts.imsean.me");
cl.send("login", {client_login_name: "Google", client_login_password: ""}, function(err, response, rawResponse){
    cl.send("use", {sid: 1}, function(err, response, rawResponse){
        cl.send("clientlist", function(err, response, rawResponse){
            console.log(util.inspect(response));
        });
    });
});