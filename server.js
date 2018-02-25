var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;

var config= {
    user: 'uchihamadara301198',
    database: 'uchihamadara301198',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



var articles = {
    'article-one' : {
    title:  'Article One | Rohan Jadhav',
    heading: 'Article One',
    date: 'Feb 21, 2018',
    content:`<p>    
                  This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. 
              </p>
              <p>
                  This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. 
              </p>
              <p>
                  This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. This Is Content Of First Article. 
              </p>`
    },
    'article-two': {
        title:  'Article Two | Rohan Jadhav',
        heading: 'Article Two',
        date: 'Jan 17, 2018',
        content:`<p>    
                 This is The Content For Article Two.
                 </p>`
    },
    'article-three': {
        title:  'Article Three | Rohan Jadhav',
        heading: 'Article Three',
        date: 'Nov 30, 2019',
        content:`<p>    
                 This is The Content For Article Three
                 </p>`
    },
    
};
function createTemplate (data) {
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    
    var htmlTemplate =`
       <html>
      <head>
          <title>
              ${title}
          </title>
          <meta name="viewport" content="width-device-width, initial-scale-1" />
          <link href="/ui/style.css" rel="stylesheet" />
          
      </head>
      
       <body>
          <div class="container">
              
              <div>
                  <a href="/">Home</a>
              </div>
              <hr/>
              <h3>
                  ${heading}
              </h3>
              <div>
                  ${date}
              </div>
              
              <div>
                  ${content}
              </div>
          </div>
      </body>
     </html>
    
      `;
      return htmlTemplate;
}
var counter=0;
app.get('/counter', function (req,res) {
   counter++;
   res.send(counter.toString());
});

var names=[];
app.get('/submit-name/', function (req,res) {
    var name=req.query.name;
    
    names.push(name);
    
    res.send(JSON.stringify(names));
}); 

var pool=new Pool(config);
app.get('/test-db', function( req,res){
    //make a request
    //return a response
    pool.query('SELECt * from test', function (err, result) {
        if(err) {
            res.status(500).send(err.toString());
        } else {
            res.send(JSON.stringfy(result));
        }
    });
});




app.get('/:articleName', function (req, res){
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName])); 
});



app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
