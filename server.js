var express =require('express');
var path = require('path');
var router = require('./app/routes/router.js');
var app = express();
app.path = process.cwd();

app.use('/public',express.static(path.join(app.path,'app','public')));

router(app);

var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log('listening on port %d', port);
});
