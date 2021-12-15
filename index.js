
const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//parser data from form
app.use(express.urlencoded());

//middleware
app.use(express.static('assests'));
// console.log("aditi");

//middleware1
// app.use(function(req,res,next){
//   console.log('middleware 1 called');
//   next();
// })

contactList = [
  {"Name": "Aditi" ,
    "phone":"21203182"
  },

  {"Name": "Amisha" ,
    "phone":"20392343182"
  },

  {"Name": "Sarita" ,
    "phone":"294385345882"
  }

]



app.get('/', function(req,res){
  return res.render('home', {
    title: "Contact List",
    contact_list:contactList
  });
});


app.get('/practice' , function(req,res){
  return res.render('practice', 
  {title: "playing with ejs"});
})

app.post('/create-contact', (req, res) => {
  
  contactList.push(req.body,);
   return res.redirect('/');
})

app.listen(port, function(err){

    if(err){
        console.log('err');
        return;
    }

    console.log('server is running ');

});