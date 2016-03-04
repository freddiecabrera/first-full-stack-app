'use strict';
var http = require('http');
var md5 = require('md5');
var server = http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
    var urlParts = req.url.match(/[^/]+/g);
    console.log(urlParts);
    if(urlParts) {
        var path = urlParts.shift();
        console.log(path);
        switch(path){
            case 'gravatar':
            var data = {};
            var email = urlParts[0];
            var hashed = md5(email);
            data.url = `http://2.gravatar.com/avatar/${hashed}`;
            res.write(JSON.stringify(data));
            break;
            case 'square':
            var num = parseInt(urlParts[0]);
            console.log(square);
            var square = Math.pow(num, 2);
            console.log(square);
            res.write(square);
            break;
            case 'sum':
        var sum = urlParts.reduce(function(sum, num){
            return sum + parseInt(num);
        },0)
        res.write(sum);
        break;
        case 'sentence':
            var obj = {};
            var letterMatch = sentence.match(/[a-z]/ig) || [];
            obj.letterCount = letterMatch.length;
            obj.wordCount = sentence.split(' ').length;
            obj.avgWordCount = obj.letterCount / obj.wordCount;
            var str = JSON.stringify(obj);
            res.write(str);
        }
    };
    res.write('\n')
    res.end()
});
server.listen(3000, function(err){
    console.log('Server listening on port 3000')
});
