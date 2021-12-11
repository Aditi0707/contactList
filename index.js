const express = require('express');
const port = 8000;

const app = express();



app.get('/index', function(req,res){
    res.send(index.html);
});


app.listen(port, function(err){

    if(err){
        console.log('err');
        return;
    }

    console.log('server is running ');

});